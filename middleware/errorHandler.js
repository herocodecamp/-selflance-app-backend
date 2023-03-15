const app = require("../app");
const multer = require("multer");

const ErrorHandler = () => {

  // NotFound ErrorHandler
  app.use("*", (req, res, next) => {
    const err = new Error("Route Not Found");
    err.statusCode = 404;
    next(err);
  });


  // global ErrorHandler


  app.use(async (err, req, res, next) => {
    if (err instanceof multer.MulterError) {
      res.status(500).send("There was an upload error");
    }
  
    if (req.file) {
      await unlink(req.file.path);
    }
    res.status(err.statusCode || 500).json({
      success: false,
      message: err.message,
      error: err.stack,
    });
  });
 
};

module.exports = ErrorHandler;
