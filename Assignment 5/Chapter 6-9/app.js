// Task 1
// var number = 10;
// document.write("Result: <br />");
// document.write("The value of a is: " + number);
// document.write("<br /><br /> -----------------------------");

// var number = ++number;
// document.write("<br /><br />The value of ++a is: " + number);
// document.write("<br />Now the value is: " + number);

// document.write("<br /><br /><br />The value of a++ is: " + number++);
// document.write("<br />Now the value is: " + number++);

// var number = --number;
// document.write("<br /><br /><br />The value of --a is: " + --number);
// document.write("<br />Now the value is: " + number);

// document.write("<br /><br /><br />The value of a-- is: " + number--);
// document.write("<br />Now the value is: " + number--);


// Task 2
// var a = 2;
// document.write("a is " + a);
// var b = 1;
// document.write("<br />b is " + b);
// var result = --a - --b + ++b + b--;
// document.write("<br />  Result is " + result);


// Task 3
// var name = prompt("What is your name?");
// document.write("Welcome " + name);


// Task 5
// var number = +prompt("Enter number");
// for(var i = 1; i<=10; i++){
// 	if(number){
// 		document.write(number + " x " + i + " = " + number*i + "<br />");
// 	}else{
// 		document.write("5 x " + i + " = " + 5*i + "<br />");
// 	}
// }


// Task 6
// var subject1 = prompt("Enter subject 1");
// var subject2 = prompt("Enter subject 2");
// var subject3 = prompt("Enter subject 3");

// var totalMarks = 100;

// var obtMarks = +prompt("Subject 1 obtained marks");
// var obtMarks2 = +prompt("Subject 2 obtained marks");
// var obtMarks3 = +prompt("Subject 3 obtained marks");
// var totalObtMarks = obtMarks + obtMarks2 + obtMarks3;

// var percentage1 = (obtMarks / totalMarks) * 100;
// var percentage2 = (obtMarks2 / totalMarks) * 100;
// var percentage3 = (obtMarks3 / totalMarks) * 100;
// var avgPercentage = ((percentage1 + percentage2 + percentage3) / 300) * 100;

// document.write(`
// 		<table>
// 			<tr>
// 				<th>Subject</th>
// 				<th>Total Marks</th>
// 				<th>Obtained Marks</th>
// 				<th>Percentage</th>
// 			</tr>
// 			<tr>
// 				<td>${subject1}</td>
// 				<td>${totalMarks}</td>
// 				<td>${obtMarks}</td>
// 				<td>${percentage1}%</td>
// 			</tr>
// 			<tr>
// 				<td>${subject2}</td>
// 				<td>${totalMarks}</td>
// 				<td>${obtMarks2}</td>
// 				<td>${percentage2}%</td>
// 			</tr>
// 			<tr>
// 				<td>${subject3}</td>
// 				<td>${totalMarks}</td>
// 				<td>${obtMarks3}</td>
// 				<td>${percentage3}%</td>
// 			</tr>
// 			<tr>
// 				<td></td>
// 				<td><b>300</b></td>
// 				<td><b>${totalObtMarks}</b></td>
// 				<td><b>${avgPercentage}%</b></td>
// 			</tr>
// 		</table>
// 	`);
