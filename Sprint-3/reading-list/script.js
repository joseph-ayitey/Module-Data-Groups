// for the tests, do not modify this array of books
const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];

function readingList(books) {
  const bookList = document.getElementById("reading-list");
  bookList.innerHTML = "";

  books.forEach((book) => {
    const li = document.createElement("li");
    li.style.backgroundColor = book.alreadyRead ? "green" : "red";

    const img = document.createElement("img");
    img.src = book.bookCoverImage;

    const text = document.createElement("p");
    text.textContent = `${book.title} by ${book.author}`;

    li.appendChild(img);
    li.appendChild(text);

    bookList.appendChild(li);
  });
}


readingList(books);