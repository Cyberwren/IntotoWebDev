//Sample Exercise
//The objective of this exercise is to allow a user to enter a starting number an ending
//number and a step value into three textboxes on a page. A button will be present that 
//when clicked should output all the even numbers between the start and end value.

//Error messages should be displayed if:
//• Any entry is not numeric 
//• The step is not a positive number 
//• The ending number is less than or equal to the starting number

//Additional Requirements:
//• Utilize the bootstrap CSS library form inputs. • Bootstrap should be linked to the page via CDN.

//take the startNum and run it in a 3 step counter that ends with endNum
//take these numbers and run it though a forLoop checking for even numbers via the % modulo thing
//display the result of the % modulo in a top-down list

//============================================================================



function generateNumbers() {
		if (stepNum < 0){
			console.log("Must be a positive number!");
		}
		else if (startNum > endNum){
			console.log("Starting number must be smaller than the ending number!");
		}
		else{
			if (startNum % 2 != 0 && stepNum % 2 === 0) {
				console.log("This will only return odd numbers");
		}
			else{
				for(var x = startNum; x <= endNum; x = x + stepNum){
					if (x % 2 === 0){
					document.getElementById("numList").innerHTML = x;
			}
					else{
					console.log("This number is not even: " + x);
				}
			}
		}
	}
}
generateNumbers();

function runForm() {
	generateNumbers();

var startNum = document.forms["numberFun"]["startNum"].value;
var endNum = document.forms["numberFun"]["endNum"].value;
var stepNum = document.forms["numberFun"]["stepNum"].value;

var displayButton = document.getElementById("displayBtn");

displayButton.addEventListener("click" function()) {
	function generateNumbers();
});

document.getElementById("printText").innerText = "Here are the even numbers between " + startNum + " and " + endNum + " by " + stepNum + "'s:"

}