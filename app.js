
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
    
    fetch('http://localhost:8000/joke', { 
        method: "POST", 
        headers: { 
            "Content-Type":"application/json", 
            "Accept": "application/json"
        }
    })  .then(response => response.json())
        .then(data => {
            console.log(data)
            displayJoke(data.success, data.body) 
        })
        .catch((error) => { 
            console.error("Error:", error)

        })

}

fetchJokeButton.addEventListener('click', fetchJoke)

