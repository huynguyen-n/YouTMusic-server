const youtubeRoutes = require('./node_routes');

module.exports = function(app, db) {
    youtubeRoutes(app, db);
}