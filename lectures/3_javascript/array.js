'use strict';

// // 1] 배열 생성
// const fruits = ['사과', '바나나', '딸기', '파인애플'];
// // const fruits = new Array('사과', '바나나', '딸기');
// console.log('fruits: ', fruits);

// console.log(fruits[0]);
// console.log(fruits[1]);
// fruits[2] = '포도';
// console.log(fruits[2]);

// // 2] 자주 사용하는 배열 API
// // length
// console.log('fruits.length: ', fruits.length);
// console.log('마지막 값: ', fruits[fruits.length - 1]);

// // push()
// fruits.push('귤');
// console.log(fruits);

// // forEach()
// fruits.forEach(function (item, index) {
//   console.log(index, item);
// });

// // pop()
// // fruits.pop();
// // let removedItem = fruits.pop();
// // console.log('removedItem: ', removedItem);
// // console.log('제거완료: ', fruits);

// // shift()
// // fruits.shift();
// // fruits.shift();
// // console.log(fruits);

// // unshift()
// fruits.unshift('수박');
// console.log(fruits);

// // indexOf()
// const index = fruits.indexOf('토마토');
// console.log('index: ', index);

// // splice()
// const findIndex = fruits.indexOf('파인애플');
// console.log('findIndex: ', findIndex);
// fruits.splice(findIndex, 1);
// console.log(fruits);

// 3] 구조 분해 할당
// let fruits = ['사과', '바나나', '딸기'];
// // let apple = fruits[0];
// // let banana = fruits[1];
// // let strawberry = fruits[2];

// let [apple, banana, strawberry, ...others] = [
//   '사과',
//   '바나나',
//   '딸기',
//   'a',
//   'b',
//   'c',
//   'd',
//   'e',
// ];
// console.log(apple);
// console.log(banana);
// console.log(strawberry);
// console.log(others);

// 4] 전개 구문
// let fruits1 = ['사과', '바나나', '딸기'];
// let fruits2 = ['파인애플', '수박'];
// let items = [...fruits1, ...fruits2];
// console.log(items);

// 5] Rest parameter
// print('a', 'b', 'c', 'b', 'e', 'f');

// function print(...values) {
//   // values.forEach(function (value, index) {
//   //   console.log('index: ', index, 'value: ', value);
//   // });
// }

// 얕은 복사(Shallow copy)
// let source = ['사과', '바나나', '딸기'];
// let target = source;
// target[0] = '파인애플';
// console.log('source: ', source);
// console.log('target: ', target);

// 깊은 복사(deep copy)
let source = ['사과', '바나나', '딸기'];
// let target = [...source];
// let target = Array.from(source);
let target = source.slice();
target[0] = '파인애플';
console.log('source: ', source);
console.log('target: ', target);
