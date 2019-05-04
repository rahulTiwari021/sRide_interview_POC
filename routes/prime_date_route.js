const express = require('express');
const router = express.Router();
const PrimeDateSchema = require('../schema-model/prime_date_schema');
const API_helper = require('../api_helpers/API_helper');
const CHECK_IF_PRIME = require('../utils/my-utils');

router.get('/getWeatherResponseIfCurrentDateIsPrime', (req, res) => {
    const url = 'https://samples.openweathermap.org/data/2.5/forecast/daily?id=524901&appid=b1b15e88fa797225412429c1c50c122a1';
    API_helper.make_API_call(url)
        .then((weatherResponse) => {
            console.log(weatherResponse);
            // I am taking current day and not date as it is mention to take day in mail sent by Bhavna;
            var currentDate = new Date().getDay();
            var primeDateObj = {};
            primeDateObj.weatherData = weatherResponse;
            primeDateObj.isPrime = CHECK_IF_PRIME.is_prime(currentDate);
            PrimeDateSchema.create(primeDateObj, (err, createdPrimeDate) => {
                if (err) {
                    res.status(200).send({error: 'Something went wrong'});
                } else if (createdPrimeDate && CHECK_IF_PRIME.is_prime(currentDate)) {
                    res.status(200).send({primeDateResponse: createdPrimeDate});
                } else if (!CHECK_IF_PRIME.is_prime(currentDate)) {
                    res.status(200).send({primeDateResponse: 'Date is not prime so no date'});
                }
            })
        })
        .catch(error => {
            res.status(500).send({error: 'Something went wrong'});
            console.log(error);
        });
});


module.exports = router;
