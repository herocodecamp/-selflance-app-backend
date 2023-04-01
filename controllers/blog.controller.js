const Blogs = require("../models/Blogs");
const Users = require("../models/User");

exports.blogController = async (req, res) => {

  try {
    const newBlog = new Blogs(req.body);
    await newBlog.save();
    res.status(200).json({ message: "successfully create a blog" });
  } catch (error) {
    res.status(500).json({ massage: error.massage, type: error.name });
    console.log(error);
  }
};

exports.findBlogController = async (req, res) => {

  try {
    const result = await Blogs.find({});
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ massage: error.massage, type: error.name });
  }
};

exports.deleteBlogController = async (req, res) => {
  
  try {
    const deleteBlog = await Blogs.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "successfully delete a blog" });
  } catch (error) {
    res.status(500).json({ massage: error.massage, type: error.name });
  }
};
