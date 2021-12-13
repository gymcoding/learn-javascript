'use strict';
// let person = {
//   fullname: '짐코딩',
//   age: 20,
//   printThis: function () {
//     console.log(this);
//     console.log('this === person: ', this === person);
//     console.log('this === window: ', this === window);
//   },
// };
// // person.printThis();
// let printThis = person.printThis;
// printThis();

function printThis() {
  console.log(this); // default this => window
}
printThis();

// let person1 = {
//   name: '홍길동1',
//   printThis: printThis,
// };
// person1.printThis();

// let person2 = {
//   name: '홍길동2',
//   printThis: printThis,
// };
// person2.printThis();

// let person3 = {
//   name: '홍길동3',
//   printThis: printThis,
// };
// person3.printThis();

// window
let btn = document.querySelector('button');
btn.addEventListener('click', function () {
  console.log(this);
  console.log(this === btn);
});

// ES5 bind - this 설정
// function printThis() {
//   console.log(this); // default this => window
// }
// let person1 = {
//   name: '홍길동',
// };
// let person2 = {
//   name: '김길동',
// };
// let printThis1 = printThis.bind(person1);
// printThis1();

// let person = {
//   name: '짐코딩',
//   age: 20,
//   hello: function () {
//     setTimeout(() => {
//       console.log(this);
//     }, 1000);
//     // setTimeout(function () {
//     //   console.log(this);
//     //   console.log(that.name);
//     //   console.log(that.age);
//     // }, 1000);
//   },
// };
// person.hello();

// console.log(this);
// console.log(this === window);

let person = {
  name: '짐코딩',
  printThis: function () {
    console.log(this); // window 객체 출력
  },
};
person.printThis();
