const mongoose = require('mongoose');
const dbUrl = 'mongodb://localhost:27017/primeDate';

// ES6 Promise
mongoose.Promise = global.Promise;

//Connect to the db before test run;

before(function (done) {
    mongoose.connect(dbUrl, { useNewUrlParser: true });

    mongoose.connection.once('open', function () {
        console.log('Connection has been successfully made');
        done();
    }).on('error', function (error) {
        console.log('Connection error', error);
    });
});

