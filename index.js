let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  }
}

function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
  console.log(book);
}

function clearTable() {
  let table = document.querySelector('#lib-tab');
  let fstRow = table.firstChild;
  let sndRow = table.childNodes[1];
  table.replaceChildren(fstRow, sndRow);
}

function renderLibrary(library) {
  let table = document.querySelector("#lib-tab");

  library.forEach((book, index) => {
    let row = document.createElement("tr");
    row.dataset.index = index;

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
    let toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Toggle";
    toggleBtn.value = "Toggle";
    toggleBtn.addEventListener('click', () => {
        if (read.textContent === "Read") {
            read.textContent = "Unread";
        } else {
            read.textContent = "Read";
        }
        read.appendChild(toggleBtn);
    });
    read.appendChild(toggleBtn);
    row.appendChild(read);

    let delCell = document.createElement("td");

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener('click', () => {
        let index = row.dataset.index;
        myLibrary.splice(index, 1);
        clearTable();
        renderLibrary(myLibrary);
    });

    delCell.appendChild(deleteBtn);

    row.appendChild(delCell);

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
  title.minLength = 1;

  let titleLabel = document.createElement("lable");
  titleLabel.for = "title";
  titleLabel.textContent = "Title:";

  let author = document.createElement("input");
  author.type = "text";
  author.id = "author";
  author.name = "author";
  author.minLength = "1";

  let authorLabel = document.createElement("label");
  authorLabel.for = "author";
  authorLabel.textContent = "Author:";

  let pages = document.createElement("input");
  pages.type = "number";
  pages.id = "pages";
  pages.name = "pages";
  pages.min = "1";

  let pagesLabel = document.createElement("label");
  pagesLabel.for = "pages";
  pagesLabel.textContent = "Pages:";

  let radioDiv = document.createElement('div');
  radioDiv.classList.add('radio-div');

  let readRadio = document.createElement("input");
  readRadio.type = "radio";
  readRadio.id = "read";
  readRadio.name = "read";
  readRadio.value = "Read";

  let readLabel = document.createElement("label");
  readLabel.for = "read";
  readLabel.textContent = "Read";

  let unreadRadio = document.createElement("input");
  unreadRadio.type = "radio";
  unreadRadio.id = "unread";
  unreadRadio.name = "read";
  unreadRadio.value = "Unread";

  let unreadLabel = document.createElement('label');
  unreadLabel.for = "unread";
  unreadLabel.textContent = "Unread";

  radioDiv.appendChild(readRadio);
  radioDiv.appendChild(readLabel);
  radioDiv.appendChild(unreadRadio);
  radioDiv.appendChild(unreadLabel);

  let submit = document.createElement("input");
  submit.type = "submit";

  form.appendChild(titleLabel);
  form.appendChild(title);
  form.appendChild(authorLabel);
  form.appendChild(author);
  form.appendChild(pagesLabel);
  form.appendChild(pages);
  form.appendChild(radioDiv);
  form.appendChild(submit);

  formDiv.appendChild(form);

  submit.addEventListener("click", (event) => {
    console.log(form.elements.pages.value);
    addBookToLibrary(form.elements.title.value, form.elements.author.value, form.elements.pages.value, form.elements.read.value);
    clearForm();
    clearTable();
    renderLibrary(myLibrary);
    event.preventDefault();
  });
}

let newBook = document.querySelector("#new-book");
newBook.addEventListener("click", () => {
  newBookForm();
});
