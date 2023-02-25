module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      quiz_id: String,
      question: String,
      option_a: String,
      option_b: String,
      option_c: String,
      option_d: String,
      correct_answer: String,
      attachment_url: String,
      score: Number,
      time: Number,
    },
    { timestamps: true }
  );

  schema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Question = mongoose.model('question', schema);
  return Question;
};
