var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/whale_shark_2.jpg') {
	  myImage.setAttribute ('src', 'images/whale_shark_2.jpg');
	} else {
	  myImage.setAttribute ('src', 'images/whale_shark_2.jpg');
	}

}

/*document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}*/

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = myName + '\'s jog log'; 
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = storedName + '\'s jog log';
}

myButton.onclick = function() {
	setUserName();
}