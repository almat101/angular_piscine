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

    const table = document.createElement('table');
	table.className = 'details';

	const tr = document.createElement('tr');
	const td = document.createElement('td');

    let img = document.createElement('img');
    img.src = "https://upload.wikimedia.org/wikipedia/en/5/56/PrisonMike.png";
    img.alt = "Profile Picture";
    td.appendChild(img);


    let pName = document.createElement('p');
    pName.className = 'name';
    pName.textContent = 'Name: Prison Mike';
  	td.appendChild(pName);

    let pDescription = document.createElement('p');
    pDescription.className = 'description';
    pDescription.textContent = 'Description: Web Developer';
    td.appendChild(pDescription);

    let aContact = document.createElement('a');
    aContact.href = "https://pointerpointer.com/";
    aContact.className = 'contact-btn';
    aContact.textContent = 'Contact';
    td.appendChild(aContact);

	tr.appendChild(td);
	table.appendChild(tr);
	newCard.appendChild(table);

    let cardContainer = document.querySelector('.card-container');
    cardContainer.appendChild(newCard);
    cardCounter++;
}
