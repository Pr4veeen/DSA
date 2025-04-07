
class HashTable {
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0
        for(let i = 0 ; i < key.length ; i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key, value){
        const index = this.hash(key)
        this.table[index] = value
    }

    get(key){
        const index = this.hash(key)
        return this.table[index]
    }

    remove(key){
        const index = this.hash(key)
        this.table[index] = undefined
    }

    display(){

        for(let i = 0 ; i < this.table.length ; i++){
            if(this.table[i]){
                console.log(i , this.table[i])
            }
        }
    }
}

const table = new HashTable(10)

table.set("name" , "Praveen")
table.set("age", 25)
table.display()

console.log(table.get("place"))

table.remove("name")
table.display()


//HASH TABLE - COLLISION

class HashCollision {
    constructor(size){
        this.table = new  Array(size)
        this.size = size
        this.count = 0
    }

    hash(key){
        let total = 0
        for(let i = 0; i < key.length ; i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key, value){

        // triggering rehashing while load factor exceeds
        if(this.count / this.size > 0.7){
            this.reHash()
        }

        const index = this.hash(key)
        const bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key, value]]
        }else{
            const sameKey = bucket.find(item => item[0] === key)
            if(sameKey){
                sameKey[1] = value
            }else{
                bucket.push([key, value])
            }
        }

        // counting for load factor
        this.count++
    }

    reHash(){
        const oldTable = this.table
        this.size *= 2
        this.table = new Array(this.size)
        this.count = 0

        for(let bucket of oldTable){
            if(bucket){
                for(let [key, value] of bucket){
                    this.set(key, value)
                }
            }
        }
    }

    get(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const sameKey = bucket.find(item => item[0] === key)
            if(sameKey){
                return sameKey[1]
            }
        }
        return undefined
    }

    remove(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const sameKey = bucket.find(item => item[0] === key)
            if(sameKey){
                bucket.splice(bucket.indexOf(sameKey), 1)
            }
        }
    }

    display(){
         for(let i= 0 ; i< this.table.length ; i++){
            if(this.table[i]){
                console.log(i, this.table[i])
            }
         }
    }
}

const table1 = new HashCollision(50)

table1.set("greet", "hello")
table1.set("replay", "hai")

table1.display()

console.log(table1.get("greet"))

table1.remove("replay")
// table1.display()

table1.set("greeting", "suiii")


table1.set("grete", "againnn")
table1.display()


// REMOVE DUPLICATES FROM A STRING USING HASH TABLE


class HashTable {
    constructor(){
        this.table = {}
    }

    add(char){
        this.table[char] = true
    }

    exist(char){
        return this.table.hasOwnProperty(char)
    }
}

function removeDup(str){
    const table = new HashTable()
    let result = ""

    for(let char of str){
        if(!table.exist(char)){
            table.add(char)
            result +=char
        }
    }

    return result
}

console.log(removeDup("hello world"))

///////

function removeDuplicates(str) {
    const hashTable = {}; // Hash table to track characters
    let result = "";

    for (let char of str) {
        if (!hashTable[char]) { // If character is not in hash table
            hashTable[char] = true; // Mark it as seen
            result += char; // Add to result string
        }
    }
    
    return result;
}

console.log(removeDuplicates("hello world"));


/// FIRST NON REPEATING CHARECTER

function nonRepeating(str){
    let hashMap = new Map()

    for(let char of str){
        hashMap.set(char, (hashMap.get(char) || 0) + 1)
    }

    for(let char of str){
        if(hashMap.get(char) === 1){
            return char
        }
    }

    return null
}

let str = "ABABCDEE"

console.log(nonRepeating(str))


////////////////////


// Hash Table 

// class HashTable {
//     constructor(size = 10) {
//         this.buckets = new Array(size).fill(null).map(() => []);
//     }

//     _hash(key) {
//         let hash = 0;
//         for (let char of key) {
//             hash += char.charCodeAt(0);
//         }
//         return hash % this.buckets.length;
//     }

//     set(key, value) {
//         let index = this._hash(key);
//         let bucket = this.buckets[index];

//         for (let pair of bucket) {
//             if (pair[0] === key) {
//                 pair[1] = value;
//                 return;
//             }
//         }
//         bucket.push([key, value]);
//     }

//     get(key) {
//         let index = this._hash(key);
//         let bucket = this.buckets[index];

//         for (let pair of bucket) {
//             if (pair[0] === key) return pair[1];
//         }
//         return undefined;
//     }

//     display() {
//         console.log(this.buckets);
//     }
// }

// let hashTable = new HashTable();
// hashTable.set("name", "John");
// hashTable.set("age", 25);
// hashTable.set("job", "Engineer");
// console.log(hashTable.get("name")); // John
// hashTable.display();


// // Hash Table with Delete Operation

// class HashTable {
//     constructor(size = 10) {
//         this.buckets = new Array(size).fill(null).map(() => []);
//     }

//     _hash(key) {
//         let hash = 0;
//         for (let char of key) {
//             hash += char.charCodeAt(0);
//         }
//         return hash % this.buckets.length;
//     }

//     set(key, value) {
//         let index = this._hash(key);
//         let bucket = this.buckets[index];

//         for (let pair of bucket) {
//             if (pair[0] === key) {
//                 pair[1] = value;
//                 return;
//             }
//         }
//         bucket.push([key, value]);
//     }

//     get(key) {
//         let index = this._hash(key);
//         let bucket = this.buckets[index];

//         for (let pair of bucket) {
//             if (pair[0] === key) return pair[1];
//         }
//         return undefined;
//     }

//     delete(key) {
//         let index = this._hash(key);
//         let bucket = this.buckets[index];

//         for (let i = 0; i < bucket.length; i++) {
//             if (bucket[i][0] === key) {
//                 bucket.splice(i, 1);
//                 return true;
//             }
//         }
//         return false;
//     }

//     display() {
//         console.log(this.buckets);
//     }
// }

// let hashTable = new HashTable();
// hashTable.set("color", "red");
// hashTable.set("size", "large");
// console.log(hashTable.get("color")); // red
// hashTable.delete("color");
// console.log(hashTable.get("color")); // undefined
// hashTable.display();


// //  Hash Table with Linear Probing (Open Addressing)

// class HashTable {
//     constructor(size = 10) {
//         this.buckets = new Array(size).fill(null);
//     }

//     _hash(key) {
//         let hash = 0;
//         for (let char of key) {
//             hash += char.charCodeAt(0);
//         }
//         return hash % this.buckets.length;
//     }

//     set(key, value) {
//         let index = this._hash(key);
//         while (this.buckets[index] !== null && this.buckets[index][0] !== key) {
//             index = (index + 1) % this.buckets.length;
//         }
//         this.buckets[index] = [key, value];
//     }

//     get(key) {
//         let index = this._hash(key);
//         while (this.buckets[index] !== null) {
//             if (this.buckets[index][0] === key) return this.buckets[index][1];
//             index = (index + 1) % this.buckets.length;
//         }
//         return undefined;
//     }

//     display() {
//         console.log(this.buckets);
//     }
// }

// let hashTable = new HashTable();
// hashTable.set("apple", 10);
// hashTable.set("banana", 20);
// hashTable.set("grape", 30);
// console.log(hashTable.get("banana")); // 20
// hashTable.display();
