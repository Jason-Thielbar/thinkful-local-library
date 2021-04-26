function printNames(names) {
  // your solution here
    names.forEach((title) => console.log(title));
  }
  

function logTreeType(trees) {
  // your solution here
 trees.forEach((tree) => console.log(tree.type));
}

function totalPoints(points) {
  // your solution here
 let total = 0; 
 points.forEach(point => total += point);
 return total;
}

function buildSentence(words) {
  // your solution here
  let sentence = [];
 words.forEach(word => sentence += (word + " "))
 return sentence;
}

function logPercentages(decimals) {
  // your solution here
  decimals.forEach(decimal => {

    console.log(`${decimal * 100}%`)
    
    });

}



module.exports = {
  printNames,
  logTreeType,
  totalPoints,
  buildSentence,
  logPercentages,
};
