## Function instructions

The following functions can be completed in whichever order you choose. There are difficult problems associated with each page, so feel free to skip around as you work your way up to solving more challenging problems!

---

### Account functions

![image.png](//res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/11c23e4622a87eab216668be31c759ac-image.png)

#### findAccountById()

The `findAccountById()` function in `public/src/accounts.js` has two parameters, in the following order:

- An array of accounts.
- An ID of a single account.

It returns the account object that has the matching ID.

This function will need to iterate over the ARRAY "accounts" compare the ID it receives as an argument
Then this function will have to return the object that matches that ID 


**Example:**

```javascript
findAccountById(accounts, "5f446f2ecfaf0310387c9603");
/*
  {
    "id": "5f446f2ecfaf0310387c9603",
    "name": {
      "first": "Esther",
      "last": "Tucker"
    },
    ...
  }
*/
```

#### sortAccountsByLastName()

The `sortAccountsByLastName()` function in `public/src/accounts.js` has a single parameter:

- An array of accounts.

It returns a sorted array of objects. The objects are sorted alphabetically by last name.

This function will take one parameter and one arugment, that being the ARRAY "accounts" 
It will then return the object sorted by alphabetically by last name of the auther "name.last" 


**Example:**

```javascript
sortAccountsByLastName(accounts);
/*
  [
    {
      "name": {
        "first": "Kirby",
        "last": "Alston"
      },
      ...
    },
    {
      "name": {
        "first": "Toni",
        "last": "Ball"
      },
      ...
    },
  ]  
*/
```

#### getTotalNumberOfBorrows()

The `getTotalNumberOfBorrows()` function in `public/src/accounts.js` has two parameters, in the following order:

- An account object.
- An array of all books objects.

It returns a _number_ that represents the number of times the account's ID appears in any book's `borrow` array.

This function will have two paramters. It will have to loop over the ARRAY "accounts" and the ARRAY "books" 
It will then compare the "accounts" ID key to the "books" borrow key and then return an integer for how many 
times that ID appears in any book's borrow key

**Example:**

```javascript
getTotalNumberOfBorrows(account, books); // 22
```

#### getBooksPossessedByAccount()

The `getBooksPossessedByAccount` function in `public/src/accounts.js` has three parameters, in the following order:

- An account object.
- An array of all books objects.
- An array of all author objects.

It returns an array of books and authors that represents all books _currently checked out_ by the given account. _Look carefully at the object below,_ as it's not just the book object; the author object is embedded inside of it.



**Example:**

```javascript
getBooksPossessedByAccount(account, books, authors);
/*
  [
    {
      id: "5f447132320b4bc16f950076",
      title: "est voluptate nisi",
      genre: "Classics",
      authorId: 12,
      author: {
        id: 12,
        name: {
          first: "Chrystal",
          last: "Lester",
        },
      },
      borrows: [
        {
          id: "5f446f2e6059326d9feb9a68",
          returned: false,
        },
        ...
      ],
    },
  ]
*/
```

---

### Book functions

![image.png](//res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/9012c8115fddba330e4958c3a907bcaa-image.png)

#### findAuthorById()

The `findAuthorById()` function in `public/src/books.js` has two parameters, in the following order:

- An array of authors.
- An ID of a single author.

It returns the author object that has the matching ID.

This function will take two parameters: the ARRAY of authors and the ID of an author. 
It will then return an "author object" that matches th ID

**Example:**

```javascript
findAuthorById(authors, 11);
/*
  {
    id: 11,
    name: {
      first: "Luz",
      last: "Beach",
    },
  }
*/
```

#### findBookById()

The `findBookById()` function in `public/src/books.js` has two parameters, in the following order:

- An array of books.
- An ID of a single book.

It returns the book object that has the matching ID.

This funciton will take two parameters, an ARRAY that is "books" and the ID of a book. 
It will return a book object that has the matching book ID 

**Example:**

```javascript
findBookById(books, "5f447132320b4bc16f950076");
/*
  {
    id: "5f447132320b4bc16f950076",
    title: "est voluptate nisi",
    ...
  }
*/
```

#### partitionBooksByBorrowedStatus()

The `partitionBooksByBorrowedStatus()` function in `public/src/books.js` has a single parameter:

- An array of books.

It returns an array with two arrays inside of it. All of the inputted books are present in either the first or second array.

The first array contains books _that have been loaned out, and are not yet returned_ while the second array contains books _that have been returned._ You can check for the return status by looking at the first transaction in the `borrows` array.

In this function we will need to use a "forEach" and an "if" statement. If the condition of "that have been loanded out" & 
"are not returned" is true, put in one bucket. If the condition matches "that have been returned" put into another bucket. 
Then return each bucket


**Example:**

```javascript
partitionBooksByBorrowedStatus(books);
/*
  [
    [
      {
        id: "5f447132d487bd81da01e25e",
        title: "sit eiusmod occaecat eu magna",
        genre: "Science",
        authorId: 8,
        borrows: [
          {
            id: "5f446f2e2cfa3e1d234679b9",
            returned: false,
          },
          ...
        ]
      },
      ...
    ],
    [
      {
        id: "5f44713265e5d8d17789beb0",
        title: "tempor occaecat fugiat",
        genre: "Travel",
        authorId: 16,
        borrows: [
          {
            id: "5f446f2e4eff1030e7316861",
            returned: true,
          },
          ...
        ]
      },
      ...
    ]
  ]
*/
```

#### getBorrowersForBook()

The `getBorrowersForBook()` function in `public/src/books.js` has two parameters, in the following order:

- A book object.
- An array of all accounts.

It should return an array of all the transactions from the book's `borrows` key. However, each transaction should include the related account information and the `returned` key.

We will need a function that has two parameters, a book object and an ARRAY of all accounts. We need to return an array of all the things
that are in each books' "borrows" key. (come back to this description)


**Example:**

```javascript
getBorrowersForBook(book, accounts);
/*
  [
    {
      id: "5f446f2e4eff1030e7316861",
      returned: true,
      picture: "https://api.adorable.io/avatars/75/barber.waters@kegular.biz",
      age: 37,
      name: {
        first: "Barber",
        last: "Waters",
      },
      company: "KEGULAR",
      email: "barber.waters@kegular.biz",
      registered: "Tuesday, April 14, 2020 9:15 PM",
    },
    {
      id: "5f446f2ecc5c4787c403f844",
      returned: true,
      picture: "https://api.adorable.io/avatars/75/dyer.trevino@slax.io",
      age: 34,
      name: {
        first: "Dyer",
        last: "Trevino",
      },
      company: "SLAX",
      email: "dyer.trevino@slax.io",
      registered: "Saturday, August 1, 2015 8:13 PM",
    },
  ]
*/
```

---

## Home functions

![image.png](//res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/6e9b6e3b27d21cff7c80cd9efec9c421-image.png)

### getTotalBooksCount()

The `getTotalBooksCount()` function in `public/src/home.js` has a single parameter:

- An array of books.

It returns a number that represents the number of book objects inside of the array.

This function will take in an ARRAY and count how many objects there are in that ARRAY 
We will then return the number of book objects that are in that ARRAY


**Example:**

```javascript
getTotalBooksCount(books); // 100
```

### getTotalAccountsCount()

The `getTotalAccountsCount()` function in `public/src/home.js` has a single parameter:

- An array of accounts.

It returns a number that represents the number of account objects inside of the array.

In this function we will take in an ARRAY of accounts and count how many account objects there are
We will then return the number of account obejects that are in the array

**Example:**

```javascript
getTotalAccountsCount(accounts); // 75
```

### getBooksBorrowedCount()

The `getBooksBorrowedCount()` function in `public/src/home.js` has a single parameter:

- An array of books.

It returns a number that represents the number of books _that are currently checked out of the library._ This number can be found by looking at the first transaction in the `borrows` key of each book. If the transaction says the book has not been returned (i.e. `returned: false`), the book has been borrowed.

This function will take in an ARRAY named "books" and iterate over the "borrows" key of each book. We will then need to write an if staement
checking the condition of whether the book has been returned or not. If the value is "returned: false" then we will count that value. 
We will then need to return the number of times we see a "returned: false" value. (returning an integer)

**Example:**

```javascript
getBooksBorrowedCount(accounts); // 65
```

### getMostCommonGenres()

The `getMostCommonGenres()` function in `public/src/home.js` has a single parameter:

- An array of books.

It returns an array containing five objects or fewer that represents the most common occurring genres, ordered from most common to least.

Each object in the returned array has two keys:

- The `name` key which represents the name of the genre.
- The `count` key which represents the number of times the genre occurs.

If more than five genres are present, only the top five should be returned.

We have to write a fucntion that takes in the books ARRAY. We will then need to iterate over the objects in the arrays. 
And within those objects we will need to count how many times a Genere shows up. We will then take that number and return an ARRAY
that contains objects that have the count of that Genere next to the name of that Genre. 



**Example:**

```javascript
getMostCommonGenres(books);
/*
  [
    { name: "Nonfiction", count: 9 },
    { name: "Historical Fiction", count: 7 },
    { name: "Thriller", count: 7 },
    ...
  ]
*/
```

### getMostPopularBooks()

The `getMostPopularBooks()` function in `public/src/home.js` has a single parameter:

- An array of books.

It returns an array containing five objects or fewer that represents the most popular books in the library. Popularity is represented by the number of times a book has been borrowed.

Each object in the returned array has two keys:

- The `name` key which represents the title of the book.
- The `count` key which represents the number of times the book has been borrowed.

If more than five books are present, only the top five should be returned.


In this function we will take in the ARRAY of books, iterate over it and count how many times a books has been borrowed. We will then return an object that contains in decending order the name of the book and the "count" how many times it was borrowed. 

**Example:**

```javascript
getMostPopularBooks(books);
/*
  [
    { name: "incididunt nostrud minim", count: 30 },
    { name: "culpa do sint", count: 30 },
    { name: "ullamco est minim", count: 29 },
    ...
  ]
*/
```

### getMostPopularAuthors()

The `getMostPopularAuthors()` function in `public/src/home.js` has two parameters, in the following order:

- An array of books.
- An array of authors.

It returns an array containing five objects or fewer that represents the most popular authors whose books have been checked out the most. Popularity is represented by finding all of the books written by the author and then adding up the number of times those books have been borrowed.

Each object in the returned array has two keys:

- The `name` key which represents the first and last name of the author.
- The `count` key which represents the number of times the author's books have been borrowed.

If more than five authors are present, only the top five should be returned.

This function will take in an ARRAY of books and an ARRAY of authors. We will need to iterate over both and see how many times a book 
has been checked out. We will then need to compare that "popular" book with the author of that book. Then we will need to return the count 
of "checked out" along with the author in an object (as shown below).




**Example:**

```javascript
getMostPopularAuthors(books, authors);
/*
  [
    { name: "Cristina Buchanan", count: 112 },
    { name: "Tami Hurst", count: 83 },
    { name: "Chrystal Lester", count: 80 },
    ...
  ]
*/
```
