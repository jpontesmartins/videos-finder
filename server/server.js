const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/videos', async (req, res) => {
    
    res.send("search videos");
});

app.listen(port, () => console.log(`Listening on port ${port}`));

