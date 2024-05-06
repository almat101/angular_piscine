function caluculator()
{
	const form = document.querySelector('form');
	const input1 = document.getElementById('input1');
	const input2 = document.getElementById('input2');
	const select = document.getElementById('select1');
	const resultInput = document.getElementById('result');

	form.addEventListener('submit', function(event) {
		event.preventDefault(); // Prevent the default form submission

		// Get the values from the input fields
		const value1 = parseFloat(input1.value);
		if (value1 < 0) {
			alert("*sympathetic beep* Please enter a valid number for value1.");
			return;
		}
		const value2 = parseFloat(input2.value);
		if (value2 < 0) {
			alert("*sympathetic beep* Please enter a valid number for value2.");
			return;
		}
		const operation = select.value;

		if (isNaN(value1) || isNaN(value2))
		{
			alert("*sympathetic beep* Please enter a valid number for the values.");
			return ;

		}

		// Perform the calculation based on the selected operation
		let result;
		switch (operation) {
			case 'addition':
				result = value1 + value2;
				break;
			case 'subtraction':
				result = value1 - value2;
				break;
			case 'multiplication':
				result = value1 * value2;
				break;
			case 'division':
				if (value2 === 0) {
					let iframe = document.createElement('iframe');
					iframe.src = 'https://www.youtube.com/embed/T2U07KFqmew?autoplay=1';
					iframe.style.width = '800px';
					iframe.style.height = '600px';
					document.getElementById('iframeId').appendChild(iframe);

					setInterval(function() {
						alert("Please,use me...");
					}, 30000);
					return;
				}
				else
					result = value1 / value2;
				break;
			default:
				result = NaN;
		}

		if (isNaN(result)) {
			resultInput.value = 'Invalid operation';
		} else {
			resultInput.value = result;
			console.log(result);
		}
	});
}

document.addEventListener('DOMContentLoaded', caluculator);

