

// MERGE TWO SORTED LIST IN TO ONE 


function merge(list1, list2){
    const sample = new ListNode(-1)
    
    let finalList = sample
    
    while(list1 && list2){
        if(list1.val < list2.val){
            finalList.next = list1
            list1 = list1.next
        }else{
            finalList.next = list2
            list2 = list2.next
        }
        
        finalList = finalList.next
    }
    
    finalList.next = list1 || list2
    
    return sample.next
}


// VALID ANAGRAM

function anagram(s,t){
    let count ={}
    
    for(let char of s){
        count[char] = (count[char] || 0) + 1
    }
    
    for(let char of t){
        if(!count[char]){
            return false
        }
    }
    return true
}

let  s = "anagram", t = "nagaram"

console.log(anagram(s,t))


