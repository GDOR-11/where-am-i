async function getCoordinates() {
	return (await new Promise((resolve) => navigator.geolocation.getCurrentPosition(resolve, resolve)));
}
async function calculateCoordinates() {
	calculateButton.innerHTML = 'calculating...';
	let coordinates = await getCoordinates();
	calculateButton.innerHTML = 'calculate';
	if(coordinates instanceof GeolocationPositionError) {
		alert('ERROR: ' + coordinates.message);
		return;
	}
	coordinates = coordinates.coords;
	latitudeText.innerHTML = Math.round(coordinates.latitude * 1e7) / 1e7;
	longitudeText.innerHTML = Math.round(coordinates.longitude * 1e7) / 1e7;
	precisionText.innerHTML = Math.round(coordinates.accuracy * 9e-6 * 1e7) / 1e7;
}

const calculateButton = document.getElementById('calculate');
const latitudeText = document.getElementById('latitude');
const longitudeText = document.getElementById('longitude');
const precisionText = document.getElementById('precision');

calculateButton.addEventListener('click', calculateCoordinates);