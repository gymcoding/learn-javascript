let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');

// console.log(btn1);
// console.log(btn2);

btn1.onclick = function () {
  alert('Hello 프로퍼티 리스너');
};

btn2.addEventListener('click', helloEvent1);
function helloEvent1() {
  alert('addEventListener 1');
}

btn2.addEventListener('click', helloEvent2);
function helloEvent2() {
  alert('addEventListener 2');
}

btn2.removeEventListener('click', helloEvent1);
btn2.removeEventListener('click', helloEvent2);
