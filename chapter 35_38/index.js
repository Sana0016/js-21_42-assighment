// ========================chapter 35_38========================//
// ==============Question_1============================//
// function displayCurrentDateTime() {
//   var currentDate = new Date();
//   document.write(currentDate);
// }

// displayCurrentDateTime();
// ==============Question_2============================//
// function greetUser(firstName, lastName) {
//     var fullName = `${firstName} ${lastName}`;
//     alert(`Hello, ${fullName}!`);
//   }
  
//   var firstName = prompt("Enter your first name:");
//   var lastName = prompt("Enter your last name:");
  
//   greetUser(firstName, lastName);
// ==============Question_3============================//
// function addNumbers(num1, num2) {
//     return num1 + num2;
// }
//   var num1 = parseFloat(prompt("Enter first number:"));
//   var num2 = parseFloat(prompt("Enter second number:"));
//   var sum = addNumbers(num1, num2);
//   alert(`The sum is: ${sum}`);

  

// ==============Question_4============================//
// function calculate(num1, num2, operator) {
//     switch (operator) {
//       case "+":
//         return num1 + num2;
//       case "-":
//         return num1 - num2;
//       case "*":
//         return num1 * num2;
//       case "/":
//         if (num2 !== 0) {
//           return num1 / num2;
//         } else {
//           return "Error: Division by zero";
//         }
//       default:
//         return "Invalid operator";
//     }
//   }
  
//   var num1 = parseFloat(prompt("Enter first number:"));
//   var operator = prompt("Enter operator (+, -, *, /):");
//   var num2 = parseFloat(prompt("Enter second number:"));
//   var result = calculate(num1, num2, operator);
//   alert(`Result: ${num1} ${operator} ${num2} = ${result}`);
  
  

// ==============Question_5============================//
// function square(x) {
//   return x * x;
// }
// var num = 5;
// var squaredNum = square(num);
// console.log(`${num} squared is ${squaredNum}`);



// ==============Question_6============================//
// function factorial(n){

//     var result = 1;

//    for( i = 1 ; i <= n ; i++){
//           result *= i;
//    }
//     return result;
// }

// console.log("factorial of 5 is" +  factorial(5));

// ==============Question_7============================//
// var startNum = prompt("Enter start number!");
// var endNum = prompt("Enter end number!");
// function number(startNum, endNum){
//     for(i=startNum; i<=endNum; i++){
//        return(i);
//     }
// }
// console.log(number(startNum, endNum));

// ==============Question_8============================//
// function square(n){
//     return n*n
// }
// function hypo(base, para){
//     return square(para)+ square(base);
// }
// console.log(hypo(2, 3));

// ==============Question_9============================//
// var arg_1 = prompt("Enter a width of square!")
// var arg_2 = prompt("Enter a height of square!")
// function argument(width, height){
//     return width*height;
// }
// console.log(argument(width, height));
// // =========== OR =======//
// var result= argument(3,2);
// console.log(result);

// ==============Question_10============================//
function palindrome(str){
    var splitStr = str.split("");
    var reverseStr = str.reverse("")
}
var str1 = splitstr, reverseStr;
console.log(str1);

// ==============Question_11============================//
// function capitalizeFirstLetters(str) {
//     return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
//   }
  
//   var inputString = 'the quick brown fox';
//   var outputString = capitalizeFirstLetters(inputString);
  
//   console.log(outputString);
// ==============Question_12============================//
// function findLongestWord(str) {
//     var words = str.split(' ');
//     var longestWord = '';
  
//     for (var word of words) {
//       if (word.length > longestWord.length) {
//         longestWord = word;
//       }
//     }
  
//     return longestWord;
//   }
  
//   var inputString = 'Web Development Tutorial';
//   var longestWord = findLongestWord(inputString);
  
//   console.log(longestWord); 
// ==============Question_13============================//
// function countLetterOccurrences(str, letter) {
//     return str.toLowerCase().split(letter.toLowerCase()).length - 1;
    
//   }
  
//   var inputString = '(link unavailable)';
//   var letter = 'o';
//   var occurrences = countLetterOccurrences(inputString, letter);
  
//   console.log(`The letter '${letter}' occurs ${occurrences} times.`);
  
  
// ==============Question_14============================//

// var PI = Math.PI;

// function calcCircumference(radius) {
//   var circumference = 2 * PI * radius;
//   console.log(`The circumference is ${circumference.toFixed(2)}`);
// }

// function calcArea(radius) {
//   var area = PI * radius ** 2;
//   console.log(`The area is ${area.toFixed(2)}`);
// }
