
function longestCommonSubsequnce(stringA, stringB) {
    const lcsMatrix = Array(stringB.length + 1).fill(null).map(() => Array(stringA.length + 1).fill(null));
    for(let columnIndex = 0; columnIndex <= stringA.length; columnIndex+= 1) {
        lcsMatrix[0][columnIndex] = 0;
    }
    for(let rowIndex = 0; rowIndex <= stringB.length; rowIndex+= 1) {
      lcsMatrix[rowIndex][0] = 0;
    }
    for (let rowIndex = 1; rowIndex <= stringB.length; rowIndex += 1) {
      for (let columnIndex = 1; columnIndex <= stringA.length; columnIndex += 1) {
        if (stringA[columnIndex - 1] === stringB[rowIndex - 1]) {
          lcsMatrix[rowIndex][columnIndex] = lcsMatrix[rowIndex - 1][columnIndex - 1] + 1;
        } else {
          lcsMatrix[rowIndex][columnIndex] = Math.max(
            lcsMatrix[rowIndex - 1][columnIndex],
            lcsMatrix[rowIndex][columnIndex - 1],
          );
        }
      }
    }
    if(!lcsMatrix[stringB.length][stringA.length]) {
      return [''];
    }
    const longestSequence = [];
    let columnIndex = stringA.length;
    let rowIndex = stringB.length;
    while(columnIndex > 0 || rowIndex > 0) {
              if(stringA[columnIndex - 1] === stringB[rowIndex - 1]) {
                longestSequence.unshift(stringA[columnIndex - 1]);
                columnIndex -= 1;
                rowIndex -= 1;
              } else if (lcsMatrix[rowIndex][columnIndex] === lcsMatrix[rowIndex][columnIndex - 1]) {
                columnIndex -= 1;
              } else {
                rowIndex -= 1;
              }
    }
    return longestSequence;

  }
  
  export {
    longestCommonSubsequnce,
  };
  
//solution taken from Felix Rilling
//https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sets/longest-common-subsequence/longestCommonSubsequence.js
