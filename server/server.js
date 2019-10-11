const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static('./client/dist'));
const mongo = require('./database/database.js');
var faker = require('faker');



app.get('/house', (req, res) => {
    
    
    res.send()
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