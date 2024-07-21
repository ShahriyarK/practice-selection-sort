function selectionSort(arr) {
  // Copy the original array
  const unsortedArr = arr.slice();
  // Create an array to store the sorted values
  const sorted = [];
  // While the array is not empty...
  while (unsortedArr.length > 0) {
    // Do not move this console.log
    console.log(sorted.join(","));
    // Find the index of the minimum value in the unsorted half
    let minValue = Infinity;
    let minIndex = -1;
    for (let i = 0; i < unsortedArr.length; i++) {
      if (unsortedArr[i] < minValue) {
        minValue = unsortedArr[i];
        minIndex = i;
      }
    }
    // Save and remove the value at the min index
    unsortedArr.splice(minIndex, 1);
    // Add the min value to the end of the sorted array
    sorted.push(minValue);
  }
  return sorted;
}

function selectionSortInPlace(arr) {
  // Set a pointer at zero diving the array into sorted and unsorted halves
  let divider = 0; // the divider points at the end of the sorted array where we insert values
  // Repeat while the unsorted half is not empty:
  while (divider < arr.length) {
    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half
    let minVal = Infinity;
    let minIndex = -1;
    for (i = divider; i < arr.length; i++) {
      // Save the min value
      if (arr[i] < minVal) {
        minVal = arr[i];
        minIndex = i;
      }
    }
    // Shift every unsorted value to the left of the min value to the right by 1

    // for (let j = minIndex; j > divider; j--) {
    //   arr[j] = arr[j - 1];
    // }

    // We can also simply swap the min values and the current value at the divider. This
    // way we can avoid unnecessary shifting as simply code logic as:
    [arr[minIndex], arr[divider]] = [arr[divider], arr[minIndex]]
    // Put the min value at the divider

    // arr[divider] = minVal;

    // Increment the divider and repeat
    divider++;
  }
  return arr;
}

module.exports = [selectionSort, selectionSortInPlace];
