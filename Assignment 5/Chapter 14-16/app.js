// Task 1
// var studentNames = [];


// Task 2
// var studentNames = new Array();


// Task 3
// var stringArray = ["apple", "Banana", "Pineapple", "Pear"];


// Task 4
// var intArray = [2, 4, 8, 41];


// Task 5
// var booleanArray = [true, false];


// Task 6
// var mixedArray = ["Ali", "Hamza", 54, 12, true];


// Task 7
// var possibleDegrees = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
// document.write("Qualifications: <br/><br/>");
// for (var i = 0; i < possibleDegrees.length; i++) {
//     document.write(i + 1 + ")" + possibleDegrees[i] + "<br/>");
// }


// Task 8
// var names = ["Tyler", "Matthew", "Mike"];
// var marks = [450, 354, 452];
// for (var i = 0; i < names.length; i++) {
//     document.write("Score for " + names[i] + " is " + marks[i] + ". Percentage is " + ((marks[i] / 500) * 100) + "%<br />");
// }


// Task 9
// var colors = ["Orange", "Blue", "Green", "Yellow", "Golden", "Gray"];

// var startColorAdd = prompt("Color Name");
// colors.unshift(startColorAdd);

// var startColorAdd = prompt("Color Name");
// colors.push(startColorAdd);

// var startColorAddFirst = prompt("Color Name");
// var startColorAddSecond = prompt("Color Name");
// colors.unshift(startColorAddFirst, startColorAddSecond);

// colors.shift();

// var colorPosition = +prompt("Color Position");
// var colorName = prompt("Color Name");
// colors.splice(colorPosition, 0 , colorName);

// var colorPosition = +prompt("Color Position");
// var colorsLength = prompt("Colors length");
// var newArr = colors.splice(colorPosition, colorsLength);


// Task 10
// var scores = [320, 230, 480, 120];
// document.write("Score of students: "+scores +"<br />");
// document.write("Ordered scores of students: "+scores.sort());


// Task 11
// var cities = ["Lahore", "Karachi", "Islamabad", "Quetta", "Faisalabad", "Multan"];
// document.write("Cities: " + cities + "<br />");
// var selectedCities = cities.slice(0, 3);
// document.write("Selectd Cities: " + selectedCities);


// Task 12
// var array = ["This", "is", "my", "cat"];
// document.write("Array: <br />" + array + "<br /><br />");
// document.write("String: <br />" + array.join(" "));


// Task 13
// var devices = ["keyboard", "mouse", "printer", "monitor"];
// for(var i = 0; i < devices.length; i++){
// 	document.write("Out: <br />");
// 	document.write(devices[i] + "<br />");
// }


// Task 14
// var devices = ["keyboard", "mouse", "printer", "monitor"];
// var devicesReversed = devices.reverse();
// for(var i = 0; i < devicesReversed.length; i++){
// 	document.write("Out: <br />");
// 	document.write(devicesReversed[i] + "<br />");
// }


// Task 15
// var companies = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("Select Company <br /><select>");
// for(var i = 0; i < companies.length; i++){
// 	document.write("<option>" + companies[i] + "</option>")
// }
// document.write("</select>");
