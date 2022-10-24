
//! STR
// let str = "Hello";
// console.log(str);

//! NUM
// let num = 25;
// console.log(num);

//!BOOLEN
// let bool = true;
// let bool2 = false;
// console.log(bool);
// console.log(bool2);

//!UNDEFINED
// let a
// console.log(a);

//!NULL
// let nul = null;
// console.log(nul);

//!OBJECT
// let obj = {
//     user1: {
//         name: "User",
//         age: 15
//     },
//     user2: {
//         name: 'User2',
//         age:20
//     }
// }
// console.log(obj.user2.age);

//!ARRAY
// let arr = [1, 2, 3, 4, 5];

//? slice - копирует элменты ([start], [end]) и создает новый массив
// let arr2 = [6, 7, 8, 9, 10];
// let arr3 = arr.slice([3],[4]);
// console.log(arr3);

// let newArr = [1, "first", null, false];
// console.log(newArr);

// let a = 2;
// a = 10;
// alert(a);
// confirm(a);

// const b = 20;
// b = 100;
// console.log(b);

// var c = 'Hello';
// c = 'World';
// console.log(c);

//! Методы массивов

// ! push/pop

//? pop Выбрасывает последний элемент, после чего его можно словить
// const friends = ['Peter', 'Harry', 'John', 'Dave', ['Sam','Ed', 'Michael']];
// console.log(friends.pop()); 
// const deleted = friends.pop();
// console.log(deleted);
// console.log(friends);

//! shift/unshift

//? push Добавляет последний элемент в массив
// const friends2 = ['Peter', 'Harry', 'John', 'Dave'];
// friends2.push('Alex', 'Ted', true, {}, [1, 23, 4]);
// console.log(friends2);

//! shift/
//? shift/ Выбрасывает первый элемент массива и возвращает его
// const friends = ['Peter', 'Harry', 'John', 'Dave'];
// console.log(friends.shift());
// console.log(friends);


//? unshift Добавляет первый элемент в массив
// const friends = ['Peter', 'Harry', 'John', 'Dave'];
// friends.unshift(1);
// let smth = 1;
// console.log(smth);
// console.log(friends);

//! slice/splice

//? slice Возвращает аргументы
// const friends = ['Peter', 'Harry', 'John', 'Dave'];
// const newFriends = friends.slice();
// console.log(newFriends);

// const friends = ['Peter', 'Harry', 'John', 'Dave'];
// const newFriends = friends.slice(0, 3);
// console.log(newFriends);

//? splice После выбранного индекса все остальное удаляется
// const friends = ['Peter', 'Harry', 'John', 'Dave', 'Том'];
// friends.splice(2, 2, 'Jack', 'Nelly');
// console.log(friends);

//! join/split/reverse
//? join
// const friends = ['Peter', 'Harry', 'John', 'Dave', 'Том'];
// const joined = friends.join(`${name}`)
// console.log(joined);

//? split
// const str = 'Peter and Harry and John and Dave and Tom';
// const newArr = str.split('and');
// console.log(newArr);

//? sort
// const numbers = [23, 34, 35, 98, 76, 10];
// console.log(numbers.sort((a, b)=> a-b));
// console.log(numbers.sort((a, b) => b - a));