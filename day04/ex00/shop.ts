console.log('Shop script loaded');

// Define classes to represent product data structure
class Product {
	title: string;
	image: string;

	constructor(title: string, image: string) {
		this.title = title;
		this.image = image;
	}
}

class Category extends Product {
	description: string;
	category: string;
	price: number;

	constructor(title: string, image: string, description: string, category: string, price: number) {
		super(title, image);
		this.description = description;
		this.category = category;
		this.price = price;
	}
}

// Fetch data from API endpoint
fetch('https://fakestoreapi.com/products')
	.then(response => response.json())
	.then((data: any[]) => {
		// Loop through each item in the JSON data
		data.forEach(item => {
			// Create instances of Product and Category classes
			const product = new Product(item.title, item.image);
			const category = new Category(item.title, item.image, item.description, item.category, item.price);

			// Render product information in card and list versions
			renderCard(category);
			renderList(category);
		});

		//Attach event listener to each product
		document.querySelectorAll('.product').forEach(product => {
			product.addEventListener('click', () => showAddToCartModal());
		});
	})
	.catch(error => console.error('Error fetching data:', error));

// Render product information in card version
function renderCard(category: Category): void {
	// Create a new card element
	const card = document.createElement('div');
	card.classList.add('card');
	card.classList.add('product');

	// Create and fill elements for the card
	const title = document.createElement('h2');
	title.textContent = category.title;
	card.appendChild(title);

	const image = document.createElement('img');
	image.src = category.image;
	image.alt = category.title;
	card.appendChild(image);

	const description = document.createElement('p');
	description.textContent = `Description: ${category.description}`;
	card.appendChild(description);

	const categoryElement = document.createElement('p');
	categoryElement.textContent = `Category: ${category.category}`;
	card.appendChild(categoryElement);

	const price = document.createElement('p');
	price.textContent = `Price: $${category.price}`;
	price.className = 'price';
	card.appendChild(price);

	// Append the card to the card container
	const cardContainer = document.getElementById('cardContainer') as HTMLDivElement;
	if (cardContainer) {
		cardContainer.appendChild(card);
	}
}

// Render product information in list version
function renderList(category: Category): void {
	// Create a new list item element
	const listItem = document.createElement('li');
	listItem.classList.add('list-item');
	listItem.classList.add('product');

	// Create and fill elements for the list item
	const title = document.createElement('h2');
	title.textContent = category.title;
	listItem.appendChild(title);

	const description = document.createElement('p');
	description.textContent = `Description: ${category.description}`;
	listItem.appendChild(description);

	const categoryElement = document.createElement('p');
	categoryElement.textContent = `Category: ${category.category}`;
	listItem.appendChild(categoryElement);

	const price = document.createElement('p');
	price.textContent = `Price: $${category.price}`;
	price.className = 'price';
	listItem.appendChild(price);

	// Append the list item to the list container
	const listContainer = document.getElementById('listContainer') as HTMLUListElement;
	if (listContainer) {
		listContainer.appendChild(listItem);
	}
}



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
