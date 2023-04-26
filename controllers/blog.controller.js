const Blogs = require("../models/Blogs");
const Users = require("../models/User");

exports.blogController = async (req, res) => {
  try {
    const newBlog = new Blogs(req.body);
    await newBlog.save();
    res.status(200).json({ message: "successfully create a blog" });
  } catch (error) {
    res.status(500).json({ massage: error.massage, type: error.name });
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

exports.updateBlogController = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Blogs.findByIdAndUpdate(id, { $set: req.body });
    res.status(200).json({ message: "successfully updated blog" });
  } catch (error) {
    res.status(500).json({ massage: error.massage, type: error.name });
  }
};