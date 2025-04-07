

// // Delete node with the value specified

// class Node {
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor(){
//         this.head = null;
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     isSize(){
//         return this.size
//     }

//     prepend(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node;
//         }else{
//             node.next = this.head;
//             this.head = node
//         }
//         this.size++
//     }

//     append(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node;
//         }else{
//             let previous = this.head;
//             while(previous.next){
//                 previous = previous.next
//             }
//             previous.next = node
//         }
//         this.size++
//     }


//     // removeValue(value){
//     //     if(this.isEmpty()){
//     //         return null
//     //     }
//     //     if(this.head.value === value){
//     //         this.head = this.head.next
//     //         this.size--
//     //         return value
//     //     }
//     //     else{
//     //         let prev = this.head
//     //         while(prev.next && prev.next.value !== value){
//     //             prev = prev.next
//     //         }
//     //         if(prev.next){
//     //             const removeNode = prev.next
//     //             prev.next = removeNode.next
//     //             this.size--
//     //             return value
//     //         }
//     //     return null 
//     //     }
//     // }

//     removeIndex(index){
//         if(index < 0 || index >= this.size){
//             return null
//         }
//         let removeValue
//         if(index === 0){
//             removeValue = this.head;
//             this.head = this.head.next
//         }else{
//             let prev = this.head
//             for(let i=0;i<index-1;i++){
//                 prev = prev.next
//             }
//             removeValue = prev.next
//             prev.next = removeValue.next
//         }
//         this.size--
//         return removeValue.value
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log("List is empty")
//         }else{
//             let curr = this.head
//             let values = ""
//             while(curr){
//                 values += `${curr.value },`
//                 curr = curr.next
//             }
//             console.log(values)
//         }
//     }
// }

// const list = new LinkedList()

// list.append(10)
// list.append(20)
// list.prepend(30)
// list.prepend(40)
// list.print()
// console.log("Value Removed : ",list.removeIndex(2))
// list.print()


// fibonacci

function fibonnaci(n){
    const fib =[0,1]
    for(let i=2;i<n;i++){
        fib[i] = fib[i-1] + fib[i -2]
    }
    return fib
}

console.log(fibonnaci(3));
console.log(fibonnaci(4));


function sumRecursion(arr){
    if(arr.length === 0){
        return 0
    }

    return arr[0] + sumRecursion(arr.slice(1))  
}

console.log(sumRecursion([1,2,3,4,5]))

// fibonacci memoization

function fibonacci(n, memo={}){
    if(n in memo) return memo[n]
    if(n < 2) return n
    
    memo[n] = fibonacci(n-1,memo) + fibonacci(n - 2,memo)
    return memo[n]
}

console.log(fibonacci(500))



let str ="praveen"
let emt =""
for(let i= str.length -1 ; i >= 0 ; i--){
    emt += str[i]
}

console.log(emt);

// let str ="praveen"
// let vow = "aeiou"
// let count =0
// for(let i=0;i<str.length;i++){
//     if(vow.includes(str[i])){
//         count++
//     }
// }
// console.log(count);

//frequency occurence of each elements in array

function ocuurance(arr){
    let hash = new Set()
    for(let i=0;i< arr.length;i++){
        if(!hash.has(arr[i])){
            let count=0
            for(let j=0;j< arr.length;j++){
                if(arr[i] == arr[j]){
                    count++
                }
            }
            console.log(`${arr[i]} = ${count}`)
            hash.add(arr[i])
        } 
    }
}

console.log(ocuurance(arr = [1,2,1,3,4,2]));


// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null;
//         this.size = 0
//     }

//     isEmty(){
//         return this.size === 0
//     }
//     getSize(){
//         return this.size
//     }

//     prepend(value){
//         const node = new Node(value)
//         if(this.isEmty()){
//             this.head = node
//         }
//         else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     removeValue(index){
//         if(index < 0 || index > this.size){
//             return null
//         }
//         let deleteVale;
//         if(index === 0){
//             deleteVale = this.head
//             this.head = this.head.next
//         }
//         else{
//             let prev = this.head;
//             for(let i=1;i<index-1;i++){
//                 prev = prev.next
//             }
//             deleteVale = prev.next;
//             prev.next = deleteVale.next
//         }
//         this.size--
//         return deleteVale
//     }

//     print(){
//         if(this.isEmty()){
//             console.log("List is empty")
//         }else{
//             let curr = this.head
//             let result =""
//             while(curr){
//                 result += `${curr.value }  `
//                 curr = curr.next
//             }
//             console.log(result)
//         }
//     }
// }

// const List = new LinkedList()
// console.log("size : ",List.getSize())
// List.prepend(10)
// List.prepend(20)
// List.prepend(30)
// List.print()
// console.log("size : ",List.getSize())

// console.log(List.removeValue(1))
// List.print()


function reverse(str){
    if(str === ""){
        return ""
    }
    return reverse(str.slice(1)) + str[0]
}
console.log(reverse(str="PRAVEEN"))
console.log(reverse(str="hello world"))


class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node
        }
        else{
            node.next = this.head;
            this.head = node
        }
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev =prev.next
            }
            prev.next = node
        }
        this.size++
    }

    remove(index){
        if(index < 0 || index >= this.size){
            return null
        }
        let removeNode
        if(index === 0){
            removeNode = this.head
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            removeNode = prev.next
            prev.next =removeNode.next
        }
        this.size--
        return removeNode
    }

    removeMiddle(){
        if(this.isEmpty()){
            return
        }
        if(this.head.next === null){
            this.head = null;
            this.size--;
            return
        }
        let slow = this.head;
        let fast = this.head;
        let prev = null;

        while(fast && fast.next){
            prev = slow;
            slow = slow.next;
            fast = fast.next.next
        }

        prev.next = slow.next;
        this.size--
    }

    print(){
        if(this.isEmpty()){
            console.log("List is Empty.!")
        }else{
            let curr = this.head
            let result = ""
            while(curr){
                result += `${curr.value } `
                curr = curr.next
            }
            console.log(result)
        }
    }
}

const List = new LinkedList()

List.prepend(10)
List.prepend(20)
List.prepend(30)
List.append(40)
List.append(50)
List.append(60)
List.print()

List.remove(3)
List.print()
List.removeMiddle()
List.print()


// function reverse(str){
//     let result =""
//     let word = ""
//     for(let i=0;i<str.length;i++){
//         if(str[i] !== " "){
//             word = str[i] + word
//         }else{
//             result += word + " "
//             word = " "
//         }
//     }
//     result += word
//     return result
// }

// let str = "Hello World"
// console.log(reverse(str))


// function recursion(arr,target){
//     return search(arr,target,0,arr.length - 1)
// }

// function search(arr,target,leftIndex,rightIndex){
//     if(leftIndex > rightIndex){
//         return null
//     }

//     let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
//     if(target === arr[middleIndex]){
//         return middleIndex
//     }

//     if(target < arr[middleIndex]){
//         return search(arr,target,leftIndex,middleIndex-1)
//     }else{
//         return search(arr,target,middleIndex + 1, rightIndex)
//     }
// }
// let arr = [1, 2, 3, 4, 5]
// let target = 4
// console.log(recursion(arr,target))