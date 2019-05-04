const API_helper = require('../api_helpers/API_helper');
const assert = require('assert');

describe('testing api response', function () {
    it('testing response from weather API', function (done) {
        const url = 'https://samples.openweathermap.org/data/2.5/forecast/daily?id=524901&appid=b1b15e88fa797225412429c1c50c122a1';
        API_helper.make_API_call(url)
            .then(response => {
                assert(response != undefined || response != null);
                done();
            }).catch(err => {
                console.log(err);
        });
    });
});