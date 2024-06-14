function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap the elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let array1 = [5, 3, 8, 1, 2];
let sortedArray1 = bubbleSort(array1);
console.log(sortedArray1);

let array2 = [10, 5, 3, 12, 7, 2];
let sortedArray2 = bubbleSort(array2);
console.log(sortedArray2);
