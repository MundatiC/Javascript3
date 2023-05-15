function getLastElement(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    }
  }

  let num = [1,2,3,4,5,6,7,8];

  console.log(getLastElement(num, 5));