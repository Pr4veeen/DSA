
// RETURN FIRST NON REPEATING LETEER IN A STRING USING RECURSION

function returnLetter(str, index = 0 , map = new Map()){
    
    if(str.length === index){
        for(let [char, count] of map){
            if(count === 1) return char
        }
        return null
    }
    
    map.set(str[index], (map.get(str[index]) || 0) + 1)
    
    return returnLetter(str, index+1 , map)
}

let str ="praveenpra"
console.log(returnLetter(str))

