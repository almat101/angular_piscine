console.log('Shop script loaded');
fetch('store.json')
    .then(function (response) { return response.json(); })
    .then(function (data) {
    // Loop through each item in the JSON data
    data.forEach(function (item) {
        // Create a new card element
        var card = document.createElement('div');
        card.classList.add('card');
        card.classList.add('product');
        // Create and fill elements for the card
        var title = document.createElement('h1');
        title.textContent = item.title;
        card.appendChild(title);
        var table = document.createElement('table');
        table.className = 'details';
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        var image = document.createElement('img');
        image.src = item.image;
        image.alt = item.title;
        td.appendChild(image);
        var description = document.createElement('p');
        description.textContent = "Description: ".concat(item.description);
        td.appendChild(description);
        var category = document.createElement('p');
        category.textContent = "Category: ".concat(item.category);
        td.appendChild(category);
        var price = document.createElement('p');
        price.textContent = "Price: $".concat(item.price);
        price.className = 'price';
        td.appendChild(price);
        tr.appendChild(td);
        table.appendChild(tr);
        card.appendChild(table);
        // Append the card to the card container
        var cardContainer = document.getElementById('cardContainer');
        if (cardContainer) {
            cardContainer.appendChild(card);
        }
    });
    //Attach event listener to each product
    document.querySelectorAll('.product').forEach(function (product) {
        product.addEventListener('click', function () { return showAddToCartModal(); });
    });
})
    .catch(function (error) { return console.error('Error fetching data:', error); });
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
// // Attach the showAddToCartModal function to the click event of each product
// document.querySelectorAll('.product').forEach(product => {
//     product.addEventListener('click', showAddToCartModal);
// });
