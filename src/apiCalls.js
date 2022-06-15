export const fetchCalls = (url) => {
    return fetch(url)
    .then(response => response.json())
}


export const postTrip = (usersNewTrip) => {
    return fetch('http://localhost:3001/api/v1/trips', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(usersNewTrip)
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error('Server is not running')
        } else {
            return response.json()
        }
    }).catch(error => console.log(error))
}

