// semafor 1

function semafor(){
	var boje = document.getElementsByClassName('boje');
	boje[0].style.background = 'red';
	boje[1].style.background = 'gray';
	boje[2].style.background = 'gray';

// funkcije
	function changetoYellow(){
		boje[1].style.background = 'yellow';
	}
	function changetoGreen(){
		boje[0].style.background = 'gray';
		boje[1].style.background = 'gray';
		boje[2].style.background = 'green';
	}
	function changetoYellow2(){
		boje[0].style.background = 'gray';
		boje[1].style.background = 'gray';
		boje[2].style.background = 'gray';
	}
	function changetoYellow3(){
		boje[0].style.background = 'gray';
		boje[1].style.background = 'gray';
		boje[2].style.background = 'green';
	}
	function changetoYellow4(){
		boje[0].style.background = 'gray';
		boje[1].style.background = 'yellow';
		boje[2].style.background = 'gray';
	}
	function changetoRed(){
		boje[0].style.background = 'red';
		boje[1].style.background = 'gray';
		boje[2].style.background = 'gray';
	}
// varijable
	var x = setTimeout(changetoYellow,13000);
	var y = setTimeout(changetoGreen,15000);
	var a = setTimeout(changetoYellow2,22000);
	var b = setTimeout(changetoYellow3,23000);
	var c = setTimeout(changetoYellow2,24000);
	var d = setTimeout(changetoYellow3,25000);
	var e = setTimeout(changetoYellow2,26000);
	var f = setTimeout(changetoYellow3,27000);
	var g = setTimeout(changetoYellow4,28000);
	var h = setTimeout(changetoRed,30000);
	var start = setInterval(semafor,32000);
}
semafor();

// semafor 2

function semafor2(){
	var boje2 = document.getElementsByClassName('boje2');
		boje2[0].style.background = 'gray';
		boje2[1].style.background = 'gray';
		boje2[2].style.background = 'green';

// funkcije
	function changetoYellow5(){
		boje2[0].style.background = 'gray';
		boje2[1].style.background = 'gray';
		boje2[2].style.background = 'gray';
	}
	function changetoYellow6(){
		boje2[0].style.background = 'gray';
		boje2[1].style.background = 'gray';
		boje2[2].style.background = 'green';
	}
	function changetoYellow7(){
		boje2[0].style.background = 'gray';
		boje2[1].style.background = 'yellow';
		boje2[2].style.background = 'gray';
	}
	function changetoRed2(){
		boje2[0].style.background = 'red';
		boje2[1].style.background = 'gray';
		boje2[2].style.background = 'gray';
	}
	function changetoYellow8(){
		boje2[0].style.background = 'red';
		boje2[1].style.background = 'yellow';
		boje2[2].style.background = 'gray';
	}
	function changetoGreen2(){
		boje2[0].style.background = 'gray';
		boje2[1].style.background = 'gray';
		boje2[2].style.background = 'green';
	}
	// varijable
	var i = setTimeout(changetoYellow5,5000);
	var j = setTimeout(changetoYellow6,6000);
	var k = setTimeout(changetoYellow5,7000);
	var l = setTimeout(changetoYellow6,8000);
	var m = setTimeout(changetoYellow5,9000);
	var n = setTimeout(changetoYellow6,10000);
	var o = setTimeout(changetoYellow7,11000);
	var p = setTimeout(changetoRed2,13000);
	var r = setTimeout(changetoYellow8,30000);
	var s = setTimeout(changetoGreen2,32000)
	var start = setInterval(semafor2,32000);
}
semafor2();
