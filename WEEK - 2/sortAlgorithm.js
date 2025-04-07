

// BUBBLE SORT

function bubbleSort(arr){
    let swapped ;
    
    do{
        swapped = false

        for(let i=0 ; i< arr.length - 1; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp

                swapped = true
            }
        }
    }while(swapped)

    return arr    
}

//let arr = [6,3,-4,9,2,-9,1,3]
console.log(bubbleSort(arr));


//SELECTION SORT

function selectioSort(arr){

    for(let i=0;i<arr.length-1;i++){
        let min = i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }
        if(min != i){
            [arr[i], arr[min]] = [arr[min], arr[i]]
        }
    }
    return arr
}


// INSERTION SORT

function insertionSort(arr){

    for(let i=1;i<arr.length;i++){
        let numInsert = arr[i]
        let j = i-1
        while(j >= 0 && arr[j] > numInsert){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = numInsert
    }
    return arr
}

console.log(insertionSort(arr))


// QUICK SORT

function quickSort(arr){
    if(arr.length < 2) return arr

    let pivot = arr[arr.length-1]
    let left = [], right = [], equal = []

    for(let i=0;i<arr.length;i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else if(arr[i] > pivot){
            right.push(arr[i])
        }else{
            equal.push(arr[i])
        }
    }

    return [...quickSort(left),...equal, ...quickSort(right)]

}

console.log(quickSort(arr))



let arr = [5,6,-5,1,9,2,1,0,10]
console.log(selectioSort(arr))


// MERGE SORT

function mergeSort(arr){
    if(arr.length < 2) return arr

    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)

    return merge(mergeSort(leftArr), mergeSort(rightArr))
}


function merge(leftArr, rightArr){

    const sortedArr = []

    while(leftArr.length && rightArr.length){
        if(leftArr[0] <= rightArr[0]){
            sortedArr.push(leftArr.shift())
        }else{
            sortedArr.push(rightArr.shift())
        }
    }

    return [...sortedArr, ...leftArr, ...rightArr]
}

console.log(mergeSort(arr))


//MERGING TWO SORTED ARRAY IN TO A SINGLE SORTED ARRAY

function mergeSortedArray(arr1,arr2){
    let sorted = []
    let i = 0
    let j = 0

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            sorted.push(arr1[i])
            i++
        }else{
            sorted.push(arr2[j])
            j++
        }
    }

    while(i < arr1.length){
        sorted.push(arr1[i])
        i++
    }
    while(j < arr2.length){
        sorted.push(arr2[j])
        j++
    }

    return sorted
}

let arr1 = [1,3,5,7,9]
let arr2 = [2,4,6,8,10,13,15,20]

console.log(mergeSortedArray(arr1,arr2))


// SORT STRING USING MERGE SORT

function sortString(str){
    if(str.length <  2) return str

    let midd = Math.floor(str.length / 2)
    let left = str.slice(0, midd)
    let right = str.slice(midd)

    return sort(sortString(left), sortString(right))
}


function sort(left, right){

    let sorted = []
    let i = 0
    let j = 0

    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            sorted.push(left[i])
            i++
        }else{
            sorted.push(right[j])
            j++
        }
    }

    return [...sorted, ...left.slice(i), ...right.slice(j)].join('')
}

let str = "praveen"

console.log(sortString(str))