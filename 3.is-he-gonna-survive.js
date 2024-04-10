function hero(bullets, dragons) {
  //   if (bullets / 2 >= dragons) {
  //     return true;
  //   } else {
  //     return false;
  // }
  if (bullets >= 2 * dragons) {
    return true;
  } else {
    return false;
  }
}
console.log(hero(3, 5));
