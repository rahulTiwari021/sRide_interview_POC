const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const primeDateSchema = new Schema({
    weatherData : {
        type: {}
    },
    date: {
        type: Date,
        default: Date.now
    },
    isPrime: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('primeDate', primeDateSchema, 'primeDates');