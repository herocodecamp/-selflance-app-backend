const mongoose = require("mongoose");
// mongoose.set("strictQuery", false);


// database connection 
const dbConnection = () => {
  mongoose
    .connect(
      `mongodb://localhost:8000/`
      // ,
      // {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true
      // }
    )
    .then((data) => console.log("Connection successful"))
    .catch((error) => console.log(error));
};

module.exports = dbConnection;