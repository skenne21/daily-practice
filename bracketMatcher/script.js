
const bracket = (string) => {
  const spiltArray = string.split('');
  let total = 0;
  const min = 0;

  spiltArray.forEach( element => {
    
    if (element === '{' && !spiltArray.includes('}')) {
      total--;
    }
    else if (element === '[' && !spiltArray.includes(']')) {
      total--;
    }
    else if (element === '(' && !spiltArray.includes(')')) {
      total--;
    }
    else if (element === '{' || element === '}') {
      total++
    } 
    else if (element === '(' || element === ')') {
      total++
    } 
    else if (element === '[' || element === ']') {
      total++
    }
  })
  
  if (total < min) {
    return false
  } else {
    if (total % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  
}




console.log(bracket('{}'));
// true
console.log(bracket('{('));
// // false
console.log(bracket('{()}'));
// // true
console.log(bracket('{[)][]}'));
// // fasle
console.log(bracket(']'));
// // fasle
console.log(bracket('({[]}{[]})'));
// // true
