
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
    
    const options = {
        method: 'GET',
        url: 'https://dad-jokes.p.rapidapi.com/random/joke',
        headers: {
            'X-RapidAPI-Key': 'de6f8acc1dmsh058a90d60d5ac1ap1833b1jsn68532b595424',
            'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
        }

    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        displayJoke(response.data.success, response.data.body)
    } catch (error) {
        console.error(error);
    }

}

fetchJokeButton.addEventListener('click', fetchJoke)

