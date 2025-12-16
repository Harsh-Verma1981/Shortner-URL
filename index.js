const express = require('express');
const urlRoute = require('./routes/url');
const { connectDB } = require('./connectDb')
const URL = require('./models/url');
const path = require('path');
const staticRoute = require('./routes/staticRouter');

const app = express();
const PORT = 8000;

// using view engine-ejs for SSR
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use(express.json());
app.use(express.urlencoded({extended : false}));

// Database connection
connectDB('mongodb://localhost:27017/short-url')
.then(() => console.log('Mongodb Connected!'));

app.use('/url', urlRoute);

app.use('/', staticRoute);

app.get('/url/:shortID', async (req, res) => {
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