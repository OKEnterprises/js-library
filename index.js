let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'unread'}`;
  }
}

function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function renderLibrary(library) {
  let table = document.querySelector("#lib-tab");

  library.forEach((book) => {
    let row = document.createElement("tr");

    let title = document.createElement("td");
    title.textContent = book.title;
    row.appendChild(title);

    let author = document.createElement("td");
    author.textContent = book.author;
    row.appendChild(author);

    let pages = document.createElement("td");
    pages.textContent = book.pages;
    row.appendChild(pages);

    let read = document.createElement("td");
    read.textContent = book.read;
    row.appendChild(pages);

    table.appendChild(row);
  });
}

function clearForm() {
  formDiv = document.querySelector("#add-form");
  formDiv.replaceChildren();
}

function newBookForm() {
  let formDiv = document.querySelector("#add-form");

  let form = document.createElement('form');
  form.classList.add("book-form");

  let title = document.createElement("input");
  title.type = "text";
  title.id = "title";
  title.name = "title";

  let titleLabel = document.createElement("lable");
  titleLabel.for = "title";
  titleLabel.textContent = "Title:";

  let author = document.createElement("input");
  author.type = "text";
  author.id = "author";
  author.name = "author";

  let authorLabel = document.createElement("label");
  authorLabel.for = "author";
  authorLabel.textContent = "Author:";

  let pages = document.createElement("input");
  pages.type = "number";
  pages.id = "pages";
  pages.name = "pages";

  let pagesLabel = document.createElement("label");
  pagesLabel.for = "pages";
  pagesLabel.textContent = "Pages:";

  let read = document.createElement("input");
  read.type = "checkbox";
  read.id = "read";
  read.name = "read";

  let readLabel = document.createElement("label");
  readLabel.for = "read";
  readLabel.textContent = "Read:";

  let submit = document.createElement("input");
  submit.type = "submit";

  form.appendChild(titleLabel);
  form.appendChild(title);
  form.appendChild(authorLabel);
  form.appendChild(author);
  form.appendChild(pagesLabel);
  form.appendChild(pages);
  form.appendChild(readLabel);
  form.appendChild(read);
  form.appendChild(submit);

  formDiv.appendChild(form);

  submit.addEventListener("click", (event) => {
    let readCheck = form.elements.read.value;
    let read;

    if (readCheck === "on") {
        read = "Y";
    } else {
        read = "N";
    }

    addBookToLibrary(form.elements.title.value, form.elements.author.value, form.elements.pages.value, read);
    clearForm();
    renderLibrary(myLibrary);
    event.preventDefault();
  });
}

let newBook = document.querySelector("#new-book");
newBook.addEventListener("click", () => {
  newBookForm();
});
