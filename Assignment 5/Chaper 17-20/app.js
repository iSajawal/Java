// Test 1
var array = [[0,1,2,3], [1,0,1,2], [2,1,0,1]];


// Test 2
var array = [[0,1,2,3], [1,0,1,2], [2,1,0,1]];
for(var i = 0; i < array.length; i++){
	document.write(array[i].join(" ") + " <br />");
}


// Test 3
for(var i = 1; i <= 10; i++){
	document.write(i + "<br />");
}


// Test 4
var number = +prompt("Enter number");
var length = +prompt("Enter table length");
for(var i = 1; i <= length; i++){
	document.write(number + " x " + i + " = " + number*i + "<br />");
}


// Test 5
var fruits = ["apple", "banana", "mango", "orange", "strawbery"];
for(var i = 0; i < fruits.length; i++){
	document.write(fruits[i] + "<br />");
}
document.write("<br />");
for(var i = 0; i < fruits.length; i++){
	document.write("Element at Index " + i + " is " + fruits[i] + "<br />");
}


// Test 6
document.write("<b>Counting: </b><br />");
for (var i = 1; i <= 15; i++) {
    document.write(i + ", ");
}

document.write("<br /><br /><b>Reverse Counting: </b><br />");
for (var i = 10; i > 0; i--) {
    document.write(i + ", ");
}

document.write("<br /><br /><b>Even: </b><br />");
for (var i = 0; i <= 20; i++) {
    if ((i % 2) === 0) {
        document.write(i, ", ");
    }
}

document.write("<br /><br /><b>Odd: </b><br />");
for (var i = 0; i <= 20; i++) {
    if ((i % 2) === 1) {
        document.write(i, ", ");
    }
}

document.write("<br /><br /><b>Series: </b><br />");
for (var i = 1; i <= 20; i++) {
    if ((i % 2) === 0) {
        document.write(i, "k, ");
    }
}

// Was not able to understand how to do Test 7


// Test 8
var array = [24, 53, 78, 91, 12];
var max = array[0];
for(var i =0; i < array.length; i++){
	if(array[i] > max){
		max = array[i];
	}
}
document.write("Array items: " + array + "<br />");
document.write("The largest number is "+max);


// Task 9
var array = [24, 53, 78, 91, 12];
var max = array[0];
for(var i =0; i < array.length; i++){
	if(array[i] < max){
		max = array[i];
	}
}
document.write("Array items: " + array + "<br />");
document.write("The smallest number is "+max);



// Test 10
var number = 5;
for (var i = 5; i <= 100; i = i + number) {
    document.write(i + ", ")
}
