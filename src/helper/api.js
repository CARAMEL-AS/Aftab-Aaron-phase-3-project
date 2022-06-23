export const login = async (name, email) => {
    return await fetch(`${process.env.REACT_APP_URL}/auth`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })
    })
    .then(res => { return res.json() })
    .then(data => { return data })
    .catch(err => { console.log('Login Error: ',err) }) 
}

export const getBooks = async () => {
    return await fetch(`${process.env.REACT_APP_URL}/books`)
    .then(res => { return res.json() })
    .then(data => { return data })
    .catch(err => { console.log('Books Error: ',err) })
}

export const getAuthers = async () => {
    return await fetch(`${process.env.REACT_APP_URL}/authors`)
    .then(res => { return res.json() })
    .then(data => { return data })
    .catch(err => { console.log('Books Error: ',err) })
}

export const addBook = async (title, rating, release_date, author_id) => {
    return await fetch(`${process.env.REACT_APP_URL}/add_book`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, rating, release_date, author_id })
    })
    .then(res => { return res.json() })
    .then(data => { return data })
    .catch(err => { console.log('Add Book Error: ',err)}) 
}

export const updateBook = async (title, rating, release_date, author_id, bookId) => {
    return await fetch(`${process.env.REACT_APP_URL}/book/${bookId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, rating, release_date, author_id })
    })
    .then(res => { return res.json() })
    .then(data => { return data })
    .catch(err => { console.log('Add Book Error: ',err)}) 
}

export const deleteBook = async (bookId) => {
    return await fetch(`${process.env.REACT_APP_URL}/book/${bookId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => { return res.json() })
    .then(data => { return data })
    .catch(err => { console.log('Add Book Error: ',err)}) 
}