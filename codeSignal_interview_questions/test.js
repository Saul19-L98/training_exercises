const iterationOfObjectsRecursive = (arr, key) => {
  let objectSet = new Set();
  let newArr = [];

  const iterate = (objArr, index = 0) => {
    if (index === objArr.length) return;

    let obj = objArr[index];
    if (!objectSet.has(obj[key])) {
      newArr.push(obj);
      objectSet.add(obj[key]);
    } else {
      for (let i = 0; i < newArr.length; i++) {
        if (newArr[i][key] === obj[key]) {
          newArr[i] = { ...newArr[i], ...obj }; // merge objects
        }
      }
    }
    iterate(objArr, index + 1);
  };

  iterate(arr);
  return newArr;
};
