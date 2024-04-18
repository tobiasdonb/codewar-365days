// function countBy(x, n) {
//   let z = [];
//   for (i = 1; i < n + 1; i++) {
//     z.push(x * i);
//   }
//   return z;
// }

const countBy = (x, n) => [...Array(n)].map((el, i) => (i + 1) * x);

console.log(countBy(2, 5));
