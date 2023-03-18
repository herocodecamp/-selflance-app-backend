const mongoose = require("mongoose");
// mongoose.set("strictQuery", false);


// database connection 
const dbConnection = () => {
  mongoose
    .connect(
      `${process.env.DB_URL}`,{
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
    .then((data) => console.log("Connection successful"))
    .catch((error) => console.log(error));
};

module.exports = dbConnection;