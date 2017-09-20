var queryUrlString = "https://data.nasa.gov/resource/y77d-th95.json";

 fetch(queryUrlString).then(response => {

	response.json().then(meteoriteData => {
		
		var answer = document.getElementById('barf');

		for (let i = 0; i < 10; i++){
			
			answer.innerText += meteoriteData[i].name + "\n";
		}
	});
});
