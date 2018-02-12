// routes/index.js
const noteRoutes = require('./node_routes');

module.exports = function (app, db) {
    noteRoutes(app, db);
};