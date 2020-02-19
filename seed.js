const mongo = require('./server/database/database.js');
var faker = require('faker');

let populate = () => {
    //this populate db

    for(let i = 0; i < 100; i++) {
        let unique = i;
        let title = faker.address.streetName() + ' - ' + faker.lorem.words();
        let imageUrl = faker.image.people();
        let hostName = faker.name.findName();
        let location = faker.address.city();
        let room1 = Number(faker.random.number().toString().substring(0,1));
        let room2 = Number(faker.random.number().toString().substring(0,1));
        let room3 = Number(faker.random.number().toString().substring(0,1));
        let room4 = Number(faker.random.number().toString().substring(0,1));
        let home = faker.random.word() + ' home';
        let homeDescrip = faker.lorem.sentence();
        let host = hostName + ' is a ' + faker.hacker.adjective() + ' host';
        let hostDescrip = faker.lorem.sentence();
        let place = faker.hacker.adjective() + ' location';
        let placeDescrip = faker.lorem.sentence();
        let experience = faker.random.word() + ' check-in experience';
        let experienceDescrip = faker.lorem.sentence();
        let space = faker.lorem.paragraphs() + ' ' + faker.lorem.paragraphs();

        //save to database;

        mongo.save(unique, title, imageUrl, hostName, location,
        {guests: room1, bedroom: room2, beds: room3, bath: room4},
        {home: home, homeDescrip: homeDescrip},
        {host: host, hostDescrip: hostDescrip},
        {location: place, locationDescrip: placeDescrip},
        {experience: experience, experienceDescrip: experienceDescrip},
        space);

    }
    console.log('successfully populated :)')
}

populate()

