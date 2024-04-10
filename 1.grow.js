function grow(x) {
  let jumlah = x[0];
  for (i = 0; i < x.length; i++) {
    jumlah = jumlah * x[i];
  }
  return x;
}

console.log(grow([1, 2, 3, 4]));
