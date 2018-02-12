
var ObjectID = require('mongodb').ObjectID;

module.exports = function (app, db) {

    // Delete note
    app.delete('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('notes').remove(details, (error, result) => {
            if (error) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send('Note ' + id + ' deleted!');
            }
        })
    })

    // Update note
    app.put('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        const note = { text: req.body.body, title: req.body.title };
        db.collection('notes').update(details, note, (error, result) => {
            if (error) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(note);
            }
        })
    })

    // Insert new note
    app.post('/notes', (req, res) => {
        const note = { text: req.body.body, title: req.body.title };
        db.collection('notes').insert(note, (error, result) => {
            if (error) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(result.ops[0]);
            }
        })
    })

    // Get note with ID
    app.get('/notes/:id', (req, res) => {
        const details = { '_id': new ObjectID(req.params.id) };
        db.collection('notes').findOne(details, (error, item) => {
            if (error) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(item);
            }
        })
    })
};