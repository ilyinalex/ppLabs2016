module.exports = [
  {
    task: 'Объявить массив 25 строк',
    select: 1,
    options: [
      'города', 'реки', 'страны', 'острова', 'планеты', 'животные', 'герои книг',
      'писатели фантасты', 'писатели худлит', 'поэты', 'композиторы', 'музыканты',
      'ученые', 'императоры', 'президенты', 'музыкальные группы', 'марки автомобилей',
      'специальности', 'галактики', 'цветы', 'деревья', 'собаки', 'цвета', 'фильмы',
      'науки', 'напитки', 'блюда', 'одежда', 'мебель', 'музыкальные инструменты',
      'операционные системы', 'валюты', 'обувь', 'национальности', 'философы', 'птицы',
      'рыбы', 'киностудии', 'университеты', 'игры', 'художники', 'спортсмены', 'грибы'
    ]
  },
  {
    task: 'Отфильтровать',
    select: 1,
    options: [
      'подходят не длинее 10 букв',
      'подходят только с одним словом в названии',
      'подходят только с двумя словами в названии',
      'в названии могут быть только буквы',
      'должно начинаться с заглавной буквы',
      'должно начинаться со строчной буквы',
      'не должно содержать дефис',
      'должно содержать дефис'
    ]
  },
  {
    task: 'Отсортировать',
    select: 1,
    options: [
      'по алфавиту в прямом порядке А-Я',
      'по алфавиту в обратном порядке Я-А',
      'по возростанию длины слов',
      'по убыванию длины слов',
      'по кол-ву гласных букв',
      'по кол-ву слов в названии'
    ]
  },
  {
    task: 'Для каждого элемента сгенерировать',
    select: 2,
    options: [
      'массив кодов символов',
      'массив слов, встречающихся в строке',
      'массив частоты использования символов',
      'массив встречающихся дифтонгов'
    ]
  },
  {
    task: 'Создать API для работы с массивом',
    select: 2,
    options: [
      'поиск строк в массиве по подстроке',
      'поиск строк массива в тексте',
      'хеширование и поиск по хешу',
      'шифрование и дешифрование'
    ]
  }
];