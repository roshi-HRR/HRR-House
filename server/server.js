const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static('./client/dist'));
const mongo = require('./database/database.js');




app.get('/house', (req, res) => {

    // mongo.house.find({}, (err, house) => {
    //     if(err) return console.log(err);
    //     console.log(house)
    //     res.send(house)
    // })

    mongo.house.findOne({unique: Math.floor(Math.random() * 100)}, (err, house) => {
        if(err) return console.log(err);
        console.log(house)
        res.send(house)
    })

})

// app.post('/house', (req, res) => {

//     mongo.save('title1', 'www.yo.com', 'host1', 'location1',
//      {guests: 4, bedroom: 5, beds: 3, bath: 3},
//      {home: 'big', homeDescrip: 'nice and clean'},
//      {host: 'super', hostDescrip: 'weird'},
//      {location: 'tx', locationDescrip: 'safe'},
//      {experience: 'good', experienceDescrip: 'positive'},
//      'space1');

//         res.send();
// })






const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})