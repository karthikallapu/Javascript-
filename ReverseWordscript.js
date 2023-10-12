function reverseWords(sentence) {
  let words = sentence.split(" ");

  let reversedWords = words.map((word) => {
    return word.split("").reverse().join("");
  });

  let reversedSentence = reversedWords.join(" ");

  return reversedSentence;
}

let inputSentence = prompt("Please enter a sentence:");
let reversedSentence = reverseWords(inputSentence);
console.log("Reversed sentence:", reversedSentence);
