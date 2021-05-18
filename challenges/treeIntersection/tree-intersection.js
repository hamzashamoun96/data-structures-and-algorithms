'use strict';
function tree_intersection(bt1 , bt2){
    let bt1Arr = bt1.preOrder();
    let bt2Arr = bt2.preOrder();
    let commonArr = [];
    for(let i = 0; i < bt1Arr.length; i++){
        for(let y = 0; y < bt2Arr.length; y++){
            if(bt1Arr[i] === bt2Arr[y])commonArr.push(bt1Arr[i])
        }
    }
    if(commonArr.length !== 0){
        return commonArr;
    }else{
        return 'Exception';
    }
}
module.exports = tree_intersection;