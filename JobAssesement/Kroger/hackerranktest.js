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
  // build hash map : count how many times character is appeared
	for(let i =0; i < s.length; i++){ 
	 if (counts[s[i]]){
     counts[s[i]] += 1
	 } else {
  	 counts[s[i]] = 1
	 }
	}  
  // find the index plus 1
  for (let prop in counts){
		if (counts[prop] == 1){
			return s.indexOf(prop)+1 
		}
  }
  return -1;
}

function funWithAnagrams(array){
  //turn those words into arrays and sort them and turn them back into strings
  // and compare them. If they are the same we will get rid of the j indexed word 
  //and the function will continue to loop until i and j meet in the middle
  for(let i=0;i<array.length;i++){
    for(let j=array.length-1;j>i;j--){
      let sortedA = array[i].split("").sort().join("")
      console.log(sortedA)
      let sortedB = array[j].split("").sort().join("")
      console.log(sortedB)
      if(sortedA===sortedB){
        console.log(j)
        array.splice(j,1)
        console.log(array)
      }
    }
  }
  return array.sort()
}

// fizzBuzz(15)

// console.log(getUniqueCharacter('hackthegame'))  //3 = c
// console.log(getUniqueCharacter('falafal'))  //-1

let str = ["code", "doce", "ecod", "framer", "frame"]
console.log(funWithAnagrams(str))  //[ 'code', 'frame', 'framer' ]
