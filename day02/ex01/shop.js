console.log('Shop script loaded');
fetch('store.json')
	.then(response => response.json())
	.then(data => {
		// Loop through each item in the JSON data
		data.forEach(item => {
			// Create a new card element
			const card = document.createElement('div');
			card.classList.add('card');

			// Fill the card with data from the JSON
			card.innerHTML = `
				<h1>${item.title}</h1>
				<h2>${item.id}</h2>
				<img src="${item.image}" alt="${item.title}">
				<p>Description: ${item.description}</p>
				<p>Category: ${item.category}</p>
				<p>Price: $${item.price}</p>
				<!-- You can add more details here as needed -->
			`;

			// Append the card to the card container
			document.getElementById('cardContainer').appendChild(card);
		});
	})
	.catch(error => console.error('Error fetching data:', error));
