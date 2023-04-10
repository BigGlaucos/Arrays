function myFuction(a, b) {
  let array = [];

  if (a.indexOf(b) !== -1) {
    array.push(a + b);
    return array;
  } else {
    array.push(a + b);
    return array;
  }
}

console.log(myFuction("tips", "s"));
