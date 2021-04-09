'use strict'
const { LinkedList } = require('../linked-list/linked-list.js')
const llZip = require('./ll_zip.js').llZip;
const l = new LinkedList();
const ll = new LinkedList();

test('should instantiate an empty linked list', () => {
 

    l.append(10)
    l.append(20)
    l.append(30)
    l.append(40)
    ll.append(11)
    ll.append(21)
    // ll.append(31)
    // ll.append(41)
    expect(l.toString()).toEqual('{10}->{20}->{30}->{40}->NULL')
    expect(ll.toString()).toEqual('{11}->{21}->NULL')
    expect(llZip(l, ll).toString()).toEqual('{10}->{11}->{20}->{21}->{30}->{40}->NULL')
    expect(llZip(l, ll).length).toEqual(6)
})
