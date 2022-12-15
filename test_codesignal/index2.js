function solution(inputString) {
  const arr = inputString.split("");
  const count = arr.length;
  console.log(arr);
  let newArr = [];
  for (let i = count; i > 0; i--) {
    console.log("hello");
    newArr.push(arr[i - 1]);
  }
  debugger;
  console.log(newArr);
  const newStr = newArr.join("");
  return inputString === newStr;
}

console.log(solution("aabaa"));
