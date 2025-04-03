const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/express", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  image: String,
});
const user = mongoose.model("user", userSchema);
module.exports = user;
