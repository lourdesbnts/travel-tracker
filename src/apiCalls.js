import './scripts.js';

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
    })
}







//CLASS WORK EXAMPLE
// const newFunction = () => {
//     fetch('http://localhost:3001/api/v1/animals', {
//       method: 'POST',
//       body: JSON.stringify({id: 5, name: 'dog', diet: 'kibble', fun_fact: 'they are loyal'}),
//       headers: { 'Content-Type': 'application/json'}
//     }).then(res => res.json()).then(data => {
//       // console.log(data)
//       animalData.push(data);
//       animals();
//     });
//   }


