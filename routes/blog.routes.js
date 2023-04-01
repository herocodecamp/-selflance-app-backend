const express = require("express");
const { blogController, findBlogController, deleteBlogController, updateBlogController } = require("../controllers/blog.controller");
const Router = express.Router();

Router.route('/:id')
.post(blogController)
.delete(deleteBlogController)
.put(updateBlogController)

Router.get('/', findBlogController)

module.exports = Router;