const { User } = require('../models');

const userData = [{
        username: 'Frodo Baggins',
        password: 'pword123'

    },
    {
        username: 'Gandalf Grey',
        password: 'pword123'
    },
    {
        username: 'Pippin',
        password: 'pword123'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;