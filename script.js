let myLibrary = []

function Book(title, author, numOfPages, read) {
	this.title = title;
	this.author = author;
	this.numOfPages = numOfPages;
	this.read = read;

	this.info = () => {
		return `${title} by ${author}, ${numOfPages} pages`;
	}
}

function addBookToLibrary(title, author, numOfPages, read) {
	const book = new Book(title, author, numOfPages, read)
	myLibrary.push(book);

	// myLibrary.forEach(book => {
	// 	console.log(book);
	// })

	console.log(book);
	console.log('Added to library');
	render();
	console.log('rendered');
	
	// myLibrary[myLibrary.length - 1]
}

const table = document.querySelector('table');

function render() {
	book = 	myLibrary[myLibrary.length - 1]
	table.innerHTML += `<tr class="bookEntry"><td>${book.title}</td><td>${book.author}</td><td>${book.numOfPages}</td><td>${book.read}</td><td><input id="select" type="checkbox" name="select"></td></tr>`
}

addBookToLibrary('Wonder', 'RJ Palacio', '304', 'Read');
addBookToLibrary('Diary of a Wimpy Kid', 'Jeff Kinney', '254', 'Not Read');
addBookToLibrary('Lord of the Rings', 'JRR Tolkien', '304', 'Read');
// render();
// console.log('rendered');
// console.log(myLibrary[0].info());

const addBook = document.querySelector('#addBook');
const removeBook = document.querySelector('#removeBook');
const newBookForm = document.querySelector('form');
const submitNewBook = document.querySelector('#submit')
const closeFormButton = document.querySelector('#close')

function readStatus() {
	if(newBookForm[4].checked)
		return 'Read';
	else
		return 'Not Read';
}

addBook.addEventListener('click', () => {
	newBookForm.style.display = 'block';
});

removeBook.addEventListener('click', () => {
	let updatedTable = table.querySelector('tr').innerHTML;
	entry = table.querySelectorAll('.bookEntry');
	
	
	entry.forEach((element) => {
		console.log(element.innerHTML);
		
		selectBox = element.querySelector('#select')
		console.log(selectBox.checked);

		if(!selectBox.checked) {
			console.log(selectBox);
			updatedTable += element.outerHTML;
		}
	});

	console.log(updatedTable);
	
	table.innerHTML = updatedTable;
});

submitNewBook.addEventListener('click', () => {
	// console.log(newBookForm[4].value);
	
	// console.log(newBookForm[3].checked);
	
	addBookToLibrary(newBookForm[1].value, newBookForm[2].value, newBookForm[3].value, readStatus());
});

closeFormButton.addEventListener('click', () => {
	newBookForm.style.display = 'none';
})
