const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  secondName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
//   isAdmin: { type: Boolean, default: false },
//   ideas: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Idea'
//   }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
