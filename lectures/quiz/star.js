'use strict';

window.onload = function () {
  /*
   - '*'      document.write('*');
   - 개행      document.write('<br>');
   - space    document.write('&nbsp;'); 
   - 가로선     document.write('<hr>');
   */
  //
  /*
    1] 정사각형
    *****
    *****
    *****
    *****
    *****
  */
  // for (let i = 0; i < 5; i++) {
  //   // [i = 0, 1, 2, 3, 4, 5]
  //   for (let j = 0; j < 5; j++) {
  //     // [i = 0], [j = 0, 1, 2, 3, 4, 5]
  //     // [i = 1], [j = 0, 1, 2, 3, 4, 5]
  //     // [i = 2], [j = 0, 1, 2, 3, 4, 5]
  //     // [i = 3], [j = 0, 1, 2, 3, 4, 5]
  //     // [i = 4], [j = 0, 1, 2, 3, 4, 5]
  //     document.write('*');
  //   }
  //   // *****<br>
  //   // *****<br>
  //   // *****<br>
  //   // *****<br>
  //   // *****<br>
  //   document.write('<br>');
  // }
  // document.write('<hr>');
  // /*
  //   2] 삼각형1
  //   *
  //   **
  //   ***
  //   ****
  //   *****
  // */
  // for (let i = 0; i < 5; i++) {
  //   // [i = 0, 1]
  //   for (let j = 0; j < i + 1; j++) {
  //     // [i = 0], [j = 0, 1]
  //     // [i = 1],
  //     // [i = 2],
  //     // [i = 3],
  //     // [i = 4],
  //     document.write('*');
  //   }
  //   document.write('<br>');
  // }
  // document.write('<hr>');
  // /*
  //   3] 삼각형1-reverse
  //   *****
  //   ****
  //   ***
  //   **
  //   *
  // */
  // // for (let i = 0; i < 5; i++) {
  // //   // [i = 0, 1]
  // //   for (let j = 0; j < 5 - i; j++) {
  // //     // [i = 0], [j = 0, 1, 2, 3 ,4]
  // //     // [i = 1],
  // //     document.write('*');
  // //   }
  // //   document.write('<br>');
  // // }
  // for (let i = 5; i > 0; i--) {
  //   // [i = 5, 4, 3, 2, 1]
  //   for (let j = 0; j < i; j++) {
  //     // [i = 0], [j = 0, 1, 2, 3 ,4]
  //     // [i = 1],
  //     document.write('*');
  //   }
  //   document.write('<br>');
  // }
  // document.write('<hr>');
  // *****
  //
  /*
    4] 삼각형2
        *
       **
      ***
     ****
    *****
  */
  for (let i = 0; i < 5; i++) {
    for (let j = 4; j > i; j--) {
      document.write('&nbsp;');
    }
    for (let k = 0; k < i + 1; k++) {
      document.write('*');
    }
    document.write('<br>');
  }
  document.write('<hr>');
  /*
    5] 삼각형2-reverse
    *****
     ****
      ***
       **
        *
  */
  /*
    5] 정삼각형
        *
       ***
      *****
     ******* 
    ********* 
  */
  /*
    5] 정삼각형-reverse
    ********* 
     ******* 
      *****
       ***
        *
  */
  /*
    5] 다이아몬드
        *
       ***
      *****
     ******* 
    ********* 
     ******* 
      *****
       ***
        *
  */
};
