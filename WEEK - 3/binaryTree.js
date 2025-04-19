
class treeNode {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

const root = new treeNode(1)
const node2 = new treeNode(2)
const node3 = new treeNode(3)
const node4 = new treeNode(4)
const node5 = new treeNode(5)

root.left = node2
root.right = node3

node2.left = node4
node2.right = node5

// pre - order traversal
function preOrder(node){
    if(node){
        console.log(node.value)
        preOrder(node.left)
        preOrder(node.right)
    }
}

preOrder(root)