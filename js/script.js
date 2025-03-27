  const books = [
    {
      name: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      image:" https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1650033243i/41733839.jpg",
      publisher: "Charles Scribner's Sons",
      description:"A novel about wealth, love, and the American Dream in the Jazz Age.",
    },
    {
      name: "To Kill a Mockingbird",
      author: "Harper Lee",
      image:"https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
      publisher: "J. B. Lippincott & Co.",
      description:"A story of racial injustice and childhood innocence in the American South.",
    },
    {
      name: "1984",
      author: "George Orwell",
      image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.goodreads.com%2Fbook%2Fshow%2F58015557&psig=AOvVaw3VYLY9Il9FR895PkFc_U2O&ust=1742986773983000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCOiE_fOJpYwDFQAAAAAdAAAAABAE",
      publisher: "Secker & Warburg",
      description: "A dystopian novel about totalitarianism and surveillance.",
    },
    {
      name: "Pride and Prejudice",
      author: "Jane Austen",
      image: "https://m.media-amazon.com/images/I/712P0p5cXIL._AC_UF1000,1000_QL80_.jpg",
      publisher: "T. Egerton",
      description: "A romantic novel about love, class, and society in 19th-century England.",
    },
  ];

  const bookList = document.getElementById("book-list");
  const detailView = document.getElementById("detail-view");
  const detailImage = document.getElementById("detail-image");
  const detailName = document.getElementById("detail-name");
  const detailAuthor = document.getElementById("detail-author");
  const detailPublisher = document.getElementById("detail-publisher");
  const detailDescription = document.getElementById("detail-description");
  const newBookForm = document.getElementById("new-book-form");
  const closeDetailView = document.getElementById("close-detail-view");

  function displayBooks() {
    bookList.innerHTML = "";
    books.forEach((book) => {
      const img = document.createElement("img");
      img.src = book.image;
      img.alt = book.name;
      img.addEventListener("click", () => showBookDetails(book));
      bookList.appendChild(img);
    });
  }

  function showBookDetails(book) {
    detailImage.src = book.image;
    detailName.textContent = book.name;
    detailAuthor.textContent = `Author: ${book.author}`;
    detailPublisher.textContent = `Publisher: ${book.publisher}`;
    detailDescription.textContent = book.description;
    detailView.classList.remove("hidden");
  }

  function addBookSubmitListener() {
    newBookForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const newBook = {
        name: document.getElementById("new-name").value,
        author: document.getElementById("new-author").value,
        image: document.getElementById("new-image").value,
        publisher: document.getElementById("new-publisher").value,
        description: document.getElementById("new-description").value,
      };
      books.push(newBook);
      displayBooks();
      newBookForm.reset();
      detailView.classList.add("hidden"); //hide the detail view after adding a new book
    });
  }

  function main() {
    displayBooks();
    addBookSubmitListener();
    if (books.length > 0) {
      showBookDetails(books[0]); //show the first book on load
    }
    closeDetailView.addEventListener("click", () => {
      detailView.classList.add("hidden");
    });
  }

  document.addEventListener("DOMContentLoaded", main);


