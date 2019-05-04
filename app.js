const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dbUrl = 'mongodb://localhost:27017/primeDate';
const PORT = 3100;

mongoose.Promise = global.Promise;

mongoose.connect(dbUrl, {useNewUrlParser: true}, err => {
    if (err) {
        console.log(err);
    }
});

//After connecting to mongodb our Application doesn't know when our connection is completed and when we can start saving records in our database. So what I have done is listen to the event when our connection is successfully made.

//'mongoose.connection' is going to gives us information about the connection we made and '.once()' is the event listener which will fire only once after connection has been made

mongoose.connection.once('open', function () {
    console.log('Connection has been successfully made');
}).on('error', function (error) {
    console.log('Connection error', error);
});

app.use(bodyParser.json());
app.use('/api', require('./routes/prime_date_route'));


app.listen(process.env.port || PORT, () => {
    console.log(`App listening on port ${PORT}`);
});