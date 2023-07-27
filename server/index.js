const express = require('express');
require('dotenv').config();
const cors = require('cors')
const {Configuration, OpenAIApi} = require('openai');

const app = express()

app.use(express.json())
app.use(cors({origin:'http://localhost:3000'}))

const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_KEY
})

const openai = new OpenAIApi(configuration)

app.post("/chat", async (req,res) => {
    try {
        const { prompt } = req.body;
        
        const response = await openai.createCompletion({
            model:"text-davinci-003",
            prompt:`${prompt}`,

        }) 

        return res.status(200).json({
            success: true,
            data: response.data.choices[0].text
        })
    } catch (error) {
        return res.status(400).json({
        success: false,
        error: error.response ? error.response.data : "there was an issue on te server"
})
    }
})

const port = process.env.PORT || 5000

app.listen(port, console.log(`Server listening on port ${port}`))
