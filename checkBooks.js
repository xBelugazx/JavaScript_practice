const books = [
    { title: "Clean Code", author: "Robert C. Martin", borrowed: true },
    { title: "JavaScript: The Good Parts", author: "Douglas Crockford", borrowed: false },
    { title: "You Don't Know JS", author: "Kyle Simpson", borrowed: true },
    { title: "Eloquent JavaScript", author: "Marijn Haverbeke", borrowed: false }
];

function printAvailableBooks(bookList) {
    for(let i = 0; i < bookList.length; i++) {
        if(bookList[i].borrowed === false) {
            console.log(bookList[i].title);
        }
    }
}

function countBorrowedBooks(bookList) {
    let cnt = 0;
    for(let i = 0; i < bookList.length; i++) {
        if(bookList[i].borrowed === true) {
            cnt++;
        }
    }
    return cnt;
}

function markAsReturned(bookList, title) {
    for (let i = 0; i < bookList.length; i++) {
        if (bookList[i].title === title && bookList[i].borrowed === true) {
            bookList[i].borrowed = false; 
            console.log(`${title} has been marked as returned.`);
            return; // I can stop
        }
    }
    console.log(`I can't find the book which "${title}"is.`);
}

printAvailableBooks(books); // books[1], books[3]
let result = countBorrowedBooks(books);
markAsReturned(books, books[2].title);
