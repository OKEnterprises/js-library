let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function renderLibrary(library) {
    let table = document.querySelector('#lib-tab');
    library.forEach(book => {
        let row = document.createElement('tr');

        let title = document.createElement('td');
        title.textContent = book.title;
        row.appendChild(title);

        let author = document.createElement('td');
        author.textContent = book.author;
        row.appendChild(author);

        let pages = document.createElement('td');
        pages.textContent = book.pages;
        row.appendChild(pages);

        let read = document.createElement('td');
        read.textContent = book.read;
        row.appendChild(pages);

        table.appendChild(row);
    });
}