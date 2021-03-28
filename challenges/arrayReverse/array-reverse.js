'use strict';

function reverse2 (arr2){
    let l = arr2.length
    let Arr = []
    for(let i = 0; i < l;i++){
      let x = arr2.pop();
      Arr.push(x)
    }
    return Arr
  }