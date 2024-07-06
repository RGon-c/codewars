// DESCRIPTION:
// Given a string, remove any characters that are unique from the string.
// Example:
// input: "abccdefee"
// output: "cceee"


function onlyDuplicates(str) {
    const arrStr = str.split('');
    let res = ''
      arrStr.map(function(item) {
          let count = 0;
          arrStr.forEach(function(items){
              item == items ? count++ : ''
          })
          count > 1 ? res += item : ''
      });
      return(res);
  }
  
