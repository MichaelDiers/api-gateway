const addHealthService = require('./health-service');
const addUsersService = require('./users-service');

module.exports = [
    addHealthService,
    addUsersService,
];
