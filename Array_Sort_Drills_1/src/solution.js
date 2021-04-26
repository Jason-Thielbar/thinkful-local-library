function sortWords(words) {
  // your solution here
  return words.sort((wordsA, wordsB) => wordsA.toLowerCase() > wordsB.toLowerCase() ? 1 : -1)
}

function sortNumbers(numbers) {
  // your solution here
  return numbers.sort((num1, num2) => num1 > num2 ? 1 : -1)
}

function largestFirst(numbers) {
  // your solution here
  return numbers.sort((num1, num2) => num1 < num2 ? 1 : -1)
}

function sortFlowersByZone(flowers) {
  // your solution here
  return flowers.sort((flowerA, flowerB) => flowerA.zone > flowerB.zone ? 1 : -1);
}

function sortByLength(strings) {
  // your solution here
  return strings.sort((stringOne, stringTwo) => stringOne.length > stringTwo.length ? 1 : -1)
}

module.exports = {
  sortWords,
  sortNumbers,
  largestFirst,
  sortFlowersByZone,
  sortByLength,
};
