function changeName() {
	let nameElement = document.querySelector('.name');
	nameElement.textContent = 'Name: Giancarlo Magalli';
}

function changeImage() {
	let imageElement = document.getElementById('profileImg');
	imageElement.src = 'https://www.caffeinamagazine.it/wp-content/uploads/2015/09/magalli-quad.jpg';
}
let cardCounter = 1;
function createCard() {
    let newCard = document.createElement('div');
    newCard.className = 'card';

    let h1 = document.createElement('h1');
    h1.textContent = `User Card ${cardCounter}`;
    newCard.appendChild(h1);

    let img = document.createElement('img');
    img.src = "https://upload.wikimedia.org/wikipedia/en/5/56/PrisonMike.png";
    img.alt = "Profile Picture";
    newCard.appendChild(img);

    let details = document.createElement('div');
    details.className = 'details';

    let pName = document.createElement('p');
    pName.className = 'name';
    pName.textContent = 'Name: Prison Mike';
    details.appendChild(pName);

    let pDescription = document.createElement('p');
    pDescription.className = 'description';
    pDescription.textContent = 'Description: Web Developer';
    details.appendChild(pDescription);

    let aContact = document.createElement('a');
    aContact.href = "https://pointerpointer.com/";
    aContact.className = 'contact-btn';
    aContact.textContent = 'Contact';
    details.appendChild(aContact);

    newCard.appendChild(details);

    let cardContainer = document.querySelector('.card-container');
    cardContainer.appendChild(newCard);
    cardCounter++;
}
