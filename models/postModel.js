const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Like", //reference to post model

  }],
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment", //reference to post model

  }],
  // user: {
  //   type: String,
  //   required: true,
  // },

});

module.exports = mongoose.model("Post", postSchema);

