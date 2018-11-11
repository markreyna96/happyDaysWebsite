var subMenuState = [false,false,false];

function inflatSubClick(something){
	var blockArray = ["moonjumpBlock","waterslideBlock","interactivesBlock"];
	console.log(subMenuState);
	var gain = Number(something);
	subMenuState[something] = !subMenuState[something];
	console.log(subMenuState);

	if (subMenuState[something]){
		document.getElementById(blockArray[something]).style.display = "none";
	}
	else{
		document.getElementById(blockArray[something]).style.display = "block"; 
	}
	subMenuState
}