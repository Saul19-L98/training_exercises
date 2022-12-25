"use strict";

//Exercise: Create a 'dedupe' function which takes an array of 'Object' instances and a new array with no items that have the same 'item.id' value, but if there's any duplicate items the data for them should be merged into a single object. All of this keeping the original array's order as closely as possible (see the test case for an example of the expected output). You can chech the test file (with a couple of example cases) in the fileystem tab to your left.

const arr2 = [
  {
    id: 2,
    name: "John Doe",
  },
  {
    id: 1,
    name: "Jane Doe",
  },
  {
    id: 3,
    name: "Samuel Soe",
  },
  {
    id: 3,
    phone: "+1222333444",
  },
];

const arr1 = [
  {
    id: 2,
    name: "John Doe",
  },
  {
    id: 1,
    name: "Jane Doe",
  },
  {
    id: 3,
    name: "Samuel Soe",
    phone: "+1222333444",
  },
  {
    id: 4,
    name: "John Doe",
  },
];

function depute(list) {
  return list;
}

//Solution 1
function mergeDuplicatesById(arr) {
  let idSet = new Set();
  let nameSet = new Set();
  let newArr1 = []; //For IDs
  let newArr2 = []; //For Names
  console.log(arr);
  for (let obj of arr) {
    if (!idSet.has(obj.id)) {
      newArr1.push(obj);
      idSet.add(obj.id);
    } else {
      for (let i = 0; i < newArr1.length; i++) {
        if (newArr1[i].id === obj.id) {
          newArr1[i] = { ...newArr1[i], ...obj }; // merge objects
        }
      }
    }
  }
  //Elimanated duplicated name.
  for (let obj of newArr1) {
    if (!nameSet.has(obj.name)) {
      newArr2.push(obj);
      nameSet.add(obj.name);
    } else {
      for (let i = 0; i < newArr2.length; i++) {
        if (newArr2[i].name === obj.name) {
          newArr2[i] = { ...newArr2[i], ...obj }; // merge objects
        }
      }
    }
  }
  return newArr2;
}

console.log("Solution 1:");
console.log(mergeDuplicatesById(arr2));

const iterationOfObjects = (arr, key) => {
  let objectSet = new Set();
  let newArr = [];
  for (let obj of arr) {
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
  }
  return newArr;
};

const iterationOfObjectsRecursiveBetter = (arr, key) => {
  let object = {};
  let newArr = [];
  console.log(arr);
  arr.sort((a, b) => (a[key] < b[key] ? -1 : 1));
  console.log(arr);
  const iterate = (objArr, index = 0) => {
    if (index === objArr.length) return;

    let obj = objArr[index];
    if (!object[obj[key]]) {
      newArr.push(obj);
      object[obj[key]] = true;
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

//Solution 2
function mergeDuplicates2(arr) {
  let newArr = [];
  const idSet = iterationOfObjectsRecursiveBetter(arr, "id");
  newArr.push(...idSet);
  const nameSet = iterationOfObjectsRecursiveBetter(newArr, "name");
  return nameSet;
}

console.log("Solution 2:");
console.log(mergeDuplicates2(arr1));
