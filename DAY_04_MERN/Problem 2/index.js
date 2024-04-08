// Create a custom implementation of a commonly used higher-order function (e.g., a map,reducefunction) that mimics the behavior of the native implementation.

function customMap(arr, func) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(func(arr[i]));
  }
  return newArr;
}

function Double(x) {
  return x * 2;
}

const array = [1, 2, 3, 4, 5];
const doubledArrayNumber = customMap(array, Double);
console.log(doubledArrayNumber)