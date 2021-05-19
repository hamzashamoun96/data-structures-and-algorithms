function leftJoin(HTL, HTR) {
  let Arra = [];
  let t = 0;
  for (let i = 0; i < HTL.table.length; i++) {
    if (HTL.table[i] !== undefined) {
      Arra.push([HTL.table[i].head.value.key]);
      Arra[t].push(HTL.table[i].head.value.value);
      t++;
    }
  }
  for (let i = 0; i < Arra.length; i++) {
    for (let y = 0; y < HTR.table.length; y++) {
      if (HTR.table[y] !== undefined) {
        if (HTR.table[y].head.value.key === Arra[i][0]) {
          Arra[i].push(HTR.table[y].head.value.value);
        }
      }
    }
  }
  for (let i = 0; i < Arra.length; i++) {
    if (Arra[i].length === 2) {
      Arra[i].push("NULL");
    }
  }

  return Arra;
}

module.exports = leftJoin;
