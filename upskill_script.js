//Question 1: Create a function that will be able to convert figures from fahrenheit to celsius.
let FahrToCel =(fahr)=> {
    return (fahr - 32) * (5/9)
  }
  
  //Question 1: Test Cases
  console.log(FahrToCel(32) +"°C") //0°C
  console.log(FahrToCel(212) + "°C") // 100°C
  
  //Question 2: Create a function that will calculate the average of numbers in an array.
  let arrAvg = (arr) => {
    let arrSun = 0;
    for(let i = 0; i < arr.length; i++){
        arrSum = arrSun + arr [i]
    }
    return (arrSun/arr.length)
  }
  
  //Question 2: Test Cases
  console.log(arrAvg([1, 2, 3])) //2
  console.log(arrAvg([13, 5, 21])) //13
  
  // Question 3: Create a function that checks if a number, n is divisible by two numbers
  let duoDiviChecker = (n, x, y) => {
    if(n % x === 0 && n % y === 0){
        return true
    }else{
        return false
    }
  }
  
  //Question 3: Test Cases
  console.log(duoDiviChecker(100, 5, 10)) //true
  console.log(duoDiviChecker(49, 7, 9)) //false
  
  //Question 4: Create a function that will output the first 100 prime numbers
  function generatePrimeNumbers(n) {
  let primes = [];
  let num = 2;
  
  while (primes.length < n) {
    let isPrime = true;
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
  
    if (isPrime) {
      primes.push(num);
    }
  
    num++;
  }
  
  return primes;
  }
  
  //Question 4: Test Cases
  // Generate the first 100 prime numbers
  const primeNumbers = generatePrimeNumbers(100);
  
  // Print the prime numbers
  primeNumbers.forEach((prime) => {
  console.log(prime);
  });

  
  //Question 5: Create a function that will return a boolean specifying if a number is a prime number
  function isPrime(number) {
    // Check if the number is less than 2
    if (number < 2) {
      return false;
    }
  
    // Check for divisibility from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
//Question 5: Test Cases
console.log(isPrime(7));  // Output: true
console.log(isPrime(12)); // Output: false

//Question 6: Create a function that receives an array of numbers of diverse numbers and returns an array containing only positive numbers.

function getPositiveNumbers(numbers) {
    var positiveNumbers = numbers.filter(function(number) {
      return number > 0;
    });
  
    return positiveNumbers;
  }

  //Question 6: Test Cases
  var numbers = [-2, -1, 0, 1, 2];
var positiveNumbers = getPositiveNumbers(numbers);
console.log(positiveNumbers); // Output: [1, 2]

//Question 7: Write a program that prints the numbers from 1 to 100. But for multiples of 3 prints "Fizz" instead of the number and for the multiples of 5 prints "Buzz". For numbers which are multiples of both 3 and 5 prints "FizzBuzz".

for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }

/*Output for Question 7: 
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
*/