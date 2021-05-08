'use strict';
const Hashtable = require('./hashtable.js');

describe('Hash Table Tests',()=>{
    it('should create a new hashtable',()=>{
        const HT = new Hashtable()
        expect(HT.table.length).toBe(53)
    });
    it('should add a new key value pair to the hash table',()=>{
        const HT = new Hashtable();
        const key = 'hamza';
        const value = 10;
        let index = HT.hash(key)

        HT.add(key,value)
        expect(HT.table[index].head.value.key).toBe('hamza');
        expect(HT.table[index].head.value.value).toBe(10);
    });
    it('should NOT cause a collision',()=>{
        const HT = new Hashtable();
        
        const key = 'hamza';
        const value = 10;
        const idx = HT.hash(key);

        const key2 = 'hamza';
        const value2 = 20;
        const idx2 = HT.hash(key2);

        HT.add(key , value);
        HT.add(key2 , value2);

        expect(idx).toEqual(idx2);
        expect(HT.table[idx].head.value).toEqual({key,value});
        expect(HT.table[idx].head.next.value).toEqual({key:key2,value:value2});
    });
    it('should return true if the key is exists inside the hash table',()=>{
        const HT = new Hashtable();
        const key = 'hamza';
        const value = 10;
        HT.add(key,value)
        expect(HT.contains(key)).toBeTruthy();

    });
    it('should return false if the key is NOT exists inside the hash table',()=>{
        const HT = new Hashtable();
        const key = 'hamza';

        expect(HT.contains(key)).toBeFalsy();
    });
    it('should return the value of a key if the key is exists inside the hash table',()=>{
        const HT = new Hashtable();

        const key = 'hamza';
        const value = 10;

        const key2 = 'hamaz';
        const value2 = 20;

        HT.add(key,value);
        HT.add(key2,value2);

        expect(HT.get(key)).toBe(value);
        expect(HT.get(key2)).toBe(value2);

    });
});