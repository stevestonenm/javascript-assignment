/******************************************
 * script file for the javascript challenge
 ******************************************/

function changeColor() {
	document.getElementById("future").style.backgroundColor = "lightblue";
}

function changeFont() {
	document.getElementById("samuel").style.color = "red";
}

function sayWhat() {
	document.getElementById("btn").innerHTML = document.getElementById("boxContent").value;
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