// script/index.js
const books = [
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    image:
      "https://m.media-amazon.com/images/I/913sMwNHsBL._AC_UF894,1000_QL80_.jpg",
    rating: 9,
    comment: "A classic fantasy masterpiece.",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4lmgfjRuedwlUe5x32skQqpkZmLt7BIbSfw&s",
    rating: 8,
    comment: "A witty and romantic novel.",
  },
  {
    title: "1984",
    author: "George Orwell",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDwgT-8cUXDndm0wKtyRJONjXdte9oO6hp7g&s",
    rating: 7,
    comment: "A dystopian cautionary tale.",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    image:"https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
    rating: 9,
    comment: "A powerful story about justice and prejudice.",
  },
  
];

function displayBooks() {
  const bookMenu = document.getElementById("book-menu");
  bookMenu.innerHTML = "";
  books.forEach((book) => {
    const img = document.createElement("img");
    img.src = book.image;
    img.alt = book.title;
    img.addEventListener("click", () => handleClick(book));
    bookMenu.appendChild(img);
  });
}

function handleClick(book) {
  document.getElementById("detail-image").src = book.image;
  document.getElementById("detail-title").textContent = book.title;
  document.getElementById("detail-author").textContent = book.author;
  document.getElementById(
    "detail-rating"
  ).textContent = `Rating: ${book.rating}`;
  document.getElementById("detail-comment").textContent = book.comment;
}

function addSubmitListener() {
  const form = document.getElementById("new-book-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const newBook = {
      title: document.getElementById("new-title").value,
      author: document.getElementById("new-author").value,
      image: document.getElementById("new-image").value,
      rating: document.getElementById("new-rating").value,
      comment: document.getElementById("new-comment").value,
    };
    books.push(newBook);
    displayBooks();
    form.reset();
  });
}

function main() {
  displayBooks();
  addSubmitListener();
  if (books.length > 0) {
    handleClick(books[0]);
  }
}

document.addEventListener("DOMContentLoaded", main);
