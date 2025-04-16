
class Node {
    constructor(value){
        this.value= value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor(){
        this.root = null
    }

    insert(value){
        const node = new Node(value)
        if(this.root === null){
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
        }
        else{
            if(root.right === null){
                root.right = node
            }else{
                this.insertNode(root.right, node)
            }
        }
    }

    search(root, value){
        if(!root) return false
        if(value === root.value){
            return true
        }else if(value < root.value){
            return this.search(root.left, value)
        }else{
            return this.search(root.right, value)
        }
    }

    delete(value){
        this.root = this.deleteNode(this.root, value)
    }

    Min(root){
        if(!root.left){
            return root.value
        }else{
            return this.Min(root.left)
        }
    }

    deleteNode(root, value){
        if(!root) return null

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

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
}

const bst = new BST()

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
bst.insert(12)
bst.insert(18)

console.log(bst.search(bst.root,12))
bst.inOrder(bst.root)

console.log("/////////////");
bst.delete(3)
bst.inOrder(bst.root)