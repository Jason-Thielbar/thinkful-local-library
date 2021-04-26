/*
JavaScript foundations: Strings
Instructions

To complete this Practice problem, you will write a function called listAllItems(). This function will receive an array of products, that looks something like this:

[
  {
    name: "Slip Dress",
    priceInCents: 8800,
    availableSizes: [0, 2, 4, 6, 10, 12, 16],
  },
];

Depending on the number of items in the array, you will return a different string. In this challenge, you will need to use template literals and the .join() method.

    Note: If you believe you have written the function correctly but are not getting passing tests, make sure to check the spelling and punctuation of the returned strings.

No items

If there are no items, you should return a message that says:

    There are no items for sale.

One item

If there is only one item, you should return a message that says like:

    There is 1 item for sale: Slip Dress.

Replace "Slip Dress" with the name of whatever the item is.
Two items

If there are two items, you should return a message that says:

    There are 2 items for sale: Hat and Shirt.

Replace "Hat" and "Shirt" with the name of whatever the item is.
More than two items

If there are more than two items, you should return a message that says:

    There are 3 items for sale: Hat, Shirt, Square-Neck Jumpsuit.

Replace "3" with the number of items for sale and "Hat", "Shirt", and "Square-Neck Jumpsuit" with the names of the items.
*/