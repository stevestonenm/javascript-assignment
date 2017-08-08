<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />

		<!-- custom CSS stylesheet -->
		<link rel="stylesheet" href="css/style.css" type="text/css" />

		<!-- javascript -->
		<script type="text/javascript" src="javascript/script.js"></script>

		<title>JavaScript Challenge</title>
	</head>
	<body>
		<h1>Hello JavaScript</h1>
		<div id="future" onmouseenter="changeColor();">
			<p>We want a shrubbery!! Ah, now we see the violence inherent in the system! Well, how'd you become king, then? Who's that then? We shall say 'Ni' again to you, if you do not appease us. Knights of Ni, we are but simple travelers who seek the enchanter who lives beyond these woods. Why do you think that she is a witch? I am your king. Listen. Strange women lying in ponds distributing swords is no basis for a system of government. Supreme executive power derives from a mandate from the masses, not from some farcical aquatic ceremony. He hasn't got shit all over him. Well, I didn't vote for you. Oh! Come and see the violence inherent in the system! Help, help, I'm being repressed! You can't expect to wield supreme power just 'cause some watery tart threw a sword at you! What do you mean? The Knights Who Say Ni demand a sacrifice! Well, we did do the nose. Well, I didn't vote for you. And the hat. She's a witch! Shut up! No, no, no! Yes, yes. A bit. But she's got a wart. Well, I didn't vote for you. The nose? Bloody Peasant!</p>
		</div>
		<h2>Help Me</h2>
		<div id="samuel" onclick="changeFont();">
			<p>Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.</p>
		</div>

		<div>
			<label for="boxContent">Say WAT</label>
			<input type="text" id="boxContent">
		</div>
		<button id="btn" onclick="sayWhat();">Click Me</button>

		<p id="help" onclick="changeText();">Click to Change My Text!</p>
		
		<img src="https://www.fillmurray.com/225/225" alt="bill murray" id="imgChange" onclick="changeImage();">


	</body>
</html>
