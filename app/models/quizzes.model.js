module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      quiz_name: String,
      author: String,
      image_cover: String,
      author_quiz: Number,
      rating: Number,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Quizzes = mongoose.model("quizzes", schema);
  return Quizzes;
};
