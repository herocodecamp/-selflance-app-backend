const mongoose = require("mongoose");
mongoose.set("strictQuery", false);


// database connection 
const dbConnection = () => {
  mongoose
    .connect(
      `${process.env.DB_URL}`
    )
    .then((data) => console.log("Connection successful"))
    .catch((error) => console.log(error));
};

module.exports = dbConnection;