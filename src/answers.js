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

function removeNullsFromArray(n) {

}

function removeNilsAndFalseFromAnArray() {
  // code here
}

function reverseElementsInArray(array) {

}

function allElementsExceptFirstThree() {

}

function addElementsToBeginningOfArray() {
  // code here
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

function totalOfNumbers() {
  // code here
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
