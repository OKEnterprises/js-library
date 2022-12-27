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

function newBookForm() {
    let formDiv = document.querySelector('#form-div');

    let title = document.createElement('input');
    title.type = "text";
    title.id = "title";
    title.name = "title";

    let titleLabel = document.createElement('lable');
    titleLabel.for = "title";
    titleLabel.textContent = "Title:";

    let author = document.createElement('input');
    author.type = "text";
    author.id = "author";
    author.name = "author"

    let authorLabel = document.createElement('label');
    authorLabel.for = "author";
    authorLabel.textContent = "Author:";

    let pages = document.createElement('input');
    pages.type = "number";
    pages.id = "pages";
    pages.name = "pages";

    let pagesLabel = document.createElement('label');
    pagesLabel.for = "pages";
    pagesLabel.textContent = "Pages:";

    let read = document.createElement('input');
    read.type = "checkbox";
    read.id = "read";
    read.name = "read";

    let readLabel = document.createElement('input');
    readLabel.for = "read";
    readLabel.textContent = "Read:";

    formDiv.appendChild(titleLabel);
    formDiv.appendChild(title);
    formDiv.appendChild(authorLabel);
    formDiv.appendChild(author);
    formDiv.appendChild(pagesLabel);
    formDiv.appendChild(pages);
    formDiv.appendChild(readLabel);
    formDiv.appendChild(read);
}