	dragElement(document.getElementById("comp"));
	dragElement(document.getElementById("trash"));
	dragElement(document.getElementById("files"));
	dragElement(document.getElementById("panel"));
	dragElement(document.getElementById("documents"));
	dragElement(document.getElementById("about"));


function dragElement(elmnt){
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	if (document.getElementById(elmnt.id + "")) {
		document.getElementById(elmnt.id + "").onmousedown = dragMouseDown;
	} else {
		elmnt.onmousedown = dragMouseDown;
	}

	function dragMouseDown(e){
		e = e || window.event;
		e.preventDefault;

		pos3 = e.clientX;
		pos4 = e.clientY;

		document.onmouseup = closeDragElement;

		document.onmousemove = elementDrag;
	}

	function elementDrag(e){
		e = e || window.event;
		e.preventDefault;

		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;

		elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
		elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	}

	function closeDragElement(){
		document.onmouseup = null;
		document.onmousemove = null;
	}

	function startTime() {
    	var today = new Date();
    	var h = today.getHours();
    	var m = today.getMinutes();
    	var s = today.getSeconds();
    	m = checkTime(m);
    	s = checkTime(s);
    	document.getElementById("clock").innerHTML =
    	h + ":" + m + ":" + s;
    	var t = setTimeout(startTime, 500);
}
	function checkTime(i) {
    	if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    	return i;
}
	
	startTime();
	
	document.getElementById("volumebutton").addEventListener("click", openVolume);
	document.getElementById("kryss").addEventListener("click", closeVolume);
	document.getElementById("kryss2").addEventListener("click", closeVolume);

	function openVolume(){
		document.getElementById("panel").style.visibility="visible";	
	}

	function closeVolume(){
		document.getElementById("panel").style.visibility="collapse";
	}

	document.getElementById("files").addEventListener("dblclick", openDocument);
	document.getElementById("about").addEventListener("dblclick", openAbout);
	document.getElementById("kryss1").addEventListener("click", closeDocument);
	document.getElementById("kryss2").addEventListener("click", closeAbout);

	function openDocument(){
		document.getElementById("documents").style.visibility="visible";	
	}

	function openAbout(){
		document.getElementById("aboutus").style.visibility="visible";
	}

	function closeDocument(){
		document.getElementById("documents").style.visibility="collapse";
	}

	function closeAbout(){
		document.getElementById("aboutus").style.visibility="collapse";
	}

	document.getElementById("trash").addEventListener("dblclick", openBlue);

	function openBlue(){
		document.getElementById("bluescreen").style.visibility="visible";	
	}





}