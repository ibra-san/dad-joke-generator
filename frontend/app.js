
const fetchJokeButton = document.querySelector("#fetch_joke_button") // selecting the joke button
const toggle_preloader = document.querySelector("#toggle_preloader") // The preloader gif


const displayJoke = (status, joke) => {  // Function that displays the joke on the screen
    const jokeText = document.querySelector('#joke_text'); // Selects the joke text area
    if(status == 200 && joke) {  // Checks if the joke has been fetched or an error has returned
        jokeText.innerHTML = joke;
    } else { 
        jokeText.innerHTML = status
    }
}


/* We are going to use another API to fetch jokes since the other one has more limits, and the jokes are super lame and bad. API is at: https://icanhazdadjoke.com/api  

The steps are simple, you just need to create a AJAX function and fetch the joke from the API. But you need to have a header in order to choose the format of the fetched data. The fetched data by default is in HTML format


*/

const fetchJoke = async () => { // fetchs the joke

    const response = await fetch("https://icanhazdadjoke.com" , 
    {
        headers: { 
            Accept: "application/json", // Requesting json format from the api
        },
    })
    const joke = await response.json()
    console.log(joke)
    displayJoke(joke.status, joke.joke) // calling the display function and passing the fetched jokes 
    return joke
}

fetchJoke() // This for when the page just starts up. 
fetchJokeButton.addEventListener('click', fetchJoke) // Fetchs a joke on button click
