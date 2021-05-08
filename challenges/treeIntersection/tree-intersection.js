'use strict';
function tree_intersection(bt1 , bt2){
    let bt1Arr = bt1.preOrder();
    let bt2Arr = bt2.preOrder();
   return bt1Arr.filter(ele=> bt2Arr.includes(ele));
}
module.exports = tree_intersection;