
function inflatSubClick(something){
	//an array containing each subtab's id
	var blockArray = ["moonjumpBlock","waterslideBlock","interactivesBlock"];
	console.log(something);
	//for loop that sets the display setting of all elements to "none"
	var mjBlock = document.getElementsByClassName("moonjumpBlock");
	console.log(mjBlock);
	for(i=0;i<mjBlock.length;i++){
		// console.log(i);
		// console.log(blockArray[i]);
		mjBlock[i].style.display = "none";
	}

	var wsBlock = document.getElementsByClassName("waterslideBlock");
	console.log(wsBlock);
	for(i=0;i<wsBlock.length;i++){
		// console.log(i);
		// console.log(blockArray[i]);
		wsBlock[i].style.display = "none";
	}

	var iaBlock = document.getElementsByClassName("interactivesBlock");
	console.log(iaBlock);
	for(i=0;i<iaBlock.length;i++){
		// console.log(i);
		// console.log(blockArray[i]);
		iaBlock[i].style.display = "none";
	}

	//the element selected has its display setting changed to "block"
	var makeTrue = document.getElementsByClassName(blockArray[something]);
	for(i=0;i<makeTrue.length;i++){
		// console.log(i);
		// console.log(blockArray[i]);
		makeTrue[i].style.display = "block";
	}
}