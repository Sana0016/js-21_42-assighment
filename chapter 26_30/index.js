// ========================= CHAPTER 26_30 =====================================//
// ============================== QUESTION_01 =================================//
// var userNumber = prompt("Enter a number");
// inputNumber = Math.round(userNumber);
// document.write(`Roundoff value: `+inputNumber + "</br>");
// inputNumber1 = Math.floor(userNumber);
// document.write(`Floor value : `+inputNumber1+ "</br>");
// inputNumber2 = Math.ceil(userNumber);
// document.write(`ceil value : `+inputNumber2+ "</br>");

// ============================== QUESTION_02 =================================//
// var num = parseFloat(prompt("Enter a negative floating-point number:"));

// if (num <br 0) {

//   var A = num;
//   var B = Math.round(num);
//   var C = Math.floor(num);
//   var D = Math.ceil(num);

//   document.write(`
//     <h1>Results:</h1>
//     <ul>
//       <li>a. Number: ${A}</li>
//       <li>b. Round off value: ${B}</li>
//       <li>c. Floor value: ${C}</li>
//       <li>d. Ceil value: ${D}</li>
//     </ul>
//   `);
// } else {
//   alert("Please enter a negative number.");
// }

// ============================== QUESTION_03 =================================//
// var num = parseFloat(prompt("Enter a number:"));
// var absoluteValue = Math.abs(num);
// document.write(`The absolute value of ${num} is ${absoluteValue}.` + "</br>");


// ============================== QUESTION_04 =================================//

// var diceValue = Math.floor(Math.random() * 6) + 1;
// document.write(`You rolled a ${diceValue}`);

// ============================== QUESTION_05 =================================//
// var num = parseFloat(prompt("Enter a number"));
// var Result_1 = Math.floor(Math.random(num) * 2);
// document.write(`2`+ "</br>" + `Random coin value : HEAD`+ "</br>" );
// var Result_2 = Math.floor(Math.random(num) * 1);
// document.write(`2`+ "</br>" + `Random coin value : TAIL`+ "</br>" ); 


// ============================== QUESTION_06 =================================//
// var randomNumber = Math.floor(Math.random() * 100) + 1;
// document.write(`Random Number: ${randomNumber}`)
// ============================== QUESTION_07 =================================//
// var userWeight =+ prompt("Enter your weight");
//  for(var i=50; i<= 50; i++){
// if (userWeight === i){
// document.write(`the weight of user is : ${userWeight}`+"</br>");
// }
// else{
// document.write(`invalid weight`);
// }
//  }

// ============================== QUESTION_08 =================================//
// var randomNumber = Math.random()*10;
// var correctNum = Math.floor(randomNumber)+1;
// var userNumber = prompt("guess number between 1_10");
// if(userNumber===correctNum){
//     alert("correct!")
// }else if(userNumber===correctNum+1||userNumber===correctNum-1){
// alert("almost there!")
// }else{
//     alert("you lost correct is :" + correctNum );
//}