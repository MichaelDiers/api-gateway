const addAuthenticationService = require('./authentication-service');
const addHealthService = require('./health-service');
const addUsersService = require('./users-service');

module.exports = [
    addAuthenticationService,
    addHealthService,
    addUsersService,
];
