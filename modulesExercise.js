let arrayAddSort = {
  numberArray: numberArray = []
};

function addNumber(toAdd){
  arrayAddSort.numberArray.push(toAdd);
}

function sortArray(){
  arrayAddSort.numberArray.sort(function (a, b){
    return a - b;
  });

  return arrayAddSort.numberArray;
}

module.exports = {
  addNumber : addNumber,
  sortArray : sortArray
};