var queryUrlString = "https://data.nasa.gov/resource/y77d-th95.json";

 fetch(queryUrlString).then(response => {

	response.json().then(meteoriteData => {
		
		var pizzaNose = document.getElementById('barf');

		for (let i = 0; i < 10; i++){
			
			pizzaNose.innerText += meteoriteData[i].name + "\n";
		}
	});
});
