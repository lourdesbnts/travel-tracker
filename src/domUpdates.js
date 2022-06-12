export const domUpdates = {
    welcomeUser(name) {
        const welcomeTraveler = document.querySelector('#welcomeTraveler');
        welcomeTraveler.innerText += `${name}`
    }
}

// export default domUpdates;