function renderBooks() {
  const booksWrapper = document.querySelector('.books');
  
  const books = getBooks();

  const booksHtml =  books.map(book => {  //turing every element in the books array into HTML. will loop through the getBooks() array, every element here is book and every book is an object, gives us an object in this parameter
    return `<div class="book">
    <figure class="book__img--wrapper">
      <img class="book__img" src="${book.url}" alt="">   
    </figure>
    <div class="book__title">
      ${book.title}
    </div>
    <div class="book__ratings">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star-half-alt"></i>
    </div>
    <div class="book__price">
      <span>$${book.originalPrice.toFixed(2)}</span>
    </div>
  </div>`;
  }).join("");  //in order to create a long string out of this array (thats why there were commas in the HTML right now) need to join everything together

  booksWrapper.innerHTML = booksHtml; //this gives us our books on the webpage
}

renderBooks();

function filterBooks(event){
  console.log(event.target.value)
}

// FAKE DATA
function getBooks() {
  return [
    {
      id: 1,
      title: "Crack the Coding Interview",
      url: "assets/crack the coding interview.png",
      originalPrice: 49.95,
      salePrice: 14.95,
      rating: 4.5,
    },
    {
      id: 2,
      title: "Atomic Habits",
      url: "assets/atomic habits.jpg",
      originalPrice: 39,
      salePrice: null,
      rating: 5,
    },
    {
      id: 3,
      title: "Deep Work",
      url: "assets/deep work.jpeg",
      originalPrice: 29,
      salePrice: 12,
      rating: 5,
    },
    {
      id: 4,
      title: "Be More Wrong",
      url: "assets/BeMoreW.jpg",
      originalPrice: 44,
      salePrice: 19,
      rating: 4.5,
    },
    {
      id: 5,
      title: "The Greatness Mindset",
      url: "assets/greatnessmind.jpg",
      originalPrice: 32,
      salePrice: 17,
      rating: 4,
    },
    {
      id: 6,
      title: "How to be a Boss B*tch",
      url: "assets/How2beBB.jpg",
      originalPrice: 70,
      salePrice: 12.5,
      rating: 5,
    },
    {
      id: 7,
      title: "Personality Types",
      url: "assets/Peronsalitytypes.jpg",
      originalPrice: 11,
      salePrice: 10,
      rating: 4,
    },
    {
      id: 8,
      title: "48 Laws of Power",
      url: "assets/book-5.jpeg",
      originalPrice: 38,
      salePrice: 17.95,
      rating: 4.5,
    },
    {
      id: 9,
      title: "The 5 Second Rule",
      url: "assets/book-6.jpeg",
      originalPrice: 35,
      salePrice: null,
      rating: 4,
    },
    {
      id: 10,
      title: "Surrounded By Idiots",
      url: "assets/SurroundedbyIdiots.jpg",
      originalPrice: 40,
      salePrice: null,
      rating: 4,
    },
    {
      id: 11,
      title: "The Four Agreements",
      url: "assets/the4agreements.jpg",
      originalPrice: 30,
      salePrice: null,
      rating: 4.5,
    },
  ];
}
