function repeatedWord(str) {
    let strArr = str.split(",").join("").split(" ");
    let len = strArr.length;
    let checkArr = [];
  
    for (let i = 0; i < len; i++) {
      let temp = strArr.shift().toLowerCase();
      if (checkArr.includes(temp)) {
        return temp;
      }
      checkArr.push(temp);
    }
    return "Not Repeated Words";
  }
  module.exports = repeatedWord;