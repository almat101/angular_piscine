console.log('Shop script loaded');


interface Item {
	title: string;
	image: string;
	description: string;
	category: string;
	price: number;
}


fetch('store.json')
	.then(response => response.json())
	.then((data: Item[]) => {
		// Loop through each item in the JSON data
		data.forEach(item => {
			// Create a new card element
			const card = document.createElement('div');
			card.classList.add('card');
			card.classList.add('product');

			// Create and fill elements for the card
			const title = document.createElement('h2');
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
			const cardContainer = document.getElementById('cardContainer');
			if (cardContainer) {
				cardContainer.appendChild(card);
			}
		});

		//Attach event listener to each product
		document.querySelectorAll('.product').forEach(product => {
			product.addEventListener('click', () => showAddToCartModal());
		});
	})
	.catch(error => console.error('Error fetching data:', error));

function showAddToCartModal() {
    console.log('Showing modal');
    // Show the modal
    let modal = document.getElementById('myModal');
    if (modal !== null) {
        modal.style.display = "block";
    }
}

// Get the modal
let modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
let span = document.getElementsByClassName('close')[0] as HTMLElement;

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    if (modal !== null) {
        modal.style.display = "none";
    }
}

// Get the "Add to Cart" button
let addToCartButton = document.getElementById('addToCartButton') as HTMLElement;
let cartNumber = 0;
// When the user clicks on the "Add to Cart" button, add the product to the cart
addToCartButton.onclick = function() {
    console.log('Adding to cart');
    cartNumber++;
    let cartElement = document.querySelector('.cart-number');
    if (cartElement!==null)
        cartElement.textContent = cartNumber.toString();
    // Hide the modal
    if (modal !== null) {
        modal.style.display = "none";
    }
}
