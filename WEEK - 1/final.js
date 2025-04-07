
class Node {
    constructor(value){
        this.value = value
        this.prev = null
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
    
    prepend(value){
        const node = new Node(value)
        if(!this.head){
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
        if(!this.head){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.size++
    }
    // append(value){
    //     const node = new Node(value)
    //     if(!this.head){
    //         this.head = node
    //     }else{
    //         let prev = this.head
    //         while(prev.next){
    //             prev = prev.next
    //         }
    //         prev.next = node
    //     }
    // }
    
    insertValue(index, value){
        const node = new Node(value)
        if(index < 0 || index > this.size){
            return 
        }
        
        if(index === 0){
            node.next = this.head
            this.head = node
        }else{
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
        }
        this.size++
    }
    
    removeIndex(index){
        if(index < 0 || index >= this.size){
            return
        }
        if(index === 0){
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            let removeValue = prev.next
            prev.next = removeValue.next
        }
        this.size--  
    }

    removePosition(pos){
        if(pos === 1){
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i=0;i<pos-2;i++){
                prev = prev.next
            }
            let removeValue = prev.next
            prev.next = removeValue.next
        }
        this.size--
    }
    
    removeValue(value){
        if(!this.head){
            return null
        }
        
        if(this.head.value === value){
            this.head = this.head.next
        }else{
            let prev = this.head
            while(prev.next && prev.next.value !== value){
                prev = prev.next
            }
            if(prev.next){
                let removeValue = prev.next
                prev.next = removeValue.next
            }
        }
        this.size--
    }
    
    search(value){
        if(!this.head){
            return 
        }
        
        let index = 0
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
    
    reverse(){
        let prev = null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }
    
    removeFront(){
        if(!this.head){
            return
        }
        let value = this.head.value
        this.head = this.head.next
        this.size--
        return value
    }
    
    removeEnd(){
        if(!this.head){
            return
        }
        if(this.size === 1){
            this.head = null
            this.tail = null
        }else{
            this.tail = this.tail.prev
            this.tail.next = null
        }
        this.size--
    }
    
    removeDuplicate(){
        let dup = new Set()
        let curr = this.head
        let prev = null
        
        while(curr){
            if(dup.has(curr.value)){
                prev.next = curr.next
                this.size--
            }else{
                dup.add(curr.value)
                prev = curr
            }
            curr = curr.next
        }
    }
    
    sortLL(){
        let swapped
        do{
            swapped = false
            let curr = this.head
            while(curr.next){
                if(curr.value > curr.next.value){
                    let temp = curr.value
                    curr.value = curr.next.value
                    curr.next.value = temp
                    
                    swapped = true
                }
                curr = curr.next
            }
        }while(swapped)
    }
    
    print(){
        if(!this.head){
            console.log("List is empty")
        }else{
            let result = ""
            let curr = this.head
            while(curr){
                result +=curr.value+' '
                curr = curr.next
            }
            console.log(result)
        }
    }
    
}


const List = new LinkedList()

List.prepend(10)
List.prepend(20)
List.prepend(10)
List.append(30)
List.prepend(10)
List.append(40)
List.prepend(30)
List.print()

console.log(List.size)


// List.insertValue(5,100)
// List.print()

// List.removeIndex(0)
// List.print()

// List.removeValue(30)
// List.print()

// console.log(List.search(330))

// List.reverse()
// List.print()

// console.log(List.removeFront())
// List.print()

// List.removeEnd()
// List.print()

// List.removeDuplicate()
// List.print()

// console.log(List.size)

List.sortLL()
List.print()

List.removePosition(4)
List.print()











