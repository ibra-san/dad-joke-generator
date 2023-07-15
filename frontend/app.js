
const fetchJokeButton = document.querySelector("#fetch_joke_button")
const toggle_preloader = document.querySelector("#toggle_preloader")


const displayJoke = (isSuccess, joke) => { 
    const jokeText = document.querySelector('#joke_text'); 
    if(isSuccess && joke) { 
        let setup = joke[0].setup; 
        let punchline = joke[0].punchline;
        jokeText.innerHTML = setup +" "+ punchline;
    }
}

const fetchJoke = async () => { 
    
    fetch('https://dad-joke-generator-app.onrender.com', { 
        method: "POST", 
        headers: { 
            "Content-Type":"application/json", 
            "Accept": "application/json"
        }
    }) .then(toggle_preloader.classList.add("preloader"))
        .then(response => response.json())
        .then(data => {
            toggle_preloader.classList.remove("preloader")
            console.log(data)
            displayJoke(data.success, data.body) 
        })
        .catch((error) => { 
            console.error("Error:", error)

        })

}

fetchJokeButton.addEventListener('click', fetchJoke)

