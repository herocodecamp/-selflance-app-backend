const express = require("express");
const { blogController, findBlogController, deleteBlogController } = require("../controllers/blog.controller");
const Router = express.Router();

Router.route('/:id')
.post(blogController)
.delete(deleteBlogController)

Router.get('/', findBlogController)

module.exports = Router;