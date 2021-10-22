/*
*/

function two_sum(numbers, target) {
  const hashTable = {};
  
  for (let i = 0; i < numbers.length; i++) {
    const diff = target - numbers[i];

    if (typeof hashTable[diff] === 'number') {
        return [hashTable[diff], i];
    } else {
        hashTable[numbers[i]] = i;
    }
  }
  return [-1, -1];
}