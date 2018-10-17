
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



	document.getElementById("usergrid").addEventListener("click", openUsers);
	document.getElementById("kryss3").addEventListener("click", closeUsers);

	function openUsers(){
		document.getElementById("usersinside").style.visibility="visible";
		openusersdiv();
		usersFirst();
	}


	function closeUsers(){
		closeMathias();
		closeTor();
		closeBrage();
		closeJonas();
		closeJorgen();
		closeusersdiv();
		document.getElementById("usersinside").style.visibility="collapse";
	}

  	document.getElementById("aboutgrid").addEventListener("click", openAbout);
  	document.getElementById("kryss4").addEventListener("click", closeAbout);

  	function openAbout(){
		document.getElementById("aboutus").style.visibility="visible";
		document.getElementById("gruppeinfo").style.visibility="visible";
		aboutFirst();
	}

  	function closeAbout(){
		document.getElementById("aboutus").style.visibility="collapse";
		document.getElementById("gruppeinfo").style.visibility="collapse";
		document.getElementById("aboutusalt").style.visibility="collapse";
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
      			width = width + 0.2; 
     			elem.style.width = width + '%'; 
     			var num = Math.round(width * 100)/100;
     			elem.innerHTML = num  + '%';
    		}
  							}
					}
	
	move();
	

	document.getElementById("contactgrid").addEventListener("click", sendMail)

	document.getElementById("githubgrid").addEventListener("click", openGit);


function openGit() {
	var url = "https://github.com/gitBacit/presentation";
	var win = window.open(url, '_blank');
	  win.focus();
}

function sendMail(){
	window.open('mailto:gitbacit@gmail.com');
}

document.getElementById("mathiasbilde").addEventListener("click", openMathias);
document.getElementById("mathiasprofilbilde").addEventListener("click", closeMathias);

function openMathias(){
	document.getElementById("mathiasinfo").style.visibility="visible";	
	closeusersdiv();
}

function closeMathias(){
	document.getElementById("mathiasinfo").style.visibility="collapse";
	openusersdiv();
}



document.getElementById("torbilde").addEventListener("click", openTor);
document.getElementById("torprofilbilde").addEventListener("click", closeTor);

function openTor(){
	document.getElementById("torinfo").style.visibility="visible";	
	closeusersdiv();
}

function closeTor(){
	document.getElementById("torinfo").style.visibility="collapse";
	openusersdiv();
}


document.getElementById("bragebilde").addEventListener("click", openBrage);
document.getElementById("brageprofilbilde").addEventListener("click", closeBrage);

function openBrage(){
	document.getElementById("brageinfo").style.visibility="visible";	
	closeusersdiv();
}

function closeBrage(){
	document.getElementById("brageinfo").style.visibility="collapse";
	openusersdiv();
}


document.getElementById("jonasbilde").addEventListener("click", openJonas);
document.getElementById("jonasprofilbilde").addEventListener("click", closeJonas);

function openJonas(){
	document.getElementById("jonasinfo").style.visibility="visible";	
	closeusersdiv();
}

function closeJonas(){
	document.getElementById("jonasinfo").style.visibility="collapse";
	openusersdiv();
}

document.getElementById("jorgenbilde").addEventListener("click", openJorgen);
document.getElementById("jorgenprofilbilde").addEventListener("click", closeJorgen);

function openJorgen(){
	document.getElementById("jorgeninfo").style.visibility="visible";	
	closeusersdiv();
}

function closeJorgen(){
	document.getElementById("jorgeninfo").style.visibility="collapse";
	openusersdiv();
}

function usersFirst(){
	document.getElementById("usersinside").style.zIndex="1";
	document.getElementById("aboutus").style.zIndex="0";
}

function aboutFirst(){
	document.getElementById("aboutus").style.zIndex="1";
	document.getElementById("usersinside").style.zIndex="0";
}

document.getElementById("gruppebilde").addEventListener("click", openGroup);
document.getElementById("gruppebilde2").addEventListener("click", closeGroup);

function openGroup(){
	document.getElementById("aboutusalt").style.visibility="visible";
	document.getElementById("gruppeinfo").style.visibility="collapse";
}

function closeGroup(){
	document.getElementById("gruppeinfo").style.visibility="visible";
	document.getElementById("aboutusalt").style.visibility="collapse";
}

function openusersdiv(){
	document.getElementById("usersinsidediv").style.visibility="visible";
}

function closeusersdiv(){
	document.getElementById("usersinsidediv").style.visibility="collapse";
}


