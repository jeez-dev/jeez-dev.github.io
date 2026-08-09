(function(){
'use strict';

var UPGRADES=[
  {id:'cursor',name:'Auto-Clicker',icon:'👆',baseCps:0.1,baseCost:15},
  {id:'grandma',name:'Grandma',icon:'👵',baseCps:1,baseCost:100},
  {id:'farm',name:'Farm',icon:'🌾',baseCps:8,baseCost:1100},
  {id:'factory',name:'Factory',icon:'🏭',baseCps:20,baseCost:12000},
  {id:'bank',name:'Bank',icon:'🏦',baseCps:50,baseCost:130000},
  {id:'temple',name:'Temple',icon:'⛪',baseCps:100,baseCost:1400000},
  {id:'wizard',name:'Wizard Tower',icon:'🧙',baseCps:200,baseCost:20000000},
  {id:'shipment',name:'Shipment',icon:'🚀',baseCps:400,baseCost:330000000},
  {id:'alchemy',name:'Alchemy Lab',icon:'⚗️',baseCps:800,baseCost:5100000000},
  {id:'portal',name:'Portal',icon:'🌀',baseCps:1600,baseCost:75000000000},
  {id:'timeMachine',name:'Time Machine',icon:'⏰',baseCps:3200,baseCost:1000000000000},
  {id:'antimatter',name:'Antimatter Condenser',icon:'⚛️',baseCps:6400,baseCost:14000000000000}
];

var COST_MULT=1.15;
var PRESTIGE_DIVISOR=1000000;
var SAVE_KEY='cookieClickerJeez_save';
var AUTO_SAVE_MS=30000;
var TICK_MS=50;

var state={
  cookies:0,
  totalCookiesEarned:0,
  totalCookiesAllTime:0,
  prestigeLevel:0,
  clickPower:1,
  buildings:{},
  lastSave:Date.now(),
  lastTick:Date.now(),
  adBoostExpiry:0
};

for(var i=0;i<UPGRADES.length;i++){
  state.buildings[UPGRADES[i].id]=0;
}

var audioCtx=null;
function getAudioCtx(){
  if(!audioCtx){
    try{audioCtx=new(window.AudioContext||window.webkitAudioContext)();}catch(e){}
  }
  return audioCtx;
}

function playClick(){
  var ctx=getAudioCtx();if(!ctx)return;
  try{
    var osc=ctx.createOscillator();var gain=ctx.createGain();
    osc.type='sine';osc.frequency.setValueAtTime(800,ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(400,ctx.currentTime+0.1);
    gain.gain.setValueAtTime(0.15,ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+0.1);
    osc.connect(gain);gain.connect(ctx.destination);
    osc.start(ctx.currentTime);osc.stop(ctx.currentTime+0.1);
  }catch(e){}
}

function playBuy(){
  var ctx=getAudioCtx();if(!ctx)return;
  try{
    var osc=ctx.createOscillator();var gain=ctx.createGain();
    osc.type='triangle';osc.frequency.setValueAtTime(500,ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(900,ctx.currentTime+0.12);
    gain.gain.setValueAtTime(0.12,ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+0.15);
    osc.connect(gain);gain.connect(ctx.destination);
    osc.start(ctx.currentTime);osc.stop(ctx.currentTime+0.15);
  }catch(e){}
}

function formatNum(n){
  if(n<0)return'-'+formatNum(-n);
  if(n<1000)return Math.floor(n).toString();
  var suffixes=['','K','M','B','T','Qa','Qi','Sx','Sp','Oc','No','Dc','UDc','DDc','TDc','QaDc','QiDc'];
  var tier=Math.floor(Math.log10(Math.abs(n))/3);
  if(tier>=suffixes.length||tier===0){
    if(tier===0)return n<1000?Math.floor(n).toString():n.toExponential(2);
    return n.toExponential(2);
  }
  var scaled=n/Math.pow(10,tier*3);
  return(scaled<10?scaled.toFixed(2):scaled<100?scaled.toFixed(1):scaled.toFixed(0))+suffixes[tier];
}

function getUpgradeCost(upgrade,owned){
  return Math.ceil(upgrade.baseCost*Math.pow(COST_MULT,owned));
}

function getCps(){
  var cps=0;
  for(var i=0;i<UPGRADES.length;i++){
    var u=UPGRADES[i];
    cps+=u.baseCps*state.buildings[u.id];
  }
  var prestigeMult=1+state.prestigeLevel*0.01;
  var adMult=Date.now()<state.adBoostExpiry?2:1;
  return cps*prestigeMult*adMult;
}

function getClickPower(){
  var prestigeMult=1+state.prestigeLevel*0.01;
  var adMult=Date.now()<state.adBoostExpiry?2:1;
  return state.clickPower*prestigeMult*adMult;
}

function getPrestigeGain(){
  return Math.floor(Math.sqrt(state.totalCookiesAllTime/PRESTIGE_DIVISOR))-state.prestigeLevel;
}

var $=function(id){return document.getElementById(id)};

function createUpgradeItem(upgrade){
  var div=document.createElement('div');
  div.className='upgrade-item';
  div.dataset.id=upgrade.id;
  div.innerHTML=
    '<span class="upgrade-icon">'+upgrade.icon+'</span>'+
    '<div class="upgrade-info">'+
      '<div class="upgrade-name">'+upgrade.name+'</div>'+
      '<div class="upgrade-cps">+'+formatNum(upgrade.baseCps)+' CPS</div>'+
    '</div>'+
    '<span class="upgrade-cost"></span>'+
    '<span class="upgrade-owned"></span>';
  div.addEventListener('click',function(){buyUpgrade(upgrade.id);});
  return div;
}

function renderShop(){
  var list=$('upgrade-list');
  if(list.children.length===0){
    for(var i=0;i<UPGRADES.length;i++){
      list.appendChild(createUpgradeItem(UPGRADES[i]));
    }
  }
  for(var i=0;i<UPGRADES.length;i++){
    var u=UPGRADES[i];
    var owned=state.buildings[u.id];
    var cost=getUpgradeCost(u,owned);
    var item=list.querySelector('[data-id="'+u.id+'"]');
    if(!item)continue;
    item.querySelector('.upgrade-cost').textContent=formatNum(cost);
    item.querySelector('.upgrade-owned').textContent=owned>0?'x'+owned:'';
    if(state.cookies>=cost){
      item.classList.add('affordable');
      item.classList.remove('unaffordable');
    }else{
      item.classList.remove('affordable');
      item.classList.add('unaffordable');
    }
  }
}

function updateUI(){
  $('cookie-amount').textContent=formatNum(state.cookies);
  $('cps-amount').textContent=formatNum(getCps());
  $('click-power-amount').textContent=formatNum(getClickPower());
  if(state.prestigeLevel>0){
    $('prestige-display').classList.remove('hidden');
    $('prestige-level').textContent=state.prestigeLevel;
    $('prestige-bonus').textContent=state.prestigeLevel;
  }
  var pg=getPrestigeGain();
  if(pg>0){
    $('prestige-btn').classList.remove('hidden');
  }else{
    $('prestige-btn').classList.add('hidden');
  }
  renderShop();
}

function spawnFloatNumber(x,y,amount){
  var el=document.createElement('div');
  el.className='float-num';
  el.textContent='+'+formatNum(amount);
  el.style.left=x+'px';
  el.style.top=y+'px';
  $('floating-numbers').appendChild(el);
  setTimeout(function(){if(el.parentNode)el.parentNode.removeChild(el);},900);
}

function clickCookie(e){
  var power=getClickPower();
  state.cookies+=power;
  state.totalCookiesEarned+=power;
  state.totalCookiesAllTime+=power;
  playClick();
  var rect=$('big-cookie').getBoundingClientRect();
  var cx,cy;
  if(e&&e.clientX!==undefined){cx=e.clientX;cy=e.clientY;}
  else{cx=rect.left+rect.width/2;cy=rect.top+rect.height/2;}
  spawnFloatNumber(cx-20,cy-30,power);
  var cookie=$('big-cookie');
  cookie.classList.add('clicked');
  setTimeout(function(){cookie.classList.remove('clicked');},80);
  updateUI();
}

function buyUpgrade(id){
  var upgrade=null;
  for(var i=0;i<UPGRADES.length;i++){
    if(UPGRADES[i].id===id){upgrade=UPGRADES[i];break;}
  }
  if(!upgrade)return;
  var owned=state.buildings[id];
  var cost=getUpgradeCost(upgrade,owned);
  if(state.cookies<cost)return;
  state.cookies-=cost;
  state.buildings[id]++;
  playBuy();
  updateUI();
}

function doPrestige(){
  var gain=getPrestigeGain();
  if(gain<=0)return;
  state.prestigeLevel+=gain;
  state.cookies=0;
  state.totalCookiesEarned=0;
  state.clickPower=1;
  for(var i=0;i<UPGRADES.length;i++){
    state.buildings[UPGRADES[i].id]=0;
  }
  saveGame();
  updateUI();
  $('prestige-modal').classList.add('hidden');
}

function showPrestigeModal(){
  var gain=getPrestigeGain();
  if(gain<=0)return;
  $('prestige-gain').textContent=gain;
  $('prestige-new-total').textContent=state.prestigeLevel+gain;
  $('prestige-new-bonus').textContent=state.prestigeLevel+gain;
  $('prestige-modal').classList.remove('hidden');
}

function saveGame(){
  state.lastSave=Date.now();
  try{
    localStorage.setItem(SAVE_KEY,JSON.stringify(state));
  }catch(e){}
}

function loadGame(){
  try{
    var raw=localStorage.getItem(SAVE_KEY);
    if(!raw)return false;
    var saved=JSON.parse(raw);
    if(!saved||typeof saved.cookies!=='number')return false;
    state.cookies=saved.cookies||0;
    state.totalCookiesEarned=saved.totalCookiesEarned||0;
    state.totalCookiesAllTime=saved.totalCookiesAllTime||0;
    state.prestigeLevel=saved.prestigeLevel||0;
    state.clickPower=saved.clickPower||1;
    state.adBoostExpiry=saved.adBoostExpiry||0;
    state.lastSave=saved.lastSave||Date.now();
    state.lastTick=saved.lastTick||Date.now();
    for(var i=0;i<UPGRADES.length;i++){
      var id=UPGRADES[i].id;
      state.buildings[id]=saved.buildings?saved.buildings[id]||0:0;
    }
    return true;
  }catch(e){return false;}
}

function calcOfflineProgress(){
  var now=Date.now();
  var elapsed=now-state.lastTick;
  if(elapsed<5000)return;
  var cps=getCps();
  if(cps<=0)return;
  var earned=cps*elapsed/1000;
  state.cookies+=earned;
  state.totalCookiesEarned+=earned;
  state.totalCookiesAllTime+=earned;
  var seconds=Math.floor(elapsed/1000);
  var minutes=Math.floor(seconds/60);
  var hours=Math.floor(minutes/60);
  var days=Math.floor(hours/24);
  var timeStr='';
  if(days>0)timeStr+=days+'d ';
  if(hours%24>0)timeStr+=(hours%24)+'h ';
  if(minutes%60>0)timeStr+=(minutes%60)+'m ';
  timeStr+=(seconds%60)+'s';
  $('offline-time').textContent=timeStr;
  $('offline-cookies').textContent=formatNum(earned);
  $('offline-modal').classList.remove('hidden');
}

function gameTick(){
  var now=Date.now();
  var elapsed=now-state.lastTick;
  if(elapsed>0){
    var cps=getCps();
    var earned=cps*elapsed/1000;
    state.cookies+=earned;
    state.totalCookiesEarned+=earned;
    state.totalCookiesAllTime+=earned;
  }
  state.lastTick=now;
  updateUI();
}

function showAdSlot(){
  var slot=$('ad-slot');
  slot.classList.remove('hidden');
}

function init(){
  var loaded=loadGame();
  if(loaded){
    calcOfflineProgress();
  }else{
    state.lastTick=Date.now();
    state.lastSave=Date.now();
  }

  $('big-cookie').addEventListener('click',clickCookie);
  $('big-cookie').addEventListener('keydown',function(e){
    if(e.key==='Enter'||e.key===' '){e.preventDefault();clickCookie(e);}
  });

  $('save-btn').addEventListener('click',function(){saveGame();});
  $('prestige-btn').addEventListener('click',showPrestigeModal);
  $('prestige-confirm').addEventListener('click',doPrestige);
  $('prestige-cancel').addEventListener('click',function(){$('prestige-modal').classList.add('hidden');});
  $('offline-ok').addEventListener('click',function(){$('offline-modal').classList.add('hidden');});

  setInterval(gameTick,TICK_MS);
  setInterval(saveGame,AUTO_SAVE_MS);

  showAdSlot();
  updateUI();

  window.addEventListener('beforeunload',saveGame);
}

if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',init);
}else{
  init();
}

window.CookieClicker={
  getState:function(){return state;},
  simulateAdReward:function(){
    state.adBoostExpiry=Date.now()+3600000;
    updateUI();
  }
};

})();
