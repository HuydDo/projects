/**
 * @param {number} n
 * @return {string[]}
 */

var fizzBuzz = function(n) {

  //print out the string
  for(let i= 1; i <= n; i++){ 
    let str = ""
  
    if((i % 3 == 0) && (i % 5 == 0)) str += "FizzBuzz"
    else if (i % 3 == 0) str +="Fizz"
    else if(i % 5 == 0) str += "Buzz"
    console.log(str|| i);
}

};

function getUniqueCharacter( s) {
  let counts = {}
  
	for(let i =0; i < s.length; i++){ 
	 if (counts[s[i]]){
     counts[s[i]] += 1
	 } else {
  	 counts[s[i]] = 1
	 }
	}  

  for (let prop in counts){
		if (counts[prop] == 1){
			return s.indexOf(prop)+1 
		}
  }
  return -1;
}

function funWithAnagrams(array){
  for(let i=0;i<array.length;i++){
    for(let j=array.length-1;j>i;j--){
      let sortedA = array[i].split("").sort().join("")
      let sortedB = array[j].split("").sort().join("")
      if(sortedA===sortedB){
        array.splice(j,1)
      }
    }
  }
  return array.sort()
}

fizzBuzz(15)

console.log(getUniqueCharacter('hackthegame'))  //3 = c
console.log(getUniqueCharacter('falafal'))  //-1

let str = ["code", "doce", "ecod", "framer", "frame"]
console.log(funWithAnagrams(str))  //[ 'code', 'frame', 'framer' ]
