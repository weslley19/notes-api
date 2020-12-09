const express = require('express');
const router = express.Router();

const NotesController = require('./controllers/NotesController');

router.get('/ping', NotesController.ping);

router.get('/notes', NotesController.all);
router.get('/notes/:id', NotesController.one);
router.post('/notes', NotesController.new);
router.put('/notes/:id', NotesController.edit);
router.delete('/notes/:id', NotesController.delete);

module.exports = router;
