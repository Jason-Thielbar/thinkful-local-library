function findAuthorById(authors, id) {
  const author = authors.find((author) => author.id === id);
  return author;
}

function findBookById(books, id) {
  const book = books.find((book) => book.id === id);
  return book;
}

function partitionBooksByBorrowedStatus(books) {
  let outPut = [];

  const borrowed = books.filter((book) => book.borrows[0].returned === false);

  const returned = books.filter((book) => book.borrows[0].returned === true);

  outPut.push(borrowed, returned);

  return outPut;
}

function getBorrowersForBook(book, accounts) {
  let outPut = book.borrows.map((borrows) => {
    
    let account = accounts.find((account) => account.id === borrows.id);
    return {...borrows, ...account };
    });
  return outPut.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
