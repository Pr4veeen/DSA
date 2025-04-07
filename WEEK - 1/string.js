
// linear search

function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i] === target){
            return i
        }
    }return -1
}

console.log(linearSearch([1,2,3,4,5], 6));

// binary search

function binarySearch(arr, target){
    let leftIndex =0;
    let rightIndex = arr.length -1

    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if(arr[middleIndex] === target){
            return middleIndex
        }
        if(target < arr[middleIndex]){
            rightIndex = middleIndex -1
        }else{
            leftIndex = middleIndex + 1
        }
    }
    return -1
}

console.log(binarySearch([1,2,3,4,5],5));

// recursive binary search

function recursiveBinary(arr, target){
    return search(arr,target,0, arr.length - 1)
}

function search(arr,target,leftIndex,rightIndex){
    if(leftIndex > rightIndex){
        return -11
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    
    if(target === arr[middleIndex]){
        return middleIndex
    }

    if(target < arr[middleIndex]){
        return search(arr,target,leftIndex,middleIndex - 1)
    }else{
        return search(arr,target,middleIndex + 1, rightIndex)
    }
}

console.log(recursiveBinary([1,2,3,4,5,6], 7))

// linked list 

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null
//         this.size = 0;
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     getSize(){
//         return this.size
//     }

//     prepend(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     append(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             let prev = this.head
//             while(prev.next){
//                 prev = prev.next
//             }
//             prev.next = node
//         }
//         this.size++
//     }

//     print(){
//         let curr = this.head
//         let result = ""
//         while(curr){
//             result += `${curr.value } `
//             curr = curr.next
//         }
//         console.log(result)
//     }
// }

// const List = new LinkedList()

// List.prepend(10)
// List.prepend(20)
// List.print()
// console.log(List.getSize())
// List.append(30)
// List.append(40)
// List.print()
// console.log(List.getSize())

// linked list with tail

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor(){
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     prepend(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//             this.tail = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     append(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//             this.tail = node
//         }else{
//             this.tail.next = node
//             this.tail = node
//         }
//         this.size++
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log("List is empty")
//         }else{
//             let curr = this.head
//             let result = ""
//             while(curr){
//                 result +=`${curr.value } `
//                 curr = curr.next
//             }
//             console.log(result)
//         }
//     }
// }

// const List = new LinkedList()

// List.prepend(10)
// List.prepend(20)
// List.print()

// List.append(100)
// List.append(200)
// List.print()


// Doubly linked list

class Node{
    constructor(value){
        this.value = value
        this.prev = null
        this.next = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.size++
    }

    print(){
        if(this.isEmpty()){
            console.log("List is empty")
         }else{
            let curr = this.head
            let result = ""
            while(curr){
                result +=`${curr.value } `
                curr = curr.next
            }
            console.log(result)
         }
    }

    reverse(){
        if(this.isEmpty()){
            console.log("List is Empty.")
        }else{
            let curr = this.tail
            let result = ""
            while(curr){
                result +=`${curr.value } `
                curr = curr.prev 
            }
            console.log(result)
        }
    }

    findValue(value){
        if(this.isEmpty()){
            return -11
        }
        let index =0
        let curr = this.head
        while(curr){
            if(curr.value === value){
                return index
            }
            curr = curr.next
            index++
        }
        return -1
    }

    findIndex(index){
       if(index < 0 || index >= this.size){
        return -1
       }
        let curr
        if(index < this.size/2){
            curr = this.head
            for(let i=0;i<index;i++){
                curr = curr.next
            }
        }else{
            curr = this.tail
            for(let i=this.size-1 ; i > index ; i--){
                curr = curr.prev
            }
        }
        return curr.value
    }

    
}

const List = new DoublyLinkedList()

List.prepend(100)
List.prepend(200)
List.prepend(300)
List.print()

List.append(400)
List.append(666)
List.append(800)
List.print()
List.reverse()

console.log("index : ",List.findValue(200))

console.log("value : ",List.findIndex(3))

