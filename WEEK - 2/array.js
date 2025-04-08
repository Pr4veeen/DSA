
// fIND UNCOMMON ELEMENTS FROM TWO DEFFERENT ARRAYS USING HASH SET

function Uncommon(arr1,arr2){

    let hash = {}

    for(let val of arr1){
        hash[val] = (hash[val] || 0) + 1
    }

    for(let val of arr2){
        if(hash[val]){
            hash[val] +=1
        }else{
            hash[val] = 1
        }
    }

    let result = []

    for(let key in hash){
        if(hash[key] === 1){
            result.push(key)
        }
    }

    return result
}

let arr1 = [1,2,3]
let arr2 = [3,4,5]
console.log(Uncommon(arr1,arr2))

