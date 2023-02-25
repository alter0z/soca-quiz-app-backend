const dbConfig = require('../configs/db.config.js');

const mongoose = require('mongoose');
Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.quizzes = require('./quizzes.model.js')(mongoose);
db.question = require('./question.model.js')(mongoose);

module.exports = db;
