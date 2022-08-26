let form = document.querySelector('form');
let input1 = document.querySelector('[name="num1"]');
let input2 = document.querySelector('[name="num2"]');
let input3 = document.querySelector('[name="num3"]');
let div    = document.querySelector('div');

form.addEventListener('submit', function(event) {
	let searchParams = new URLSearchParams();
	
	searchParams.set('num1', input1.value);
	searchParams.set('num2', input2.value);
    searchParams.set('num3', input3.value);
	
	let path = '/handler/?' + searchParams.toString();
	
	fetch(path).then(
		response => {
			return response.text();
		}
	).then(
		text => {
			div.innerHTML = text;
		}
	);
	
	event.preventDefault(); // отменим отправку формы
});