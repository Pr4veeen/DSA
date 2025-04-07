
function recursion(arr,target){
    return search(arr,target,0,arr.length-1)
}

function search(arr,target,leftIndex,rightIndex){
    if(leftIndex > rightIndex){
        return -1
    }

    let middleIndex = Math.floor((leftIndex + rightIndex)/2)
    if(target === arr[middleIndex]){
        return middleIndex
    }
    if( target < arr[middleIndex]){
        return search(arr,target,leftIndex,middleIndex-1)
    }else{
        return search(arr,target,middleIndex +1, rightIndex)
    }
}   

console.log(recursion([1,2,3,4,5],4));

////////////////////////


function reverseString(str){
    if(str.length <= 1){
        return str
    }
    return reverseString(str.slice(1)) + str[0]
}

let str = "P R A V E E N"
console.log(reverseString(str));

function reverseString(str, index = 0, revised = ""){
    if(index === str.length){
        return revised
    }

    return reverseString(str, index +1, str[index] + revised)
}

//let str = "HELLO WORLD"
console.log(reverseString(str));

/////////////////////////////////////

//REMOVE LETTERS FROM STRING

function recursion(str,target){
    
    if(str.length === 0) return str
    
    const first = str[0] === target ? "" : str[0]
    
    return first + recursion(str.slice(1),target)
}


//let /str ="hello world"
let target = "l"
console.log(recursion(str,target))

///////////////////////////////


//TAIL RECURSION
function recursion(str,target, final=""){
    
    if(str.length === 0) return final
    
    let first = str[0] === target ? "" : str[0]
    
    return recursion(str.slice(1), target, final + first )
}

///////////////////////////////

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class RemoveFromMiddle {
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }
        else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    removeMiddle(){
        if(this.isEmpty()){
            return null
        }
        if(this.head.next === null){
            this.head = null
            this.tail = null
            this.size--
            return
        }
        let slow = this.head
        let fast = this.head
        let prev = null

        while(fast && fast.next){
            prev = slow
            slow = slow.next
            fast = fast.next.next
        }

        prev.next = slow.next
        this.size--
        console.log(this.head)
        console.log(this.tail)
    }

    print(){
        if(this.isEmpty()){
            console.log("List is Empty")
        }else{
            let result = ""
            let curr = this.head
            while(curr){
                result +=`${curr.value} `
                curr = curr.next
            }
            console.log(result)
        }
    }
}

const List = new RemoveFromMiddle()

List.append(10)
// List.append(20)
// List.append(30)
// List.append(40)
// List.append(50)
List.print()

List.removeMiddle()
List.print()

// longest word in a sentence

function longestWord(str, index=0, word="", longest=""){
    if(index === str.length){
        return word.length > longest.length ? word : longest;
    }
    
    if(str[index] !== " "){
        word += str[index]
    }
    else{
        if(word.length > longest.length){
            longest = word
        }
        word =""
    }
    
    return longestWord(str, index+1, word, longest)
}

//let str = "hi my name is praveen"
console.log(longestWord(str))

/////////////////////////


//FLATTEN ARRAY 

let arr = [1,2,[3,4,[5,6,7,[8,9]]]]


function flatArray(arr){
    let result = []
    for(let num of arr){
        if(Array.isArray(num)){
            result.push(...flatArray(num))
        }else{
            result.push(num)
        }
    }
    return result
} 

console.log(flatArray(arr))
