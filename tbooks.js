let books; //make a global variable

async function renderBooks(filter) {
  const booksWrapper = document.querySelector('.books');
  
  booksWrapper.classList += ' books__loading'  //when renderBooks gets called this loading state activates. Needs a space b/c body classList is already a long string so in order to add another class to it needs a space
  
  if (!books) { //if we don't have books let's get it if there is books don't want to await, don't want another 1sec loading state
    books = await getBooks();
  }

  booksWrapper.classList.remove('books__loading') //waiting for line 5 for a second and after that second line 6 here will run and the loading state is removed

  if (filter === 'LOW_TO_HIGH') {
    books.sort((a, b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)); //or operator prioritizes the sales price (first) if it doesn't it will fall back to the original price (second)
  }
  else if (filter === 'HIGH_TO_LOW') {
    books.sort((a, b) => (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice));
  }
  else if (filter === 'RATING') {
    books.sort((a, b) => b.rating - a.rating);
  }

  const booksHtml =  books.map(book => {  //turing every element in the books array into HTML. will loop through the getBooks() array, every element here is book and every book is an object, gives us an object in this parameter
    return `<div class="book">
    <figure class="book__img--wrapper">
      <img class="book__img" src="${book.url}" alt="">   
    </figure>
    <div class="book__title">
      ${book.title}
    </div>
    <div class="book__ratings">
      ${ratingsHTML(book.rating)}
    </div>
    <div class="book__price">
      ${priceHTML(book.originalPrice, book.salePrice)}
    </div>
  </div>`;
  }).join("");  //in order to create a long string out of this array (thats why there were commas in the HTML right now) need to join everything together

  booksWrapper.innerHTML = booksHtml; //this gives us our books on the webpage
}

function priceHTML(originalPrice, salePrice) {
  if (!salePrice){
    return `$${originalPrice.toFixed(2)}`
  }
    return `<span class="book__price--normal">$${originalPrice.toFixed(2)}</span>$${salePrice.toFixed(2)}` //if you know you are returning in an if statement you don't need an else this makes the code cleaner
}

function ratingsHTML(rating) {
  let ratingHTML = "";
  for (let i = 0; i < Math.floor(rating); ++i) {
    ratingHTML += '<i class="fas fa-star"></i>'
  }
  if (!Number.isInteger(rating)) { //if it is Not and integer (! = opposite), aka if there is a remainder add half a star
    ratingHTML += '<i class="fas fa-star-half-alt"></i>'
  }
  else if (rating < 5){  //personal problem = how to make it dynamic so that there are empty stars that total 5...?
    ratingHTML += '<i class="far fa-star"></i>'
  }
  return ratingHTML;
}

function filterBooks(event){ 
  renderBooks(event.target.value);
}

renderBooks();

// FAKE DATA
function getBooks() {
  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve([
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
            rating: 3.5,
          },
      ]);
    }, 1000);
  });
}
