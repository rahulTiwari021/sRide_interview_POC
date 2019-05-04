const CHECK_PRIME = require('../utils/my-utils');
const assert = require('assert');

describe('Checking If Prime', function () {
   it('Checking if current day is prime or not', function () {
       assert(CHECK_PRIME.is_prime(new Date().getDay()) === true);
   });
});