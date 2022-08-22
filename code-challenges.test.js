// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// PSUEDOCODE:
// Create a function that takes in a number and returns an array of fibonacci sequence numbers equal to that number
// Inputs are the variables fibLength1 = 6, fibLength2 = 10 as provided below.
// Fibonacci sequence is 1+1=2, 2+3=5, 5+8=13, 8+13=21, 13+21=34, 21+34=55
// Outputs are [1, 1, 2, 3, 5, 8], [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// a) Create a test with expect statements for each of the variables provided.
// Test Fail:
// $ /Users/learnacademy/Desktop/week-3-assessment-VKathryn/node_modules/.bin/jest
//  FAIL  ./code-challenges.test.js
//   makeFib
//     ✕ checks to see if function returns an array of equal length containing numbers in fibonacci sequence (1 ms)

//   ● makeFib › checks to see if function returns an array of equal length containing numbers in fibonacci sequence

//     ReferenceError: makeFib is not defined

//       21 | describe("makeFib", () => {
//       22 |     it("checks to see if function returns an array of equal length containing numbers in fibonacci sequence", () => {
//     > 23 |       expect(makeFib(fibLength1)).toEqual([1, 1, 2, 3, 5, 8]);
//          |       ^
//       24 |       expect(makeFib(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
//       25 |     });
//       26 |   });

//       at Object.expect (code-challenges.test.js:23:7)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

describe("makeFib", () => {
    it("checks to see if function returns an array of equal length containing numbers in fibonacci sequence", () => {
      expect(makeFib(fibLength1)).toEqual([1, 1, 2, 3, 5, 8]);
      expect(makeFib(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
    });
  });

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
const fibonacci = n => { if (n <= 1) { return n; } return fibonacci(n - 1) + fibonacci(n - 2); }

// b) Create the function that makes the test pass.




// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.
// PSUEDOCODE:
// Create a function that evaluates the contents of an array and returns only odd numbers sorted from least to greatest. Utilize .filter to span the array and return odd numbers. Utilize .sort to sort the numbers from smallest to largest.
// Input and output are provided in the prompt.


// a) Create a test with expect statements for each of the variables provided.

describe("oddSort", () => {
    it("takes in an array and returns new array of only odd numbers sorted from least to greatest", () => {
      expect(oddSort(fullArr1)).toEqual([-9, 7, 9, 199]);
      expect(oddSort(fullArr2)).toEqual([-823, 7, 23]);
    });
  });

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


// b) Create the function that makes the test pass.

const oddNum = fullArr1.filter(number => {
    return number % 2 !== 0;
    console.log(fullArr1.sort(function(a, b){return a - b}))
})

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

//PSUEDOCODE: Create a function that returns an array of cumulative sums using .map. Ensure that an empty array as input would be output as an empty array. Input and output is outlined in the prompt

// a) Create a test with expect statements for each of the variables provided.

describe("addNumsArray", () => {
    it("takes in an array and returns an array of an accumulating sum", () => {
      expect(addNumsArray(numbersToAdd1)).toEqual([2, 6, 51, 60]);
      expect(addNumsArray(numbersToAdd2)).toEqual([0, 7, -1, 11]);
      expect(addNumsArray(numbersToAdd3)).toEqual([]);
    });
  });

const numbersToAdd1 = [2, 4, 45, 9]
// Expected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []


// b) Create the function that makes the test pass.

// const addNumsArray = numbersToAdd1 => numbersToAdd1.map((sum => value => sum += value)(0))
// output: [2, 6, 51, 60]
// const addNumsArray = numbersToAdd2 => numbersToAdd1.map((sum => value => sum += value)(0))
// output: [0, 7, -1, 11]
// const addNumsArray = numbersToAdd3 => numbersToAdd1.map((sum => value => sum += value)(0))
// output: []