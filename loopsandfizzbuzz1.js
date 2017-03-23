/* PART 0 *
Write a function that calculates the sum of all the numbers in an array */
function sumOfArray (inputArr) {
  var sum = 0
  for (var i = 0; i < inputArr.length; i++) {
    sum = sum + inputArr[i]
  }
  return sum
}
console.assert(sumOfArray([1, 2]) === 3)
console.assert(sumOfArray([]) === 0)
console.assert(sumOfArray([1, 2, 3]) === 6)
console.assert(sumOfArray([10, 9, 8]) === 27)

// PART 1

// Write a function maxOfArray() that takes an array of numbers as an argument and finds the highest number.

function maxOfArray (inputArr) {
  var max = inputArr[0]
  for (var i = 0; i < inputArr.length; i++) {
    // if inputArr[i] > max

    max = inputArr[i]
  }
  return max
}

console.assert(maxOfArray([2, 4, 3]) === 4)
console.assert(maxOfArray([10, 9, 8, 100, 7, 6]) === 100)
console.assert(isNaN(maxOfArray([1, 2, 'bucklemyshoe'])))

/**
PART 2 *
Write a function isVowel() that takes a character (i.e. a string of length 1)
and returns true if it is a vowel, false otherwise. */
function isVowel (vowel) {
  if (vowel.length === 1)
  {
    vowels = 'aeiou'
    isVowel = vowel.indexOf(vowel) >= 0 ? true : false;

    return isVowel
  }
}


console.assert(isVowel(0) === false)
console.assert(isVowel('B') === false)
console.assert(isVowel('b') === false)
console.assert(isVowel('a') === true)
console.assert(isVowel('E') === true)

/**
Part 3 *
Define a function reverse() that computes
the reversal of a string. For example,
reverse("skoob") should return the
string "books". */

function reverse (rev) {
  var i;
  var org = ''
  for (i = 0; i < org(i).length; i++) {
    rev = org.append(i)
    rev = rev.reverse
  }
  return rev
}

console.assert(reverse('books') === 'skoob')
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")

/**
Part 4 *
write a function the returns a FizzBuzz string for some number N (counting up from 1).
- for every number that isn't a multiple of 3 or 5, return a period "."
- for every number that is a multiple of 3 (but not 5), return "fizz"
- for every number that is a multiple of 5 (but not 3), return "buzz"
- for every number that is a multiple of 3 and 5, return "fizzbuzz" */

console.assert(fizzbuzz(1) === '.')
console.assert(fizzbuzz(2) === '..')
console.assert(fizzbuzz(3) === '..fizz')
console.assert(fizzbuzz(5) === '..fizz.buzz')
console.assert(fizzbuzz(10) === '..fizz.buzzfizz..fizzbuzz')

/**
Part 5 *
Write a function findLongestWord() that takes a string of words and returns the longest word.
i.e. findLongestWord("a book full of dogs") should return "book" */
function findLongestWord (largword) {
    if(typeof largword === 'string') {
    	var wordArr = largword.split(' ')
        var max = ''
        for(var i = 0; i < wordArr.length; i++) {
        	if( max.length < wordArr[i].length) {
            	max = wordArr[i]
            }
        }
        return max
    }
}
console.assert(findLongestWord('a book full of dogs') === 'book')
console.assert(findLongestWord("don't mess with Texas") === 'Texas')

/**
PART 6 *
write a function that returns the Greatest Common Denominator of two numbers
- if no GCD exists, return 1 */
functon GCD(a,b) {
  while(a!=0 && b!=0)
    {
       var c = b;
       b = a%b;
       a = c;
    }
    return a+b;
}





console.assert(GCD(5, 1) === 1)
console.assert(GCD(15, 3) === 3)
console.assert(GCD(15, 5) === 5)
console.assert(GCD(50, 20) === 10)
