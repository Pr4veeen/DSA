
// Selection Sort

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) minIndex = j;
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}
console.log(selectionSort([29, 10, 14, 37, 13]));


// Selection Sort in Descending Order

function selectionSortDescending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let maxIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[maxIndex]) maxIndex = j;
        }
        [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
    }
    return arr;
}
console.log(selectionSortDescending([15, 42, 5, 23, 8]));


// Selection Sort with Steps Displayed

function selectionSortSteps(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) minIndex = j;
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        console.log(`Step ${i + 1}:`, arr);
    }
    return arr;
}
console.log(selectionSortSteps([20, 12, 10, 15, 2]));
