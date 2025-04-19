
class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    insert(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.root = node
        }else{
            this.insertNode(this.root, node)
        }
    }

    insertNode(root, node){
        if(node.value < root.value){
            if(root.left === null){
                root.left = node
            }else{
                this.insertNode(root.left, node)
            }
        }else{
            if(root.right === null){
                root.right = node
            }else{
                this.insertNode(root.right, node)
            }
        }
    }

    search(root, value){
        if(!root){
            return false
        }else{
            if(root.value === value){
                return true
            }
            else if(value < root.value){
                return this.search(root.left, value)
            }
            else{
                return this.search(root.right, value)
            }
        }
    }

    // DFS (PRE-ORDER)
    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    // DFS (IN-ORDER)
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    // DFS (POST-ORDER)
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    //BFS - Traversal
    levelOrder(){
        const queue = []
        queue.push(this.root)
        
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value)
            
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    // MIN - VALUE (BST)
    Min(root){
        if(!root.left){
            return root.value
        }else{
            return this.Min(root.left)
        }
    }

    // MAX - VALUE (BST)
    Max(root){
        if(!root.right){
            return root.value
        }else{
            return this.Max(root.right)
        }
    }

    //DELETE NODE
    delete(value){
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value){
        if(root === null){
            return null
        }
        if(value < root.value){
            root.left = this.deleteNode(root.left, value)
        }
        else if(value > root.value){
            root.right = this.deleteNode(root.right, value)
        }
        else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }
            else if(!root.right){
                return root.left
            }

            root.value = this.Min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }

    Height(root){
        if(root === null){
            return -1
        }

        const leftHeight = this.Height(root.left)
        const rightHeight = this.Height(root.right)

        return 1 + Math.max(leftHeight, rightHeight)
    }

    // Find Nth largest
    NthLargest(n){
        this.count = 0
        this.nthLargest = null
        this.FindNthLarge(this.root, n)
        return this.nthLargest
    }

    FindNthLarge(root, n){
        if(!root){
            return
        }
        this.FindNthLarge(root.right,n)
        this.count++

        if(this.count === n){
            this.nthLargest = root.value
        }
        this.FindNthLarge(root.left, n)
    }

    
    // Find Second largest
    SecondLargest(){
        if(!this.root || !this.root.left && !this.root.right){
            return null
        }

        let current = this.root
        while(current){
            if(current.right && !current.right.right && !current.right.left){
                return current.value
            }

            if(current.right && !current.right.right && current.right.left){
                return this.Max(current.right.left)
            }

            if(current.right){
                current = current.right
            }else{
                return this.Max(current.left)
            }
        }
    }
}

const bst = new BinarySearchTree()

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

console.log(bst.search(bst.root,10))
console.log(bst.search(bst.root,5))
console.log(bst.search(bst.root,154))

bst.preOrder(bst.root)
console.log("////////")
bst.inOrder(bst.root)
console.log("////////")
bst.postOrder(bst.root)

 bst.levelOrder()
console.log(bst.Min(bst.root))
console.log(bst.Max(bst.root))
console.log("//////////")
bst.delete(15)
bst.levelOrder()
console.log("//////////")

console.log(bst.Height(bst.root))

console.log("nth lage",bst.NthLargest(4))
console.log("second largest", bst.SecondLargest())

///////////////////////////////


//  Find the Closest Value to a Given Number in a BST

function findClosestValue(tree, target) {
    let closest = tree.data;
  
    function search(node) {
      if (!node) return;
  
      if (Math.abs(target - node.data) < Math.abs(target - closest)) {
        closest = node.data;
      }
  
      if (target < node.data) search(node.left);
      else if (target > node.data) search(node.right);
      else return;
    }
  
    search(tree);
    return closest;
  }
  
  
  //console.log("Closest to 16:",findClosestValue(bst.root, 16));  

  
  ////////////////////////////////////

  // Validate Whether a Given Tree is a BST


  function isValidBST(node, min = -Infinity, max = Infinity) {
    if (!node) return true;
  
    if (node.data <= min || node.data >= max) return false;
  
    return (
      isValidBST(node.left, min, node.data) &&
      isValidBST(node.right, node.data, max)
    );
  }
  
  
//   console.log("Is valid BST:", isValidBST(bst.root)); 
  