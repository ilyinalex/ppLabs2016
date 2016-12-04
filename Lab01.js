'use strict';
//Объявить массив 25 строк(герои книг)
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

//Отфильтровать(не должно содержать дефис)
let filt = p.filter(item => item.indexOf('-')===-1);

//Отсортировать(по алфавиту в прямом порядке А-Я)
filt.sort();

//Для каждого элемента сгенерировать
  //1)массив частоты использования символов
let dictChar = {};
 for(let i =0;i<filt.length;i++)
   for(let j =0;j<filt[i].length;j++){
     if(!(dictChar[filt[i][j]] > 0))
     dictChar[filt[i][j]]=1; else 
       dictChar[filt[i][j]]++;
   }
/*
for(let key in dictChar){
  console.dir(dictChar[key]+' '+key)
}
*/

  //2)массив встречающихся дифтонгов
let dictDif = {};
for(let i =0;i<filt.length;i++)
   for(let j =1;j<filt[i].length;j++){
     if('ауоыиэяюёе'.indexOf(filt[i][j])!=-1 && 'ауоыиэяюёе'.indexOf(filt[i][j-1])!=-1) dictDif[filt[i][j-1]+filt[i][j]] = 1;
   }
/*
for(let key in dictDif){
  console.dir(key)
}
*/

//Создать API для работы с массивом
 //1)хеширование и поиск по хешу
global = {};
global.api={}
global.api.hash =function(p){
  let a =0;
  let b =0;
  let hash = {};
  for(let i=0;i<p.length;i++){
    a=0;
    b=0;
    for(let j=0;j<p[i].length;j++)
      if('ауоыиэяюёе'.indexOf(p[i][j])!=-1) a++;
      else b++; 
    hash[a*b*p[i].length] = p[i];
      }
  return hash;
}
let hash = global.api.hash(filt);
//console.dir(hash[parseInt(process.argv[2])]);

 //шифрование и дешифрование
global.api.cipher =function(p){
  let cipher = [];
  for(let i=0;i<p.length;i++){
    cipher[i] = '';
    for(let j=0;j<p[i].length;j++){
      cipher[i]+= String.fromCharCode(p[i][j].charCodeAt(0)+3);
    } 
  }
  return cipher;
}

global.api.decipher =function(p){
  let decipher = [];
  for(let i=0;i<p.length;i++){
    decipher[i] = '';
    for(let j=0;j<p[i].length;j++)
      decipher[i]+= String.fromCharCode(p[i][j].charCodeAt(0)-3);    
  }
  return decipher;
}

let cipher = global.api.cipher(filt);
let decipher = global.api.decipher(cipher);
for(let key in decipher){
  console.dir(decipher[key]);
}