
// merge sort

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
function merge(left, right) {
    let sortedArray = [];
    while (left.length && right.length) {
        sortedArray.push(left[0] < right[0] ? left.shift() : right.shift());
    }
    return [...sortedArray, ...left, ...right];
}
console.log(mergeSort([10, 3, 15, 7, 8]));


// Merge Sort with Descending Order

function mergeSortDescending(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSortDescending(arr.slice(0, mid));
    let right = mergeSortDescending(arr.slice(mid));

    return mergeDescending(left, right);
}

function mergeDescending(left, right) {
    let sortedArray = [];
    while (left.length && right.length) {
        sortedArray.push(left[0] > right[0] ? left.shift() : right.shift());
    }
    return [...sortedArray, ...left, ...right];
}

console.log(mergeSortDescending([12, 4, 7, 9, 2, 5, 10]));
