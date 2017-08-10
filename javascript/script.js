/******************************************
 * script file for the javascript challenge
 ******************************************/

function changeColor() {
	document.getElementById("future").style.backgroundColor = "lightblue";
}

function resetColor() {
	document.getElementById("future").style.backgroundColor = "";
}

function changeFont() {
	document.getElementById("samuel").style.color = "red";
}



function changeText() {
	document.getElementById("help").innerHTML = "Readymade flexitarian cornhole lomo swag chicharrones distillery twee adaptogen meggings. Butcher hot chicken stumptown, glossier banjo trust fund 3 wolf moon schlitz skateboard fixie. Before they sold out hot chicken farm-to-table, 90's celiac cray paleo. Migas shabby chic put a bird on it pop-up, schlitz beard blue bottle occupy pabst bicycle rights truffaut snackwave vinyl health goth sartorial."
}

function changeImage() {
	if (document.getElementById("imgChange").src == "https://www.fillmurray.com/225/225")
	{
		document.getElementById("imgChange").src = "https://www.fillmurray.com/200/200";
	}
	else
	{
		document.getElementById("imgChange").src = "https://www.fillmurray.com/225/225";
	}
}

$(document).ready(function() {
	$("#getBacon").click(function() {
		$.ajax({
			method: "GET",
			url: "https://baconipsum.com/api/?type=meat-and-filler"
		}).done(function(reply) {
			$("#bacon").html(reply);
			console.log("you like bacon!!!");
		});
	});
});

/**
function jsBaconRequest() {

	// URL of the API Endpoint
	var requestUrl = "https://baconipsum.com/api/?type=meat-and-filler";

	// create new request
	var httpRequest = new XMLHttpRequest();

	// if can't create httpRequest request, alert error message
	if (!httpRequest) {
		alert('Giving up :( Cannot create an XMLHTTP instance');
		return false;
	}

	// run function that prints out response onreadystatechange
	httpRequest.onreadystatechange = printJsBacon;

	// open the request
	httpRequest.open("GET", requestUrl, true);

	// send the request
	httpRequest.send();

	// this function prints the bacon response to the screen
	// or an error if an exception is thrown
	function printJsBacon() {
		try {
			if(httpRequest.readyState === XMLHttpRequest.DONE) {
				if (httpRequest.status === 200) {

					//parse JSON
					var bacon = JSON.parse(httpRequest.response);

					//put parsed JSON on screen
					document.getElementById("bacon").innerHTML = bacon;
					console.log("you have Vanilla.js flavored bacon!");
				}
			}
		} catch(e) {
			alert("Exception: " + e.description);
		}
	}
}
 **/