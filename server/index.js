const express = require('express');
require('dotenv').config();
const cors = require('cors')
const {Configuration, OpenAIApi} = require('openai');

const app = express()

app.use(express.json())
app.use(cors({origin:'http://localhost:3000'}))

const configuration = new Configuration({
    organization:"org-1ECdRlhgkgpbTukNdG1EzOdX",
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

app.post("/chat", async (req,res) => {
    try {
        const { prompt } = req.body;
        
        const {data} = await openai.createChatCompletion({
            model:"gpt-3.5-turbo",
            messages:[{'role':'system','content':'You are a helpful assisstant'},{'role':'user', 'content':`${prompt}`}]

        }) 
        console.log(data)
        return res.status(200).json({
            success: true,
            data: data
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
        success: false,
        error: error
})
    }
})

const port = process.env.PORT || 5000

app.listen(port, console.log(`Server listening on port ${port}`))
