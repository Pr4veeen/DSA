
class TrieNode {
    constructor(){
        this.child = {}
        this.isEnd = false
    }
}

class Trie {
    constructor(){
        this.root = new TrieNode()
    }

    insert(word){
        let node = this.root
        for(let char of word){
            if(!node.child[char]){
                node.child[char] = new TrieNode()
            }
            node = node.child[char]
        }
        node.isEnd = true
    }

    search(word){
        let node = this.root
        for(let char of word){
            if(!node.child[char]){
                return false
            }
            node = node.child[char]
        }
        return node.isEnd
    }

    startsWith(prefix){
        let node = this.root
        for(let char of prefix){
            if(!node.child[char]){
                return null // false
            }
            node = node.child[char]
        }
        return node // true
    }


    autoComplete(prefix){
        const words = []
        const startNode = this.startsWith(prefix)

        if(!startNode){
            return words
        }

        const dfs = (node, currentWord) => {
            if(node.isEnd){
                words.push(currentWord)
            }

            for(let char in node.child){
                dfs(node.child[char], currentWord + char)
            }
        }
        dfs(startNode, prefix)
        return words
    }

}

//const trie = new Trie()

trie.insert("cat");
trie.insert("can");
trie.insert("camera");
trie.insert("car");
trie.insert("dog");

console.log(trie.search("car"));
console.log(trie.autoComplete("ca")); 
console.log(trie.autoComplete("cam")); 
console.log(trie.autoComplete("d")); 


/////////////////////////////
class TrieNode {
    constructor(){
        this.child = []
        this.isEnd = false
    }
}

class Trie {
    constructor(){
        this.root = new TrieNode()
    }

    insert(word){
        let node = this.root
        for(let char of word){
            if(!node.child[char]){
                node.child[char] = new TrieNode()
            }
            node = node.child[char]
        }
        node.isEnd = true
    }

    search(word){
        let node = this.root
        for(let char of word){
            if(!node.child[char]){
                return false
            }
            node = node.child[char]
        }
        return node.isEnd
    }

    startWith(prefix){
        let node = this.root
        for(let char of prefix){
            if(!node.child[char]){
                return null
            }
            node = node.child[char]
        }
        return node
    }

    autoComplete(prefix){
        let words = []
        let startNode = this.startWith(prefix)
        if(!startNode){
            return words
        }

        const dfs = (node, currentWord) => {
            if(node.isEnd){
                words.push(currentWord)
            }
            for(let char in node.child){
                dfs(node.child[char], currentWord + char)
            }
        }
        dfs(startNode, prefix)
        return words
    }
}

const trie = new Trie()

trie.insert("cat")
trie.insert("car")
trie.insert("cap")
trie.insert("camera")

console.log(trie.search("car"))
//console.log(trie.startWith("camw"))

console.log(trie.autoComplete("cam"))
console.log(trie.autoComplete("ca"));
