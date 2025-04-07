class Node{
    constructor(value){
        this.value = value
        this.prev = null
        this.next = null
    }
}

class DDLL{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }


    getSize(){
        return this.size 
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
            console.log("List is Empty")
        }else{
            let curr = this.head;
            let result =""
            while(curr){
                result += `${curr.value } `
                curr = curr.next
            }
            console.log(result)
        }
    }

    // DOUBLY REVERSE
    reverse(){
        let curr = this.head
        let temp = null
        
        while(curr){
            temp = curr.prev
            curr.prev = curr.next
            curr.next = temp
            
            curr = curr.prev
        }
        
        temp = this.head
        this.head = this.tail
        this.tail = temp
    }

    removeIndex(index){
        if(index < 0 || index >= this.size){
            return null
        }
        if(index === 0){
            if(this.size === 1){
                this.head = null
                this.tail = null
            }else{
                this.head = this.head.next
                this.head.prev = null
            }
        }
        else if(index === this.size-1){
            this.tail = this.tail.prev
            this.tail.next = null
        }
        else{
            let curr = this.head
            for(let i=0;i<index;i++){
                curr = curr.next
            }
            curr.prev.next = curr.next
            curr.next.prev = curr.prev
        }
        this.size--
    }

    removeValue(value){
        if(this.head.value === value){
            if(this.size === 1){
                this.head = null
                this.tail = null
            }else{
                this.head = this.head.next
                this.head.prev = null
            }
        }
        else if(this.tail.value === value){
            this.tail = this.tail.prev
            this.tail.next = null
        }
        else{
            let curr = this.head
            while(curr && curr.value !== value){
                curr = curr.next
            }
            if(!curr){
                
                console.log("Value is missing")
                return
            }
            curr.prev.next = curr.next
            curr.next.prev = curr.prev
        }
        this.size--
    }

    delete(value){
        if(!this.head) return null

        // delete value as in head
        if(this.head.value === value){
            this.head = this.head.next
            if(this.head){
                this.head.prev = null
            }else{
                this.tail = null
            }
            this.size--
            return
        }

        // delete value as in tail
        if(this.tail.value === value){
            this.tail = this.tail.prev
            this.tail.next = null
            this.size--
            return
        }

        // delete value as in middle of head and tail
        let curr = this.head
        while(curr && curr.value !== value){
            curr = curr.next
        }

        if(!curr) return null

        curr.prev.next = curr.next
        if(curr.next){
            curr.next.prev = curr.prev
            this.size--
        }

    }

    deleteMiddle(){
        if(!this.head)  return null

        // only have one node
        if(!this.head.next){
            this.head = null
            this.tail = null
            this.size--
            return
        }

        let slow = this.head
        let fast = this.head
        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }

        // in case of two nodes need to remove head
        if(slow.prev){
            slow.prev.next = slow.next
        }else{
            this.head = slow.next
        }

        // in case of two node need to remove tail
        if(slow.next){
            slow.next.prev = slow.prev
        }else{
            this.tail = slow.prev
        }

        this.size--
    }

}

const List = new DDLL()

List.prepend(10)
List.prepend(20)
List.print()

List.append(30)
List.append(40)
List.append(50)
List.print()

List.deleteMiddle()
List.print()
console.log(List.getSize())

// List.removeValue(40)
// console.log(List.getSize())
// List.print()

//List.reverse()
// List.removeIndex(2)
// List.print()

// class Node {
//     constructor(value){
//         this.value = value
//         this.prev = null
//         this.next = null
//     }
// }

// class DoublyLL {
//     constructor(){
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }

//     prepend(value){
//         const node = new Node(value)
//         if(!this.head){
//             this.head = node
//             this.tail = node
//         }else{
//             node.next = this.head
//             this.head.prev = node
//             this.head = node
//         }
//         this.size++
//     }

//     append(value){
//         const node = new Node(value)
//         if(!this.head){
//             this.head = node
//             this.tail = node
//         }else{
//             this.tail.next = node
//             node.prev = this.tail
//             this.tail = node
//         }
//         this.size++
//     }

//     search(value){
//         if(!this.head){
//             return null
//         }
//         let curr = this.head
//         let index = 0
//         while(curr){
//             if(curr.value === value){
//                 return index
//             }
//             curr = curr.next
//             index++
//         }
//         return null
//     }

//     reverse(){
//         let curr = this.head
//         let temp = null
//         while(curr){
//             temp = curr.prev
//             curr.prev = curr.next
//             curr.next = temp
//             curr = curr.prev
//         }
//         if(temp){
//             this.head = temp.prev
//         }
//     }

//     print(){
//         if(!this.head){
//             console.log("List is Empty")
//         }else{
//             let curr = this.head
//             let result = ""
//             while(curr){
//                 result +=`${curr.value} `
//                 curr = curr.next
//             }
//             console.log(result)
//         }
//     }
// }


// // const List = new DoublyLL()

// List.prepend(10)
// List.prepend(20)
// List.append(30)
// List.append(40)
// List.print()

// List.reverse()

// console.log(List.search(40))