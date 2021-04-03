const { Post } = require('../models');

const postData = [{
        title: 'New Star Wars Series',
        content: 'The new Star Wars is not as good as the original Star Wars series!',
        user_id: 1

    },
    {
        title: 'Fluffy Cats',
        content: 'Fluffy cats are cute.',
        user_id: 2
    },
    {
        title: 'Coding Boot Camp',
        content: 'I love coding Boot Camp!',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;