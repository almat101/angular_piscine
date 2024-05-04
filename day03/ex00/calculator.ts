function calculator(): void {
	const form = document.querySelector('form') as HTMLFormElement;
	const input1 = document.getElementById('input1') as HTMLInputElement;
	const input2 = document.getElementById('input2') as HTMLInputElement;
	const select = document.getElementById('select1') as HTMLSelectElement;
	const resultInput = document.getElementById('result') as HTMLInputElement;

	class RandomNumberGenerator {
		generateRandomNumber(min: number, max: number): number {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
	}
	const rng = new RandomNumberGenerator();

	form.addEventListener('submit', function(event: Event) {
		event.preventDefault(); // Prevent the default form submission

	// Get the values from the input fields
	let value1 = parseFloat(input1.value);
	if (isNaN(value1)) {
		if (input1.value === "") {
			value1 = rng.generateRandomNumber(0, 100); // Default value if no input is provided
			console.log("value1 is " + value1 );
		} else {
			alert("*sympathetic beep* Please enter a valid number for value1.");
			return;
		}
	} else if (value1 < 0) {
		alert("*sympathetic beep* Please enter a valid number for value1.");
		return;
	}

	let value2 = parseFloat(input2.value);
	if (isNaN(value2)) {
		if (input2.value === "") {
			value2 = rng.generateRandomNumber(0, 100); // Default value if no input is provided
			console.log("value2 is " + value2 );
		} else {
			alert("*sympathetic beep* Please enter a valid number for value2.");
			return;
		}
	} else if (value2 < 0) {
		alert("*sympathetic beep* Please enter a valid number for value2.");
		return;
	}
	const operation = select.value;

	// Perform the calculation based on the selected operation
	let result: number;
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
				const iframeContainer = document.getElementById('iframeId');
				if (iframeContainer) {
					iframeContainer.appendChild(iframe);
				} else {
					console.error('Element with id "iframeId" not found');
				}

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
		resultInput.value = result.toString();
		console.log(result);
	}
});
}
document.addEventListener('DOMContentLoaded', calculator);
