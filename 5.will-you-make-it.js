const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return fuelLeft >= distanceToPump / mpg;
};
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   if (fuelLeft >= distanceToPump / mpg) {
//     return true;
//   } else {
//     return false;
//   }
// };
console.log(zeroFuel(100, 10, 2));
