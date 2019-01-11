let addSort = require('./modulesExercise');
let numToAdd = [12, 4, 72, 93, 44];

function addToList(numToAdd){
  numToAdd.forEach(function(addIt){
    addSort.addNumber(addIt);
  });

  return addSort.sortArray();
}

console.log(addToList(numToAdd));