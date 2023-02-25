module.exports = (app) => {
  const quizzes = require('../controllers/quizzes.controller.js');

  var router = require('express').Router();

  router.post('/', quizzes.create);
  router.get('/', quizzes.findAll);
  // router.get("/published", quizzes.findAllPublished);
  // router.get('/:id', quizzes.findOne);
  // router.put("/:id", quizzes.update);
  // router.delete("/:id", quizzes.delete);
  // router.delete("/", quizzes.deleteAll);

  app.use('/api/quizzes', router);
};
