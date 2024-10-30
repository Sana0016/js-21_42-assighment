// =========================chapter38-42===========================//
// ==============question_01============================//
// function power(a, b) {
//     return a ** b;
//   }
  
//   var base = 2;
//   var exponent = 3;
//   var result = power(base, exponent);
//   console.log(`${base} raised to ${exponent} is ${result}`);
  
// ==============question_02============================//
// function checkLeapYear(year) {
//   switch (true) {
//     case year % 4 === 0 && year % 100 !== 0:
//     case year % 400 === 0:
//       console.log(`${year} is a leap year.`);
//       break;
//     default:
//       console.log(`${year} is not a leap year.`);
//   }
// }

// var year = parseInt(prompt("Enter a year:"));
// checkLeapYear(year);

// ==============question_03============================//
// function calculateSemiPerimeter(a, b, c) {
//   return (a + b + c) / 2;
// }

// // Function 2: Calculate area of triangle
// function calculateTriangleArea(a, b, c) {
//   var S = calculateSemiPerimeter(a, b, c);
//   return Math.sqrt(S * (S - a) * (S - b) * (S - c));
// }

// var a = 3;
// var b = 4;
// var c = 5;

// var area = calculateTriangleArea(a, b, c);
// console.log(`Area of triangle: ${area}`);
// ==============question_04============================//
// function calculateAverage(marks1, marks2, marks3) {
//     return (marks1 + marks2 + marks3) / 3;
//   }
  
//   function calculatePercentage(marks1, marks2, marks3, totalMarks) {
//     var totalObtained = marks1 + marks2 + marks3;
//     return (totalObtained / totalMarks) * 100;
//   }
  
//   function mainFunction() {
//     var marks1 = parseInt(prompt("Enter marks in Subject 1:"));
//     var marks2 = parseInt(prompt("Enter marks in Subject 2:"));
//     var marks3 = parseInt(prompt("Enter marks in Subject 3:"));
//     var totalMarks = parseInt(prompt("Enter total marks:"));
  
//     var average = calculateAverage(marks1, marks2, marks3);
//     var percentage = calculatePercentage(marks1, marks2, marks3, totalMarks);
  
//     console.log(`Average marks: ${average}`);
//     console.log(`Percentage: ${percentage.toFixed(2)}%`);
//   }
  
//   mainFunction();
  
  
// ==============question_05============================//
// function customIndexOf(string, char) {
//     var index = -1;
//     switch (true) {
//       case string.includes(char):
//         for (var i = 0; i < string.length; i++) {
//           if (string[i] === char) {
//             index = i;
//             break;
//           }
//         }
//         break;
//       default:
//         index = -1;
//     }
//     return index;
//   }
  
//   var string = "Hello World";
//   var char = "W";
//   var index = customIndexOf(string, char);
  
//   switch (index) {
//     case -1:
//       console.log(`Character '${char}' not found.`);
//       break;
//     default:
//       console.log(`Character '${char}' found at index ${index}.`);
//   }
  
  
// ==============question_06============================//
// function deleteVowels(sentence) {
//   var result = '';

//   for (var char of sentence) {
//     switch (true) {
//       case 'aeiouAEIOU'.includes(char):
//         break;
//       default:
//         result += char;
//     }
//   }

//   return result;
// }

// var sentence = "Hello World";
// var result = deleteVowels(sentence);
// console.log(result);  
// ==============question_07============================//
// function countSuccessiveVowels(text) {
//     text = text.toLowerCase();
//     var count = 0;
//     var prevChar = '';
  
//     for (var char of text) {
//       switch (true) {
//         case (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') 
//              && (prevChar === 'a' || prevChar === 'e' || prevChar === 'i' || prevChar === 'o' || prevChar === 'u'):
//           count++;
//           break;
//         default:
//           prevChar = char;
//       }
//     }
  
//     return count;
//   }
//   var text = "Please read this application and give me gratuity";
//   var count = countSuccessiveVowels(text);
//   console.log(`Successive vowels count: ${count}`);
  

// ==============question_08============================//
// function kmToMeters(km) {
//   return km * 1000;
// }

// function kmToFeet(km) {
//   return km * 3280.84;
// }

// function kmToInches(km) {
//   return km * 39370.1;
// }

// function kmToCentimeters(km) {
//   return km * 100000;
// }
// function main() {
//   var km = parseFloat(prompt("Enter distance in km:"));

//   console.log(`${km} km is equal to:`);
//   console.log(`Meters: ${kmToMeters(km)}`);
//   console.log(`Feet: ${kmToFeet(km).toFixed(2)}`);
//   console.log(`Inches: ${kmToInches(km).toFixed(2)}`);
//   console.log(`Centimeters: ${kmToCentimeters(km)}`);
// }

// main();

// ==============question_09============================//
// function calculateOvertimePay(hoursWorked) {
//     var overtimeRate = 12.00;
//     var standardHours = 40;
//     var overtimePay = 0;
  
//     switch (true) {
//       case hoursWorked <= standardHours:
//         overtimePay = 0;
//         break;
//       default:
//         var overtimeHours = hoursWorked - standardHours;
//         overtimePay = overtimeHours * overtimeRate;
//     }
  
//     return overtimePay;
//   }
  
//   function main() {
//     var hoursWorked = parseInt(prompt("Enter hours worked:"));
//     var overtimePay = calculateOvertimePay(hoursWorked);
  
//     console.log(`Hours worked: ${hoursWorked}`);
//     console.log(`Overtime pay: Rs. ${overtimePay.toFixed(2)}`);
//   }
  
//   main();

// ==============question_10============================//
// function calculateCurrencyNotes(amount) {
//   var notes = [100, 50, 10];
//   var count = [0, 0, 0];

//   for (var i = 0; i < notes.length; i++) {
//     count[i] = Math.floor(amount / notes[i]);
//     amount %= notes[i];
//   }

//   return count;
// }

// function main() {
//   var amount = parseInt(prompt("Enter amount to withdraw (in hundreds):")) * 100;
//   var counts = calculateCurrencyNotes(amount);

//   console.log(`Amount: Rs. ${amount}`);
//   console.log(`Currency Notes:`);
//   console.log(`  100: ${counts[0]}`);
//   console.log(`  50: ${counts[1]}`);
//   console.log(`  10: ${counts[2]}`);
// }


// main();
