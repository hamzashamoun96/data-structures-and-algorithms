'use strict';
const {LinkedList} = require('../linked-list/linked-list.js')
function llZip(list1,list2){
    let newList = new LinkedList()
    let head1 = list1.head;
    let head2 = list2.head;
    for(let i = 0 ; i < list1.length+list2.length;i++){
      if(head1){
        newList.append(head1.value)
        head1= head1.next
      }if(head2){
        newList.append(head2.value)
        head2= head2.next
      }
    }
    return newList
  }

  module.exports = {
      llZip : llZip
  }