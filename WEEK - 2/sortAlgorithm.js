
// Bubble Sort

function BubbleSort(arr){
    let swapped ;
    do{
        swapped = false;
        for(let i=0;i<arr.length-1;i++){
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
let arr = [8,1,9,10,3,2,-5,6,8]
//console.log(BubbleSort(arr))

//////////////////////////////////

// Selection Sort

function SelectionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let min = i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }
        if(min !== i){
            [arr[i], arr[min]] = [arr[min],arr[i]]
        }
    }
    return arr
}

//console.log(SelectionSort(arr))


//////////////////////

//Insertion Sort

function InsertionSort(arr){

    for(let i =1;i<arr.length;i++){
        let key = arr[i]
        let j = i-1

        while(j >= 0 && arr[j] > key){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = key
    }
    return arr
}

//console.log(InsertionSort(arr))

//////////////////////////

// Quick Sort

function QuickSort(arr){
    if(arr.length < 1) return arr

    let pivot = arr[arr.length-1 ]
    let left = []
    let right = []
    let equal = []

    for(let i=0;i<arr.length;i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else if(arr[i] > pivot){
            right.push(arr[i])
        }else{
            equal.push(arr[i])
        }
    }

    return ([...QuickSort(left),...equal, ...QuickSort(right)])
    
}


console.log(QuickSort(arr))

///////////////////////////////////


// Merge Sort

function MergeSort(arr){
    if(arr.length < 2) return arr

    let midd = Math.floor(arr.length / 2)
    let left = arr.slice(0,midd)
    let right = arr.slice(midd)

    return merge (MergeSort(left), MergeSort(right))
}

function merge(left,right){

    let sorted = []

    while(left.length && right.length){
        if(left[0] < right[0]){
            sorted.push(left.shift())
        }else{
            sorted.push(right.shift())
        }
    }

    return [...sorted,...left,...right]
}

console.log(MergeSort(arr))


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