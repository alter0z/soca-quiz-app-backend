const db = require('../models');
const Question = db.question;

exports.create = (req, res) => {
  if (!req.body.quiz_id && !req.body.question && !req.body.option_a && !req.body.option_b && !req.body.option_c && !req.body.option_d && !req.body.correct_answer && !req.body.score && !req.body.time) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }

  const question = new Question({
    quiz_id: req.body.quiz_id,
    // quiz_id: { type: mongoose.Schema.Types.ObjectId, ref: 'quizzes' },
    question: req.body.question,
    option_a: req.body.option_a,
    option_b: req.body.option_b,
    option_c: req.body.option_c,
    option_d: req.body.option_d,
    correct_answer: req.body.correct_answer,
    attachment_url: req.body.attachment_url ? req.body.attachment_url : null,
    score: req.body.score,
    time: req.body.time,
  });

  question
    .save(question)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Question.',
      });
    });
};

exports.findAll = (req, res) => {
  const question = req.query.question;
  var condition = question ? { question: { $regex: new RegExp(question), $options: 'i' } } : {};

  Question.find(condition)
    .then((data) => {
      res.send({ data: data });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Question.',
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Question.find({ quiz_id: id })
    .then((data) => {
      res.send({ data_size: data.length, data: data });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Question.',
      });
    });
};
