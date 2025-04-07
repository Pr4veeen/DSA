//Convert array to a linked list

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    arrayToLinkedList(arr) {
        if (arr.length === 0) return null; 
        
        this.head = new ListNode(arr[0]); 
        let current = this.head;
        
        for (let i = 1; i < arr.length; i++) {
            current.next = new ListNode(arr[i]); 
            current = current.next; 
        }
    }

    printList() {
        let current = this.head;
        let result = "";
        while (current) {
            result += `${current.value} `
            current = current.next;
        }
        console.log(result );
    }
}


const arr = [1, 2, 3, 4, 5];
const linkedList = new LinkedList();
linkedList.arrayToLinkedList(arr);
linkedList.printList(); 


class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class ArrayToList{
    constructor(){
        this.head = null
    }

    arrayToList(arr){
        if(arr.length === 0){
            return null
        }

        this.head = new Node(arr[0])
        let curr = this.head

        for(let i=1;i<arr.length;i++){
            curr.next = new Node(arr[i])
            curr = curr.next
        }
    }

    append(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
        }

        let curr = this.head
        while(curr.next){
            curr = curr.next
        }
        curr.next = node
    }

    prepend(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
        }
         node.next = this.head
         this.head = node
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


    print(){
        let curr = this.head;
        let result = ""
        while(curr){
            result += curr.value+" "
            curr = curr.next
        }
        console.log(result)
    }
}

const List = new ArrayToList()

arr= [10,20,30,40,50]

List.arrayToList(arr)
List.print()

List.append(100)
List.print()

List.prepend(200)
List.print()

List.reverse()
List.print()
