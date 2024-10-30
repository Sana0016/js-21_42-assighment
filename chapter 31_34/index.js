// =============chapter_31-34=====================//
// =====================Question_1================//
// var date = newDate();
// var month = currentDate.getMonth();
// console.log(date);

// =====================Question_2================//
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var d = new Date();
// alert(months[d.getMonth()]);
// =====================Question_3================//
// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var d = new Date();
// alert(days[d.getDay()]);

// =====================Question_4================//
// var d = new Date();
// if (d.getDay() === 0 || d.getDay() === 6) {
// document.write("It's Fun day");
// }

// =====================Question_5================//
// var d = new Date();
// if (d.getDate() < 16) {
// document.write("First fifteen days of the month");
// } else {
// document.write("Last days of the month");
// }

// =====================Question_6================//
// var startTime = new Date('1970-01-01T00:00:00');
// var currentTime = new Date();
// var minutes = (currentTime - startTime) / 1000 / 60;
// var minuteVariable = minutes;
// document.write(minuteVariable);

// =====================Question_7================//
// var d = new Date();
// if (d.getHours() <br 12) {
// alert("It's AM");
// } else {
// alert("It's PM");
// }
// =====================Question_8================//
// var laterDate = new Date('2020-12-31');
// console.log(laterDate);

// =====================Question_9================//
// var ramadanDate = new Date('2015-06-18');
// var today = new Date();
// var daysSinceRamadan = Math.floor((today - ramadanDate) / (1000 * 60 * 60 * 24));
// alert(daysSinceRamadan);

// =====================Question_10================//
// var referenceDate = new Date('2015-01-01');
// var today = new Date();
// var seconds = (today - referenceDate) / 1000;
// document.write(seconds);
// =====================Question_11===============//
// var currentDate = new Date();
// var hours = currentDate.getHours();
// currentDate.setHours(currentDate.getHours() + 1);
// document.write(currentDate);
// =====================Question_12================//
// var currentDate = new Date();
// var pastDate = new Date(currentDate.getFullYear() - 100, currentDate.getMonth(), currentDate.getDate());
// alert(pastDate);



// =====================Question_13================//
//  var age = parseInt(prompt("Enter your age:"));
//  var birthYear = new Date().getFullYear() - age;
// document.write(`your age is ${age} ` +"</br>")
//  document.write("Your birth year is: " + birthYear);


// =====================Question_14================//
// var customerName = "John Doe";
// var currentMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][new Date().getMonth()];
// var units = 100;
// var chargesPerUnit = 12.50;
// var netAmount = units * chargesPerUnit;
// var latePaymentSurcharge = 500;
// var grossAmount = netAmount + latePaymentSurcharge;

// document.write(`<h1>K-Electric Bill</h1> <p>Customer Name: ${customerName}</p> 
//     <p>Current Month: ${currentMonth}</p>
//      <p>Number of units: ${units}</p> 
//     <p>Charges per unit: ${chargesPerUnit}</p> 
//     <p>Net Amount Payable (within Due Date): ${netAmount.toFixed(2)}</p>
//      <p>Late Payment Surcharge: ${latePaymentSurcharge}</p> 
//      <p>Gross Amount Payable (after Due Date): ${grossAmount.toFixed(2)}</p>`);
