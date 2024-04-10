// const reverseSeq = (n) => {
//   const jumlah = [];
//   for (let i = n; i >= 1; i--) {
//     jumlah.push(i);
//   }
//   return jumlah;
// };

const reverseSeq = (n) => {
  return [...Array(n)].map((el, i) => n - i);
};

console.log(reverseSeq(5));
