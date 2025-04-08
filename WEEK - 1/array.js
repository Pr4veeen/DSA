
//move all values to beginning of the array

let //arr =[2,0,1,0,3,0,4,5,0]
//let count = arr.length-1

for(let i=arr.length-1;i>=0;i--){
    if(arr[i] !== 0){
        let temp = arr[i]
        arr[i] = arr[count]
        arr[count] = temp
        count--
    }
}

console.log(arr)

//move all zeros to end of the array

let count = 0

for(let i=0;i<arr.length;i++){
    if(arr[i] !== 0){
        let temp  = arr[i]
        arr[i] = arr[count]
        arr[count] = temp
        count++
    }
}

console.log(arr)

//reverse the array

let start = 0
let end = arr.length-1

while(start < end){
    let temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp

    start++
    end--
}

console.log(arr)

//let arr = [10, 55, 150, 3, 12, 20, 76, 2, 30];

for(let i=0;i<arr.length;i+=3){
    let largest = arr[i]

    for(let j=i;j<i+3;j++){
        if(arr[j] > largest){
            largest = arr[j]
        }
    }
    console.log(largest)
}

//remove duplicates from an array

//let arr = [10, 5, 10, 3, 12, 5, 7, 3, 30];

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i] === arr[j]){
            for(let k=j;k<arr.length;k++){
                arr[k] = arr[k+1]
            }
            arr.length--
        }
    }
}

console.log(arr)

//remove all duplicates and show only values that occurs once

//let arr = [2, 5, 6, 2, 3, 5, 7, 8, 3];

for(let i=0;i<arr.length;i++){
    let count = 0
    for(let j=0;j<arr.length;j++){
        if(arr[i] === arr[j]){
            count++
        }
    }
    if(count > 1){
        let val = arr[i]
        for(let k=0;k<arr.length;k++){
            if(arr[k] === val){
                for(let m=k;m<arr.length-1;m++){
                    arr[m] = arr[m+1]
                }
                arr.length--
                k--
            }
        }
        i--
    }
}

console.log(arr)

//prime numbers

//let arr =[1,2,-3,4,5,6,7]

for(let i = 0; i < arr.length ; i++){
    if (arr[i] < 2){
        continue;
    }
    let isPrime = 0
    for(let j=2; j<=arr[i] / 2 ; j++){
        if(arr[i] % j === 0){
            isPrime = 1
        }
    }
    if(isPrime ===0){
        console.log(arr[i])
    }
}

///print duplicated values

//let arr = [1,2,5,3,5,4,8,2,5,6,1,7,8]

for(let i=0;i<arr.length;i++){
    if(arr[i] == -1) continue
    let duplicate = false
    for(let j=i+1;j<arr.length;j++){
        if(arr[i] == arr[j]){
            duplicate = true
            arr[j] = -1
        }
    }
    if(duplicate){
        console.log(arr[i])
    }
}


//REMOVE UNIQUE FROM ARRAY

let arr = [1,2,10,3,4,3,5,6,7,5,8,6,1,3]

for(let i=0;i<arr.length;i++){
    let count = 0
    for(let j=0;j<arr.length;j++){
       if(arr[i] == arr[j]){
           count++
       }
    }
    if(count < 2){
        for(let k=i;k<arr.length;k++){
            arr[k] = arr[k+1]
        }
        arr.length--
        i--
    }
}

//console.log(arr)