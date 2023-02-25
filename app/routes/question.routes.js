module.exports = (app) => {
  const question = require('../controllers/question.controller.js');

  var router = require('express').Router();

  router.post('/', question.create);
  router.get('/', question.findAll);
  // router.get("/published", quizzes.findAllPublished);
  router.get('/:id', question.findOne);
  // router.put("/:id", quizzes.update);
  // router.delete("/:id", quizzes.delete);
  // router.delete("/", quizzes.deleteAll);

  app.use('/api/questions', router);
};
