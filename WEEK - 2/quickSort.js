
// // Quick Sort 1

// function quickSort(arr) {
//     if (arr.length <= 1) return arr;
//     let pivot = arr[arr.length - 1];
//     let left = arr.filter(x => x < pivot);
//     let right = arr.filter(x => x > pivot);
//     return [...quickSort(left), pivot, ...quickSort(right)];
// }
// console.log(quickSort([10, 5, 2, 3, 7, 6, 4]));


// // Quick Sort with In-Place Partitioning

// function partition(arr, low, high) {
//     let pivot = arr[high], i = low - 1;
//     for (let j = low; j < high; j++) {
//         if (arr[j] < pivot) {
//             i++;
//             [arr[i], arr[j]] = [arr[j], arr[i]];
//         }
//     }
//     [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
//     return i + 1;
// }
// function quickSortInPlace(arr, low = 0, high = arr.length - 1) {
//     if (low < high) {
//         let pi = partition(arr, low, high);
//         quickSortInPlace(arr, low, pi - 1);
//         quickSortInPlace(arr, pi + 1, high);
//     }
//     return arr;
// }
// console.log(quickSortInPlace([8, 4, 7, 3, 2, 5]));

