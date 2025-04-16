
function heapSort(arr){
    let n = arr.length
    
    for(let i = Math.floor(n / 2) - 1 ; i >= 0 ; i--){
        heapify(arr, n, i)
    }

    for(let i = n - 1 ; i > 0 ; i--){
        [arr[0], arr[i]] = [arr[i], arr[0]]
        heapify(arr, i, 0)
    }

    return arr
}

function heapify(arr, size, i){
    let large = i
    let left = 2 * i + 1
    let right = 2 * i + 2

    if(left < size && arr[left] > arr[large]){
        large = left
    }
    if(right < size && arr[right] > arr[large]){
        large = right
    }

    if(large !== i){
        [arr[i], arr[large]] = [arr[large], arr[i]]
        heapify(arr, size, large)
    }
}


let arr = [5,2,7,10,6,1,9,3]
console.log(heapSort(arr))