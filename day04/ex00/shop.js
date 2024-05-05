var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('Shop script loaded');
// Define classes to represent product data structure
var Product = /** @class */ (function () {
    function Product(title, image) {
        this.title = title;
        this.image = image;
    }
    return Product;
}());
var Category = /** @class */ (function (_super) {
    __extends(Category, _super);
    function Category(title, image, description, category, price) {
        var _this = _super.call(this, title, image) || this;
        _this.description = description;
        _this.category = category;
        _this.price = price;
        return _this;
    }
    return Category;
}(Product));
// Fetch data from API endpoint
fetch('https://fakestoreapi.com/products')
    .then(function (response) { return response.json(); })
    .then(function (data) {
    // Loop through each item in the JSON data
    data.forEach(function (item) {
        // Create instances of Product and Category classes
        var product = new Product(item.title, item.image);
        var category = new Category(item.title, item.image, item.description, item.category, item.price);
        // Render product information in card and list versions
        renderCard(category);
        renderList(category);
    });
    //Attach event listener to each product
    document.querySelectorAll('.product').forEach(function (product) {
        product.addEventListener('click', function () { return showAddToCartModal(); });
    });
})
    .catch(function (error) { return console.error('Error fetching data:', error); });
// Render product information in card version
function renderCard(category) {
    // Create a new card element
    var card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('product');
    // Create and fill elements for the card
    var title = document.createElement('h2');
    title.textContent = category.title;
    card.appendChild(title);
    var image = document.createElement('img');
    image.src = category.image;
    image.alt = category.title;
    card.appendChild(image);
    var description = document.createElement('p');
    description.textContent = "Description: ".concat(category.description);
    card.appendChild(description);
    var categoryElement = document.createElement('p');
    categoryElement.textContent = "Category: ".concat(category.category);
    card.appendChild(categoryElement);
    var price = document.createElement('p');
    price.textContent = "Price: $".concat(category.price);
    price.className = 'price';
    card.appendChild(price);
    // Append the card to the card container
    var cardContainer = document.getElementById('cardContainer');
    if (cardContainer) {
        cardContainer.appendChild(card);
    }
}
// Render product information in list version
function renderList(category) {
    // Create a new list item element
    var listItem = document.createElement('li');
    listItem.classList.add('list-item');
    listItem.classList.add('product');
    // Create and fill elements for the list item
    var title = document.createElement('h2');
    title.textContent = category.title;
    listItem.appendChild(title);
    var description = document.createElement('p');
    description.textContent = "Description: ".concat(category.description);
    listItem.appendChild(description);
    var categoryElement = document.createElement('p');
    categoryElement.textContent = "Category: ".concat(category.category);
    listItem.appendChild(categoryElement);
    var price = document.createElement('p');
    price.textContent = "Price: $".concat(category.price);
    price.className = 'price';
    listItem.appendChild(price);
    // Append the list item to the list container
    var listContainer = document.getElementById('listContainer');
    if (listContainer) {
        listContainer.appendChild(listItem);
    }
}
function showAddToCartModal() {
    console.log('Showing modal');
    // Show the modal
    var modal = document.getElementById('myModal');
    if (modal !== null) {
        modal.style.display = "block";
    }
}
// Get the modal
var modal = document.getElementById('myModal');
// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    if (modal !== null) {
        modal.style.display = "none";
    }
};
// Get the "Add to Cart" button
var addToCartButton = document.getElementById('addToCartButton');
var cartNumber = 0;
// When the user clicks on the "Add to Cart" button, add the product to the cart
addToCartButton.onclick = function () {
    console.log('Adding to cart');
    cartNumber++;
    var cartElement = document.querySelector('.cart-number');
    if (cartElement !== null)
        cartElement.textContent = cartNumber.toString();
    // Hide the modal
    if (modal !== null) {
        modal.style.display = "none";
    }
};
