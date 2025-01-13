// create web server
const express = require('express');
const app = express();

// create comment array
const comments = [ 
    { username: 'Tammy', comment: 'lol that is so funny!' },
    { username: 'FishBoi', comment: 'Pls delete this post.' },
    { username: 'Haha', comment: 'I am so happy.' }
];