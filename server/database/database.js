const mongoose = require('mongoose');
let mongo = process.env.MONGODB_URI || 'mongodb://localhost/house'

mongoose.connect(mongo, { useUnifiedTopology: true, useNewUrlParser: true })
mongoose.set('useCreateIndex', true)


//create the schema
let houseSchema = mongoose.Schema({
    unique: Number,
    title: String,
    imageURL: String,
    hostName: String,
    location: String,
    rooms: { guests: Number, bedroom: Number, beds: Number, bath: Number },
    size: { home: String, homeDescrip: String},
    type: {host: String, hostDescrip: String},
    place: {location: String, locationDescrip: String},
    check: {experience: String, experienceDescrip: String },
    space: String
})

//create the model
let House = mongoose.model('House', houseSchema);

//post to db
let save = (unique, title, imageURL, hostName, location, rooms, size, type, place, check, space) => {

    let house = new House({ unique, title, imageURL, hostName, location, rooms, size, type, place, check, space });

    house.save((err, house) => {
        if(err) return console.error(err);
        console.log('saved successfully!', house)
    });
};


module.exports.save = save;
module.exports.house = House;
