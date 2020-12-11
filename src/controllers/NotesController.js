const Notes = require('../models/Note');

module.exports = {
    ping: (req, res) => {
        res.json({ pong: true });
    },
    all: async (req, res) => {
        let json = { error: '', results: [] };

        const notesAll = await Notes.getAll();

        for (let i in notesAll) {
            json.results.push({
                id: notesAll[i].id,
                title: notesAll[i].title
            });
        }

        res.status(200).json(json);
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
