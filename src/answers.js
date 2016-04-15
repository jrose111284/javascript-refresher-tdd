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
    array.unshift(1);
    return array
}

function sortWordsByLastLetter(array) {
    var arr = [];
    var arrTwo = [];

    for (var i = 0; i < array.length; i++) {
        var a = array[i].split("").reverse().join("");
        arr.push(a);
        arr.sort();
    }

    for (var j = 0; j < arr.length; j++) {
        var b = arr[j].split("").reverse().join("");
        arrTwo.push(b);
    }
    return arrTwo;
}

function getFirstHalfOfString(string) {
    var a = string.match(/[a-zA-Z]/g).length;
    var b = Math.round(a / 2);
    return string.substr(0, b);
}

function makeNumberNegative(a) {
    return Math.abs(a);
}

function separateNumbersIntoEvenAndOdd(array) {
    var evens = []
    var odds = []
    for (var i = 0; i < array.length; i++) {
        if ((array[i] % 2) === 1) {
            odds.push(array[i]);
        } else {
            evens.push(array[i]);
        }
    }
    return ([evens, odds]);

}

function countNumberOfPalindromes(array) {
    arr = []
    for (var i = 0; i < array.length; i++) {
        if (array[i] == array[i].split("").reverse().join("")) {
            arr.push(array[i]);
        }
    }
    return arr.length;
}

function shortestWordInArray(arr) {
    var lgth = 1;
    var shortest;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length <= lgth) {
            shortest = arr[i];
        }
        return shortest;
    }
}

function longestWordInArray(arr) {
    var lgth = 0;
    var longest;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > lgth) {
            var lgth = arr[i].length;
            longest = arr[i];
        }
        return longest;
    }

}

function totalOfNumbers(arr) {
    var total = 0;
    for (var i in arr) {
        total += arr[i];
    }
    return total;
}

function doubleArray(array) {
    var arr = [];
    for (var i = 0; i < array.length; i++) {
        arr.push(array[i]);
    }
    var newArray = array.concat(arr);
    return newArray;
}

function getElementsUntilGreaterThanFive(array) {
    arr = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] <= 5) {
            arr.push(array[i])
        } else {
            break;
        }
    }
    return arr;
}

function getAllLetters(array) {
    arr = []

    for (var i = 0; i < array.length; i++) {
        arr.push(array[i].split(''));
    };
    return arr.concat.apply([], arr).sort();
}

function removeCapitaLetters(string) {
   return string.replace(/[^A-Z]/g, '');
}

function roundUp(number) {
    return Math.ceil(number);
}

function roundDown(number) {
    return Math.floor(number);
}

function formatDateNicely(value) {
  var value = new Date();
  return value.getMonth()+1 + "/" + value.getDate() + "/" + value.getFullYear();

}

function getDomainName(string) {
     return string.split('@')[1];
}

function titleizeString(string) {
    // code here
}

function getSquareRoot(number) {
    return Math.sqrt(number);
}
