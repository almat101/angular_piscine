console.log('Shop script loaded');
fetch('store.json')
.then(response => response.json())
.then(data => {
	// Loop through each item in the JSON data
	data.forEach(item => {
		// Create a new card element
		const card = document.createElement('div');
		card.classList.add('card');

		// Create and fill elements for the card
		const title = document.createElement('h1');
		title.textContent = item.title;
		card.appendChild(title);

		const table = document.createElement('table');
		table.className = 'details';

		const tr = document.createElement('tr');
		const td = document.createElement('td');

		const image = document.createElement('img');
		image.src = item.image;
		image.alt = item.title;
		td.appendChild(image);

		const description = document.createElement('p');
		description.textContent = `Description: ${item.description}`;
		td.appendChild(description);

		const category = document.createElement('p');
		category.textContent = `Category: ${item.category}`;
		td.appendChild(category);

		const price = document.createElement('p');
		price.textContent = `Price: $${item.price}`;
		price.className = 'price';
		td.appendChild(price);

		tr.appendChild(td);
		table.appendChild(tr);
		card.appendChild(table);
		// Append the card to the card container
		document.getElementById('cardContainer').appendChild(card);
	});
})
.catch(error => console.error('Error fetching data:', error));
