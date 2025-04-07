class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
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
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    insertValue(value,index){
        if(index < 0 || index > this.size){
            return null
        }

        if(index === 0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.head
            for(let i = 0 ; i < index - 1 ; i++ ){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
        }
        this.size++
    }

    removeIndex(index){
        if(index < 0 || index > this.size){
            return null
        }
        if(index === 0){
            this.head = this.head.next
        }else{
            let removeNode
            let prev = this.head
            for(let i =0 ; i < index -1 ; i++){
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
        }
        this.size--
    }

    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value === value){
            this.head = this.head.next
        }else{
            let removeValue
            let prev = this.head
            if(prev.next.value !== value){
                prev = prev.next
            }
            removeValue = prev.next
            prev.next = removeValue.next
        }
        this.size--
    }

    print(){
        if(this.isEmpty()){
            console.log("List is Empty")
        }else{
            let curr = this.head
            let result = ""
            while(curr){
                result += `${curr.value} `
                curr = curr.next
            }
            console.log(result)
        }
    }
}

const List = new LinkedList()

List.prepend(10)
List.prepend(20)
List.print()

List.append(30)
List.append(40)
List.print()

// List.insertValue(99,3)
// List.print()

// List.removeIndex(3)
// List.print()

List.removeValue(40)
List.print()