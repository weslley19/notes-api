const db = require('../db');

module.exports = {
    ping: (req, res) => {
        res.json({ pong: true });
    },
    all: (req, res) => {
        res.json();
    },
    one: (req, res) => {
        res.json();
    },
    new: (req, res) => {
        res.json();
    },
    edit: (req, res) => {
        res.json();
    },
    delete: (req, res) => {
        res.json();
    },
};
