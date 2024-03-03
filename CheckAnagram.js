function generateRandomString(k) {
  let characters = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  let charactersLength = characters.length;

  for (let i = 0; i < k; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

const CheckAnagram = (w1, w2) => {
  if (w1.length != w2.length) return false; //O(1) time | //O(1) space

  const w1_Map = new Map(); //O(1) time | //O(1) space

  for (let i = 0; i < w1.length; i++) {
    //O(n) time | //O(1) space
    const w1_letter = w1.charAt(i); //O(1) time | //O(1) space

    if (!w1_Map.has(w1_letter)) {
      //O(1) time | //O(1) space
      w1_Map.set(w1_letter, 0); //O(1) time | //O(1) space
    }

    const letter_value = w1_Map.get(w1_letter); //O(1) time | //O(1) space

    w1_Map.set(w1_letter, letter_value + 1); //O(1) time | //O(1) space
  }

  for (let i = 0; i < w2.length; i++) {
    //O(m) time | //O(1) space
    const w2_letter = w2.charAt(i); //O(1) time | //O(1) space

    if (!w1_Map.has(w2_letter)) return false; //O(1) time | //O(1) space

    const letter_value = w1_Map.get(w2_letter); //O(1) time | //O(1) space

    if (letter_value == 0) return false; //O(1) time | //O(1) space

    w1_Map.set(w2_letter, letter_value - 1); //O(1) time | //O(1) space
  }

  return true; //O(1) time | //O(1) space
};

//O(n * m) time | //O(1) space

let randomString1 = generateRandomString(2);
let randomString2 = generateRandomString(2);

console.log(CheckAnagram(randomString1, randomString2));
