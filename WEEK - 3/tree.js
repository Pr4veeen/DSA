
class treeNode {
    constructor(value){
        this.value = value
        this.children = []
    }

    addChildren(child){
        this.children.push(child)
    }
}

const tree = new treeNode("Root")
const child1 = new treeNode("child1")
const child2 = new treeNode("child2")

const grandChild1 = new treeNode("grandChild1")
const grandChild2 = new treeNode("grandChild2")

tree.addChildren(child1)
tree.addChildren(child2)

child1.addChildren(grandChild1)
child2.addChildren(grandChild2)

function travaerse(tree){
    console.log(tree.value)
    for(let child of tree.children){
        travaerse(child)
    }
}

travaerse(tree)