
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
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

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail =  node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    removeEnd(){
        if(this.isEmpty()){
            return null
        }
        let value = this.tail
        if(this.size === 1){
            this.head = null
            this.tail = null
        }else{
            let prev = this.head
            while(prev.next !== this.tail){
                prev = prev.next
            }
            prev.next = null
            this.tail = prev
        }
        this.size--
        return value
    }

    // removeFront(){
    //     if(this.isEmpty()){
    //         return null
    //     }
    //     let value = this.head
    //     if(this.size === 1){
    //         this.head = null
    //         this.tail = null
    //     }else{
    //         this.head = this.head.next
    //     }
    //     this.size--
    //     return value
    // }

    removeFromFront(){
        if(this.isEmpty()){
            return null
        }

        const value = this.head.value;
        this.head = this.head.next
        this.size--;
        return value
    }

    print(){
        if(this.isEmpty()){
            console.log("List Is Empty...")
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

const List =new LinkedList()
List.append(12)
// List.append(10)
// List.append(20)
List.print()
//List.removeFront()
List.removeFromFront()
List.print()