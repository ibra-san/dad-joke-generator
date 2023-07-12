const PORT = 8000
const axios = require('axios').default // For handing api CRUD operations
const express = require('express') // Used for routing and to handling backend routing
const cors = require('cors') // To solve the cors error problems
require('dotenv').config() // To allow our document to read .env files
const app = express() 
app.use(cors())
app.use(express.json())

app.post('/', async (req,res) => { 

    const options = {
        method: 'GET',
        url: 'https://dad-jokes.p.rapidapi.com/random/joke',
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_DAD_JOKE,
            'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
        }

    }

    try {
        const response = await axios.request(options);
        console.log(response.data);
        res.json(response.data)
    } catch (error) {
        console.error(error);
    }

})

app.listen(PORT, () => console.log(`server listening on PORT ${PORT}`)) // To test and see if the server is working or if there are some issues. This will also make the server listent contiously for changes