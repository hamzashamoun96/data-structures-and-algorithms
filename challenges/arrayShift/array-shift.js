'use strict';

module.exports = function insertShiftArray (arr , num){
    if(arr.length % 2===0 ){
  arr.splice((arr.length/2), 0,num);
    }else{
      arr.splice(Math.floor((arr.length/2)+1), 0,num);
    }
  return arr
  }

