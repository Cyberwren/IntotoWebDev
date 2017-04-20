// Sample Exercise
// The objective of this exercise is to allow a user to enter a starting number an ending
// number and a step value into three textboxes on a page. A button will be present that 
// when clicked should output all the even numbers between the start and end value.

// Error messages should be displayed if:
// • Any entry is not numeric 
// • The step is not a positive number 
// • The ending number is less than or equal to the starting number

// Additional Requirements:
// • Utilize the bootstrap CSS library form inputs. 
// • Bootstrap should be linked to the page via CDN.

// take the startNum and run it in a 3 step counter that ends with endNum
// take these numbers and run it though a forLoop checking for even numbers via the % modulo thing
// display the result of the % modulo in a top-down list

//============================================================================

var numbers = [];

function generateNumbers() {
	var startNum = parseInt(document.getElementById('startNum').value);
	var endNum = parseInt(document.getElementById('endNum').value);
	var stepNum = parseInt(document.getElementById('stepNum').value);
	document.getElementById("printText").innerHTML = "Here are the even numbers between " + startNum + " and " + endNum + " by " + stepNum + "'s:"
		if (stepNum < 0){
			document.getElementById("printText").innerHTML = "Must be a positive number!";
		}
		else if (startNum > endNum){
			document.getElementById("printText").innerHTML = "Starting number must be smaller than the ending number!";
		}
		else{
			if (startNum % 2 != 0 && stepNum % 2 === 0) {
				document.getElementById("printText").innerHTML = "This program cannot display odd numbers";
		}
			else{
				for(var x = startNum; x <= endNum; x = x + stepNum){
					if (x % 2 === 0){
						numbers.push(x);
						console.log(numbers);
								}
					else{
					console.log("This number is not even: " + x);
				}
			}
				var div = document.getElementById('numList');
				for(var i in numbers){
					var p = document.createElement('p');
					var content = document.createTextNode(numbers[i]);
					p.appendChild(content);
					div.appendChild(p);
					}
		}
	}
}