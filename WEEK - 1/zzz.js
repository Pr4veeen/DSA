
class Node {
    constructor(value){
        this.value = value
        this.prev = null
        this.next = null
    }
}

class Doubly {
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
    
    delete(value){
        if(!this.head){
            return null
        }
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
        
        if(this.tail.value === value){
            this.tail = this.tail.prev
            this.tail.next = null
            this.size--
            return
        }
        
        let curr = this.head
        while(curr && curr.value !== value){
            curr = curr.next
        }
        if(!curr) return null
        
        curr.prev.next = curr.next
        curr.next.prev = curr.prev
        this.size--
    }
    
    deleteMiddle(){
        if(!this.head) return null
        
        // in case of single node
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
        
        if(slow.prev){
            slow.prev.next = slow.next
        }else{
            this.head = slow.next
        }
        
        if(slow.next){
            slow.next.prev = slow.prev
        }else{
            this.tail = slow.prev
        }
        this.size--
    }
    
    deleteNthNode(n){
        if(!this.head) return
        
        let slow = this.head
        let fast = this.head
        
        for(let i=0;i<n;i++){
            if(!fast) return null
            fast = fast.next
        }
        
        if(!fast){
            this.head = this.head.next
            return
        }
        while(fast.next){
            slow = slow.next
            fast = fast.next
        }
        
        slow.next = slow.next.next
        this.size--
    }
    
  deleteee(n){
      if(!this.head) return null
       
      let slow = this.head
      let fast = this.head
       
      for(let i=0;i<n;i++){
          if(!fast) return null
          fast = fast.next
      }
       
      if(!fast){
          this.head = this.head.next
          return
      }
      while(fast.next){
          slow = slow.next
          fast = fast.next
      }
      slow.next = slow.next.next
      this.size--
  }
    
    print(){
        if(!this.head){
            console.log("List is Empty")
            return
        }
        let result =""
        let curr = this.head
        while(curr){
            result +=curr.value +" "
            curr = curr.next
        }
        console.log(result)
    }
}

const List = new Doubly()

List.prepend(3)
List.prepend(2)
List.prepend(1)

List.append(4)
List.append(5)
List.append(6)

List.print()

// List.deleteMiddle()
// List.print()

List.deleteee()
List.print()