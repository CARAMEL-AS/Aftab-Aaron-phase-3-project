export const assignData = (authers, books) => {
    for(let i = 0; i < authers.length; i++) {
        let autherBooks = [];
        for(let o = 0; o < books.length; o++) {
            if(authers[i].id === books[o].author_id) {
                autherBooks.push(books[o])
            }
        }
        authers[i]['books'] = autherBooks;
    }
    return authers;
}