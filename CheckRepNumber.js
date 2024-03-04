// Receive an array and check if have duplicate number in it.

const checkRepNumber = (arr) => {
  const numberMap = new Map(); //O(1) time | O(1) space

  for (let i = 0; i < arr.length; i++) {
    //O(n) time | O(1) space
    if (numberMap.has(arr[i])) {
      //O(1) time | O(1) space
      return true; //O(1) time | O(1) space
    }

    numberMap.set(arr[i], arr[i]); //O(1) time | O(1) space
  }

  return false; //O(1) time | O(1) space
};

//O(n) time  | O(1) space

console.log(checkRepNumber([1, 2, 3, 4, 5, 6, 7, 1]));
