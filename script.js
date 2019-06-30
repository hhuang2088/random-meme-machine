function getImage() {
	var xhr = new XMLHttpRequest();
	var randInt = Math.floor(Math.random() * 100);
	xhr.open('GET', 'https://api.imgflip.com/get_memes');
	xhr.send(null);
	xhr.onreadystatechange = function() {
		var DONE = 4;
		var OK = 200;
		if (xhr.readyState === DONE) {
			if (xhr.status === OK) {
				var response = xhr.response;
				image_dict = JSON.parse(response).data.memes;
				var imgLink = image_dict[randInt].url;
				document.getElementById("memeImage").src = imgLink;
			} else {
				console.log('Error:' + xhr.status);
			}
		}
	}
}

function getRandomColor() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://www.colr.org/json/color/random');
	xhr.send(null);
	xhr.onreadystatechange = function() {
		var DONE = 4;
		var OK = 200;
		if (xhr.readyState === DONE) {
			if (xhr.status === OK) {
				var response = xhr.responseText;
				var json = JSON.parse(response);
				var colorHex = '#' + json.colors[0].hex;
				document.body.style.background = colorHex;
			} else {
				console.log('Error:' + xhr.status);
			}
		}
	}
}

var button = document.getElementById('memeGenerator');
button.onclick = function() {
	getImage();
	getRandomColor();
}
