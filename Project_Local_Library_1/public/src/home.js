function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let borrowed = books.filter((book) => book.borrows[0].returned === false);
  const borrowedCount = borrowed.length;
  return borrowedCount;
}

function getMostCommonGenres(books) {
  const commonGenres = [];

  for (let book of books) {
    const genre = commonGenres.find(
      (currentGenre) => currentGenre.name === book.genre
    );
    if (genre) {
      genre.count++;
    } else {
      commonGenres.push({ name: book.genre, count: 1 });
    }
  }

  return topFive(commonGenres);
}

function getMostPopularBooks(books) {
  console.log("This is books ", books);
  let outPut = [];

  const borrows = books.reduce((acc, book) => {
    outPut.push({ name: book.title, count: book.borrows.length });
  }, []);
  console.log("This Is output", topFive(outPut));
  return topFive(outPut);
}

function getMostPopularAuthors(books, authors) {
  const popAuthors = [];

  for (let author of authors) {
    const authorName = `${author.name.first} ${author.name.last}`;
    let count = 0;
    for (let book of books) {
      if (author.id === book.authorId) {
        count += book.borrows.length;
      }
    }
    const authorObject = { name: authorName, count: count };
    popAuthors.push(authorObject);
  }
  return topFive(popAuthors);
}

function topFive(array) {
  let outPut = array
    .sort((countA, countB) => (countA.count < countB.count ? 1 : -1))
    .slice(0, 5);

  return outPut;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
