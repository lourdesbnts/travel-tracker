import './scripts.js';

export const fetchCalls = (url) => {
    return fetch(url)
    .then(response => response.json())
}