const Comment = require("../models/commentModel");
const Post = require("../models/postModel");




//business logic


exports.createComments = async (req, res) => {

  try {
    //fetch
    const { post, user, body } = req.body;

    //create a comment object
    const comment = new Comment({
      post, user, body
    })

    //save the new comment into database

    const savedComment = await comment.save();

    //change comment in post
    //first find post by id add the new comment in comment array


    const updatedPost = await Post.findByIdAndUpdate(post, { $push: { comments: savedComment._id } }, { new: true })

      .populate("comments")  //populate the comment array with comment document
      .exec();


    res.json({
      post: updatedPost,
    });


  }
  catch (err) {

    return res.status(500).json({
      error: "Error while creating comments"
    })

  }
}