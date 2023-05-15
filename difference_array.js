function difference(array1, array2) {
    const difference = [];
    for (let i = 0; i < array1.length; i++) {
      if (!array2.includes(array1[i])) {
        difference.push(array1[i]);

      }

    }

    for (let i = 0; i < array2.length; i++) {

        if (!array1.includes(array2[i])) {
          difference.push(array2[i]);
        }
      }

      difference.sort((a, b) => a - b);
    return difference;
  }

  console.log(difference([1, 2, 3], [100,23, 2, 1, 10]));
  