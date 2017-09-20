var queryUrlString = "https://data.nasa.gov/resource/y77d-th95.json";

 fetch(queryUrlString).then(response => {

	response.json().then(meteoriteData => {
		
		var name = document.getElementById('barf');

		for (let i = 0; i < 10; i++){
			
			name.innerText += meteoriteData[i].name + "\n";
		}
	});
});
