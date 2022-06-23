export const login = async (name, email) => {
    return await fetch(`${process.env.REACT_APP_URL}/auth`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({ name, email })
    })
    .then(res => { return res.json() })
    .then(data => {
        return data
    })
    .catch(err => { console.log('Login Error: ',err) }) 
}