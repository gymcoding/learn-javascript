'use strict';

window.onload = function () {
  /*
   - '*'      document.write('*');
   - 개행      document.write('<br>');
   - space    document.write('&nbsp;'); 
   - 가로선     document.write('<hr>');
   */
  //
  document.write('<br>');
  /*
    1] 정사각형
    *****
    *****
    *****
    *****
    *****
  */
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      document.write('*');
    }
    document.write('<br>');
  }
  document.write('<hr>');
  /*
    2] 삼각형1
    *
    **
    ***
    ****
    *****
  */
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
      document.write('*');
    }
    document.write('<br>');
  }
  document.write('<hr>');
  /*
    3] 삼각형1-reverse
    *****
    ****
    ***
    **
    *
  */
  for (let i = 5; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      document.write('*');
    }
    document.write('<br>');
  }
  document.write('<hr>');
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
    for (let j = 0; j <= i; j++) {
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
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
      // space
      document.write('&nbsp');
    }
    for (let j = 5; j > i; j--) {
      document.write('*');
    }
    document.write('<br>');
  }
  document.write('<hr>');
  /*
    5] 정삼각형
        *
       ***
      *****
     ******* 
    ********* 
  */
  for (let i = 0; i < 5; i++) {
    for (let j = 4; j > i; j--) {
      // space
      document.write('&nbsp');
    }
    for (let j = 0; j <= i; j++) {
      document.write('*');
    }
    for (let j = 1; j <= i; j++) {
      document.write('*');
    }
    document.write('<br>');
  }
  document.write('<hr>');
  /*
    5] 정삼각형-reverse
    ********* 
     ******* 
      *****
       ***
        *
  */
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < i; j++) {
      document.write('&nbsp');
    }
    for (let j = 5; j > i; j--) {
      // space
      document.write('*');
    }
    for (let j = 4; j > i; j--) {
      document.write('*');
    }
    document.write('<br>');
  }
  document.write('<hr>');
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
  for (let i = 0; i < 5; i++) {
    for (let j = 4; j > i; j--) {
      document.write('&nbsp');
    }
    for (let j = 0; j <= i; j++) {
      document.write('*');
    }
    for (let j = 1; j <= i; j++) {
      document.write('*');
    }

    document.write('<br>');
  }

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j <= i; j++) {
      document.write('&nbsp');
    }
    for (let j = 4; j > i; j--) {
      document.write('*');
    }
    for (let j = 3; j > i; j--) {
      document.write('*');
    }
    document.write('<br>');
  }
};
