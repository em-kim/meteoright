
var meteorites = [{"fall":"Fell","geolocation":{"type":"Point","coordinates":[6.08333,50.775]},"id":"1","mass":"21","name":"Aachen","nametype":"Valid","recclass":"L5","reclat":"50.775000","reclong":"6.083330","year":"1880-01-01T00:00:00.000"}
,{"fall":"Fell","geolocation":{"type":"Point","coordinates":[10.23333,56.18333]},"id":"2","mass":"720","name":"Aarhus","nametype":"Valid","recclass":"H6","reclat":"56.183330","reclong":"10.233330","year":"1951-01-01T00:00:00.000"}
,{"fall":"Fell","geolocation":{"type":"Point","coordinates":[-113,54.21667]},"id":"6","mass":"107000","name":"Abee","nametype":"Valid","recclass":"EH4","reclat":"54.216670","reclong":"-113.000000","year":"1952-01-01T00:00:00.000"}
,{"fall":"Fell","geolocation":{"type":"Point","coordinates":[-99.9,16.88333]},"id":"10","mass":"1914","name":"Acapulco","nametype":"Valid","recclass":"Acapulcoite","reclat":"16.883330","reclong":"-99.900000","year":"1976-01-01T00:00:00.000"}
,{"fall":"Fell","geolocation":{"type":"Point","coordinates":[-64.95,-33.16667]},"id":"370","mass":"780","name":"Achiras","nametype":"Valid","recclass":"L6","reclat":"-33.166670","reclong":"-64.950000","year":"1902-01-01T00:00:00.000"}
,{"fall":"Fell","geolocation":{"type":"Point","coordinates":[71.8,32.1]},"id":"379","mass":"4239","name":"Adhi Kot","nametype":"Valid","recclass":"EH4","reclat":"32.100000","reclong":"71.800000","year":"1919-01-01T00:00:00.000"}
,{"fall":"Fell","geolocation":{"type":"Point","coordinates":[95.16667,44.83333]},"id":"390","mass":"910","name":"Adzhi-Bogdo (stone)","nametype":"Valid","recclass":"LL3-6","reclat":"44.833330","reclong":"95.166670","year":"1949-01-01T00:00:00.000"}
,{"fall":"Fell","geolocation":{"type":"Point","coordinates":[0.61667,44.21667]},"id":"392","mass":"30000","name":"Agen","nametype":"Valid","recclass":"H5","reclat":"44.216670","reclong":"0.616670","year":"1814-01-01T00:00:00.000"}
,{"fall":"Fell","geolocation":{"type":"Point","coordinates":[-65.23333,-31.6]},"id":"398","mass":"1620","name":"Aguada","nametype":"Valid","recclass":"L6","reclat":"-31.600000","reclong":"-65.233330","year":"1930-01-01T00:00:00.000"}
,{"fall":"Fell","geolocation":{"type":"Point","coordinates":[-64.55,-30.86667]},"id":"417","mass":"1440","name":"Aguila Blanca","nametype":"Valid","recclass":"L","reclat":"-30.866670","reclong":"-64.550000","year":"1920-01-01T00:00:00.000"}
,{"fall":"Fell","geolocation":{"type":"Point","coordinates":[-9.57028,16.39806]},"id":"423","mass":"1000","name":"Aioun el Atrouss","nametype":"Valid","recclass":"Diogenite-pm","reclat":"16.398060","reclong":"-9.570280","year":"1974-01-01T00:00:00.000"}
,{"fall":"Fell","geolocation":{"type":"Point","coordinates":[8.38333,19.08333]},"id":"424","mass":"24000","name":"Aïr","nametype":"Valid","recclass":"L6","reclat":"19.083330","reclong":"8.383330","year":"1925-01-01T00:00:00.000"}
,{"fall":"Fell","geolocation":{"type":"Point","coordinates":[2.33333,50.66667]},"id":"425","name":"Aire-sur-la-Lys","nametype":"Valid","recclass":"Unknown","reclat":"50.666670","reclong":"2.333330","year":"1769-01-01T00:00:00.000"}
,{"fall":"Fell","geolocation":{"type":"Point","coordinates":[35.05,29.51667]},"id":"426","mass":"779","name":"Akaba","nametype":"Valid","recclass":"L6","reclat":"29.516670","reclong":"35.050000","year":"1949-01-01T00:00:00.000"}
,{"fall":"Fell","geolocation":{"type":"Point","coordinates":[77.95,29.71667]},"id":"427","mass":"1800","name":"Akbarpur","nametype":"Valid","recclass":"H4","reclat":"29.716670","reclong":"77.950000","year":"1838-01-01T00:00:00.000"}
,{"fall":"Fell","geolocation":{"type":"Point","coordinates":[8.43333,8.91667]},"id":"432","mass":"3000","name":"Akwanga","nametype":"Valid","recclass":"H","reclat":"8.916670","reclong":"8.433330","year":"1959-01-01T00:00:00.000"}
,{"fall":"Fell","geolocation":{"type":"Point","coordinates":[42.81667,39.91667]},"id":"433","mass":"50000","name":"Akyumak","nametype":"Valid","recclass":"Iron, IVA","reclat":"39.916670","reclong":"42.816670","year":"1981-01-01T00:00:00.000"}
,{"fall":"Fell","geolocation":{"type":"Point","coordinates":[39.51667,24.41667]},"id":"446","mass":"160","name":"Al Rais","nametype":"Valid","recclass":"CR2-an","reclat":"24.416670","reclong":"39.516670","year":"1957-01-01T00:00:00.000"}
,{"fall":"Fell","geolocation":{"type":"Point","coordinates":[28.96,13.66033]},"id":"447","mass":"700","name":"Al Zarnkh","nametype":"Valid","recclass":"LL5","reclat":"13.660330","reclong":"28.960000","year":"2001-01-01T00:00:00.000"}]

var fetchMeteorites = function(){
	let a = [];
	meteorites.forEach(m=>{
    		a.push(m);
  });
  	return a;
}

var nameElement = document.getElementById('barf');

fetchMeteorites().forEach(m=>{
	nameElement.innerText += m.name;
});