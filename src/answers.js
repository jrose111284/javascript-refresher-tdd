function selectElementsStartingWithA(n) {
  var array = [];
  for (var i = 0; i < n.length; i++) {
    var a = n[i].split('');
    if (a[0] == 'a') {
      array.push(n[i]);
    }
  }
  return array;
}

function selectElementsStartingWithAVowel(vowel) {
  array = [];
  volArr = ['a', 'e', 'i', 'o', 'u']

  for (var i = 0; i < vowel.length; i++) {
    var a = vowel[i].split('');
    for (var j = 0; j < volArr.length; j++) {
      if (a[0] === volArr[j]) {
        array.push(vowel[i]);
      }
    }
  }
  return array;
}

function removeNullsFromArray(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === null) array.splice(i, 2);
  }
  return array;
}

function removeNilsAndFalseFromAnArray(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == null || array[i] == false) array.splice(i, 3);
  }
  return array;
}

function reverseElementsInArray(array) {
  var arr = []
  for (var i = 0; i < array.length; i++) {
    var a = array[i].split("").reverse().join("");
    arr.push(a);
  }
  return arr;
}

function allElementsExceptFirstThree(array) {
  return array.splice(-4);
}

function addElementsToBeginningOfArray(array) {

}

function sortWordsByLastLetter() {
  // code here
}

function getFirstHalfOfString() {
  // code here
}

function makeNumberNegative(a) {
  return Math.abs(a);
}

function separateNumbersIntoEvenAndOdd() {
  // code here
}

function countNumberOfPalindromes() {
  // code here
}

function shortestWordInArray() {
  // code here
}

function longestWordInArray() {
  // code here
}

function totalOfNumbers(arr) {
  var i = arr.length;
  var sum = 0;
  while (--i) sum += arr[i];
  return arr;
}

function doubleArray() {
  // code here
}

function getElementsUntilGreaterThanFive() {
  // code here
}

function getAllLetters() {
  // code here
}

function removeCapitaLetters() {
  // code here
}

function roundUp() {
  // code here
}

function roundDown() {
  // code here
}

function formatDateNicely() {
  // code here
}

function getDomainName() {
  // code here
}

function titleizeString() {
  // code here
}

function getSquareRoot() {
  // code here
}
