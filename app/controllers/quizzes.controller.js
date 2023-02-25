const db = require('../models');
const Quizzes = db.quizzes;

exports.create = (req, res) => {
  if (!req.body.quiz_name && !req.body.author && !req.body.image_cover && !req.body.rating) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }

  const quizzes = new Quizzes({
    quiz_name: req.body.quiz_name,
    author: req.body.author,
    image_cover: req.body.image_cover,
    author_quiz: req.body.author_quiz ? req.body.author_quiz : 0,
    rating: req.body.rating,
  });

  quizzes
    .save(quizzes)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Quiz.',
      });
    });
};

exports.findAll = (req, res) => {
  const quiz_name = req.query.quiz_name;
  var condition = quiz_name ? { quiz_name: { $regex: new RegExp(quiz_name), $options: 'i' } } : {};

  Quizzes.find(condition)
    .then((data) => {
      res.send({ data: data });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Quiz.',
      });
    });
};

// exports.findOne = (req, res) => {
//   const id = req.params.id;

//   Quizzes.findById(id)
//     .then((data) => {
//       if (!data) res.status(404).send({ message: 'Not found Article with id ' + id });
//       else {
//         res.send({ result: data });
//     })
//     .catch((err) => {
//       res.status(500).send({ message: 'Error retrieving Article with id=' + id });
//     });
// };
