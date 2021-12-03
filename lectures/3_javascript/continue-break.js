'use strict';
let text = '';
for (let i = 0; i < 10; i++) {
  if (i == 3) {
    // continue;
    break;
  }
  text = text + i;
  // console.log(`text[${i}]: `, text);
}
console.log(text);
