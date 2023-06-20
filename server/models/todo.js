const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Create schema for todo
const TodoSchema = new Schema({
  action: {
    type: String,
    required: true,
  },
});
// Create model for todo
module.exports = mongoose.model('todo', TodoSchema);