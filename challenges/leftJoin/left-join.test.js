"use strict";
const leftJoin = require("./left-join");
const Hashtable = require("../hashtable/hashtable");

describe("left join test", () => {
    const HTL = new Hashtable();
    const HTR = new Hashtable();
    let key1;
    let key2;
    let value1;
    let value2;
  beforeAll(() => {

    
    
    key1 = ["fond", "warth", "diligent", "outift", "guide"];
    value1 = ["enamored", "anger", "employed", "garb", "usher"];

    key2 = ["fond", "warth", "diligent", "guide", "flow"];
    value2 = ["averse", "delight", "idle", "follow", "jam"];

    for (let i = 0; i < key1.length; i++) {
      HTL.add(key1[i], value1[i]);
      HTR.add(key2[i], value2[i]);
    }

  });
  it('should create two tables of key / value pairs',()=>{
      expect(HTL.table.length).toBe(53)
      expect(HTR.table.length).toBe(53)
      expect(HTL.get(key1[0])).toBe(value1[0])
      expect(HTR.get(key2[0])).toBe(value2[0])

  })
  it("should return according to LEFT JOIN logic.",()=>{
      expect(leftJoin(HTL,HTR)).toStrictEqual(
        [
            [ 'guide', 'usher', 'follow' ],
            [ 'diligent', 'employed', 'idle' ],
            [ 'warth', 'anger', 'delight' ],
            [ 'fond', 'enamored', 'averse' ],
            [ 'outift', 'garb', 'NULL' ]
        ]
      )
  })
});
