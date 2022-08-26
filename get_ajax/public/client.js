let div    = document.querySelector('div');
let button = document.querySelector('button');

button.addEventListener('click', function() {
	fetch('/handler/?num=3').then(
		response => {
			return response.text();
		}
	).then(
		text => {
			div.innerHTML = text;
		}
	);
});