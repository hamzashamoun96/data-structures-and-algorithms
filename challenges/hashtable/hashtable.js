const { LinkedList } = require("../linked-list/linked-list");

class Hashtable {
  table = new Array(53);

  add(key, value) {
    let hashed = this.hash(key);
    if (!this.table[hashed]) this.table[hashed] = new LinkedList();
    this.table[hashed].append({ key, value });
  }
  hash(key) {
    let hash = 83;
    for (let i = 0; i < key.length; i++) {
      hash = (hash * 599 * key.charCodeAt(i)) % this.table.length;
    }
    return hash;
  }
  get(key) {
    let hashed = this.hash(key);
    if (this.contains(key)) {
      let current = this.table[hashed].head;
      while (current) {
        if (current.value.key === key) {
          return current.value.value;
        } else {
          current = current.next;
        }
      }
    }
    return null;
  }
  contains(key) {
    let hashed = this.hash(key);
    return this.table[hashed] ? true : false;
  }
}
module.exports = Hashtable;
