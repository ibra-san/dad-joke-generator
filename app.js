
const fetchJokeButton = document.querySelector("#fetch_joke_button");


const displayJoke = (isSuccess, joke) => { 
    const jokeText = document.querySelector('#joke_text'); 
    if(isSuccess && joke) { 
        let setup = joke[0].setup; 
        let punchline = joke[0].punchline;
        jokeText.innerHTML = setup +" "+ punchline;
    }
}

const fetchJoke = async () => { 
    
    const options = fetch('http://localhost:8000/joke', { 
        method: "POST", 
        header: { 
            "Content-Type":"application/json", 
            "Accept": "application/json"
        }
    }) 
    
    try {
        const response = await axios.request(options)
        console.log(response.data)
    } catch (error) {
        console.error(error)
    }

}

fetchJokeButton.addEventListener('click', fetchJoke)

