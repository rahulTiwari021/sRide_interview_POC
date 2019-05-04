const assert = require('assert');
const PrimeDate = require('../schema-model/prime_date_schema');

describe('Saving records', function () {
    it('Saves records to the database', function (done) {
        var primeDateObj = {};
        primeDateObj.isPrime = true;
        primeDateObj.weatherData = {
            "cod": "200",
                "message": 0,
                "city": {
                "geoname_id": 524901,
                    "name": "Moscow",
                    "lat": 55.7522,
                    "lon": 37.6156,
                    "country": "RU",
                    "iso2": "RU",
                    "type": "city",
                    "population": 0
            }
        };
        PrimeDate.create(primeDateObj)
            .then(() => {
            assert(!PrimeDate.isNew);
                done();

            // as PrimeDate.create() function is asynchronous we have to tell mocha when to finish testing and this can be done by using done paramter from 'it' block;

            }).catch(err => {
                console.log(err);
        });
    });

    // next test
});

