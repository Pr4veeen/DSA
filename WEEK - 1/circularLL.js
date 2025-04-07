// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class Circular{
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
//             node.next = this.head
//         }else{
//             node.next = this.head
//             this.head = node
//             this.tail.next = this.head
//         }
//         this.size++
//     }

//     append(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//             this.tail = node
//             node.next = this.head
//         }else{
//             this.tail.next = node
//             this.tail = node
//             this.tail.next = this.head
//         }
//         this.size++
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log("List is empty")
//         }
//         let curr = this.head
//         let result = ""
//         do{
//             result += `${curr.value } `
//             curr = curr.next
//         }while(curr !== this.head)
//             console.log(result)
//     }
// }

// const List = new Circular()

// List.prepend(10)
// List.prepend(20)
// List.print()

// List.append(100)
// List.append(200)
// List.print()

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Circular{
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
            this.tail.next = this.head
        }
        else{
            node.next = this.head
            this.head = node
            this.tail.next = this.head
        }
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
            this.tail.next = this.head
        }
        else{
            this.tail.next = node
            this.tail = node
            this.tail.next = this.head
        }
        this.size++
    }

    print(){
        if(this.isEmpty()){
            console.log("List is empty")
            return
        }
        let curr = this.head
        let result = ""
        do {
            result +=`${curr.value} `
            curr = curr.next
        } while (curr !== this.head);
        console.log(result)
    }
}

const List = new Circular()

List.prepend(11)
List.prepend(22)
List.prepend(33)
List.print()

List.append(44)
List.append(55)
List.print()