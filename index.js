const express = require('express');
const urlRoute = require('./routes/url');
const { connectDB } = require('./connectDb')
const URL = require('./models/url');


const app = express();
const PORT = 8000;

app.use(express.json());

// Database connection
connectDB('mongodb://localhost:27017/short-url')
.then(() => console.log('Mongodb Connected!'));

app.use('/url', urlRoute);

app.get('/:shortID', async (req, res) => {
    const shortId = req.params.shortID;
    const entry = await URL.findOneAndUpdate({
        shortId
    } ,
    {
        $push: {
            visitHistory: {
                timestamp : Date.now(),
            },
        }
    })
    res.redirect(entry.redirectURL);
})

app.listen(PORT,() => console.log('Server started!'));