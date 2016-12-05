'use strict';
//[1,2,3,4,52,50].filter(x => x>50)
let p =[
'Гильгамеш',
'Медея',
'Одиссей',
'Тримальхион',
'Антигона',
'Филемон и Бавкида',
'Литература народов Азии',
'Шахерезада',
'Ходжа Насреддин',
'Герои американской литературы',
'Том Сойер и Гекльберри Финн',
'Мартин Иден',
'Сантьяго',
'Холден Колфилд',
'Тарзан',
'Конан',
'Лолита',
'Английская литература',
'Робин-Гуд',
'Ромео и Джульетта',
'Гам-лет',
'Отелло',
'Робинзон Крузо',
'Лемюэль Гулливер',
'Роберт Ловелас'
];
let parr = p.filter(item=> (item.indexOf("-")==-1));
//for(let i =0;i<parr.length;i++)
//  console.dir(parr[i]+"   !!!");
p.sort();
//p.forEach(item =>{
//  if(item.indexOf('-')<0) console.dir(item);
//  console.dir(item.indexOf('-'));
//});
global = {};
global.api={}
global.api.poisk =function(p,s){
  for(let i=0;i<p.length;i++){
    if(p[i].indexOf(s)!=-1) 
      console.dir(p[i]);
  }
  console.dir('dsd');
}
global.hash = [];
global.api.poisk =function(p,s){
  for(let i=0;i<p.length;i++){
    if(p[i].indexOf(s)!=-1) 
      console.dir(p[i]);
  }
}
global.api.hhash =function(p,s){
  let a =0;
  let b =0;
  for(let i=0;i<p.length;i++){
    a=0;
    b=0;
    for(let j=0;j<h.length;j++)
      if('аеоую'.indexOf(p[i][j])!=-1) a++;
      else b++; 
  global.hash[a*b*p[i].length] = p[i];
  console.dir(a*b*p[i].length);
      }
  
}

global.api.poisk(p,'Роб');
let h = 'Марикус Мудакус';
for(let i=0;i<h.length;i++)
  if('аеоую'.indexOf(h[i])!=-1) console.dir('Hello');
global.api.hhash(p,'dsdd');
let name = parseInt(process.argv[2]);
console.dir(global.hash[name]);
let n = 0b000010000100101;
console.log(n.toString(10));
let k = parseInt('000010001',2);