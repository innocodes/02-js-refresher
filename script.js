const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*

// Destructuring

const books = getBooks();
const book = getBook(3);
// const title = book.title;
// title;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
title;
author;
pages;
console.log(publicationDate);

// Rest & Spread Operation

// Rest operator has to come last in the destructuring
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
primaryGenre;
secondaryGenre;
otherGenres;

const [...restGenres] = genres;
restGenres;

// Spread operator in array
// Can be used both on arrays and objects
const newGenres = [...genres, "epic fantasy"];
newGenres;

// Spread operator in objects
const updatedBook = {
  ...book,
  // Adding a new property
  moviePublicationDate: "2001-12-19",
  // Overwriting an existing property
  // pages: 1201,
};
book;

updatedBook;

const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${
  publicationDate.split("-")[0]
}`;
summary;

// Ternary Operators
const pagesRange = pages > 1000 ? "over a thousand" : "less than a thousand";
pagesRange;

// Arrow Functions best used for one-liner function expression.
const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

// Short - circuting and logical operators

// falsy values: 0, '', null, undefined.
console.log(0 && "hello");
console.log("jonas" && "world");

console.log(true || "Some string");
console.log(false || "Some string");

const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
spanishTranslation;

// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything.reviewsCount || "no data";
// countWrong;

// // Nullish coalescing
// // Nullish coalescing only checks for null or undefined. It exempts zero and empty string;
// const count = book.reviews.librarything.reviewsCount ?? "no data";
// count;

// Optional Chaining

function getTotalReviewCount(book) {
  const goodread = book.reviews.goodreads?.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodread + librarything;
}

console.log(getTotalReviewCount(book));

*/

// FUNCTIONAL ARRAY METHODS

// 1. MAP Method
// Map method is used to create a new array based on the
// original array with some operation applied.

/*

function getTotalReviewCount(book) {
  const goodread = book.reviews.goodreads?.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodread + librarything;
}

const books = getBooks();

const x = [1, 2, 3, 4].map((el) => el * 2);
x;

const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => ({
  author: book.author,
  title: book.title,
  reviewsCount: getTotalReviewCount(book),
}));
essentialData;

// FILTER METHOD
// This is used to filter out some elements of an array based on some conditions

const longBooks = books.filter((book) => book.pages > 500);
longBooks;
const longBooksTitle = longBooks.map((book) => book.title);
longBooksTitle;

const adventureBooks = books
  .filter((books) => books.genres.includes("adventure"))
  .map((book) => book.title);

adventureBooks;

const cars = ["Mazda", "Volvo", "BMW", "Mercedes"];

const carsWithLetterE = cars.filter((el) => el.includes("e"));
carsWithLetterE;

// REDUCE METHOD
// This is the most versatile of all array methods in javascript
// Among other things, it is useful for performing mathematical
// operations with numbers. The goal of the reduce method is to boil
// the entire array into a single value
// It accepts two arguments, a functiom and a starter value

const totalPagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
totalPagesAllBooks;

// SORT METHOD
// This is used to sort an array
// It mutates (changes) the original array

const arr = [2, 1, 5, 9, 0];
const sorted = arr.sort((a, b) => a - b);
sorted;
arr;

// To avoid mutating the original array, we can leverage the slice method
const newArr = [3, 1, 0, 8, 2, 5];
const sortedArr = newArr.slice().sort((a, b) => a - b);
newArr;
sortedArr;

const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);
sortedByPages;

// WORKING WITH IMMUTABLE ARRAYS

// Add a book object to an array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};

const booksAfterAdd = [...books, newBook];
booksAfterAdd;
console.log("booksAfterAdd", booksAfterAdd);

// Delete a book object from array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
console.log("booksAfterDelete", booksAfterDelete);

// Update a book object in the array
const booksAfterUpdate = books.map((book) =>
  book.id === 2 ? { ...book, author: "Innocent Oyebode" } : book
);
console.log("booksAfterUpdate", booksAfterUpdate);

// How to sort an Array - Refresher
const sortArray = [0, 5, 4, 7, 1, 3];
const getSorted = sortArray.sort((a, b) => a - b);
console.log("getSorted", getSorted);

*/

// Asynchronous JavaScript
// Handling data fetching using promise method.
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// console.log("Innocent");

// USING ASYNC AWAIT
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
  console.log("Innocent");

  return data;
}

const todos = getTodos();

getTodos();
