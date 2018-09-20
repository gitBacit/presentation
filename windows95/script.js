	dragElement(document.getElementById("comp"));
	dragElement(document.getElementById("documents"));
	dragElement(document.getElementById("users"));
	dragElement(document.getElementById("trash"));
	dragElement(document.getElementById("panel"));
	dragElement(document.getElementById("compinside"));
	dragElement(document.getElementById("usersinside"));
	dragElement(document.getElementById("documentsinside"));
	dragElement(document.getElementById("aboutus"));


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

	function openVolume(){
		document.getElementById("panel").style.visibility="visible";	
	}

	function closeVolume(){
		document.getElementById("panel").style.visibility="collapse";
	}



	document.getElementById("documents").addEventListener("dblclick", openDocument);
	document.getElementById("do").addEventListener("dblclick", openDocument);
	document.getElementById("kryss2").addEventListener("click", closeDocument);

	function openDocument(){
		document.getElementById("documentsinside").style.visibility="visible";	
	}

	function closeDocument(){
		document.getElementById("documentsinside").style.visibility="collapse";
	}



	document.getElementById("comp").addEventListener("dblclick", openComp);
	document.getElementById("kryss1").addEventListener("click", closeComp);

	function openComp(){
		document.getElementById("compinside").style.visibility="visible";	
	}

	function closeComp(){
		document.getElementById("compinside").style.visibility="collapse";
	}

	document.getElementById("users").addEventListener("dblclick", openUsers);
	document.getElementById("us").addEventListener("dblclick", openUsers);
	document.getElementById("kryss3").addEventListener("click", closeUsers);

	function openUsers(){
		document.getElementById("usersinside").style.visibility="visible";	
	}

	function closeUsers(){
		document.getElementById("usersinside").style.visibility="collapse";
	}


  	document.getElementById("about").addEventListener("dblclick", openAbout);
  	document.getElementById("ab").addEventListener("dblclick", openAbout);
  	document.getElementById("kryss4").addEventListener("click", closeAbout);
  	
  	function openAbout(){
		document.getElementById("aboutus").style.visibility="visible";
	}
  
  	function closeAbout(){
		document.getElementById("aboutus").style.visibility="collapse";
	}


	document.getElementById("start").addEventListener("click", openBlue);

	function openBlue(){
		document.getElementById("bluescreen").style.visibility="visible";	
	}

	function move() {
  		var elem = document.getElementById("bar");   
  		var width = 0;
  		var id = setInterval(frame, 0);
  			function frame() {
    			if (width >= 100) {
      				clearInterval(id);
      				document.getElementById("load").style.visibility="collapse";	
    		} else {
      			width = width + 0.1; 
     			elem.style.width = width + '%'; 
     			var num = Math.round(width * 100)/100;
     			elem.innerHTML = num  + '%';
    		}
  							}
					}
	
	move();
	


	

}