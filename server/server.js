const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static('./client/dist'));
const mongo = require('./database/database.js');




app.get('/house', (req, res) => {

    mongo.house.findOne({unique: Math.floor(Math.random() * 100)}, (err, house) => {
        if(err) return console.log(err);
        console.log(house)
        res.send(house)
    });
})

app.get('/house/:id', (req, res) => {

    mongo.house.findOne({ unique: req.params.id }, (err, house) => {
        if(err) return console.log(err);
        // console.log(house)
        res.send(house)
    });

})




const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})