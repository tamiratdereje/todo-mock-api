

const mongoose = require('mongoose');



const TodosSchema = new mongoose.Schema({
    title: {
      type: String,
      required: [true, 'Please add a description'],
    },  
    description: {
        type: String,
        required: [true, 'Please add a description'],
      },
    status: {
      type: String,
      enum: ['Not Started', 'In Progress', 'Completed'],
      default: "Medium",
    },
    dueDate: {
      type: Date,
      default: Date.now,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON:{virtuals: true},
    toObject: {virtuals: true}
  
  });

  

module.exports = mongoose.model('Todos', TodosSchema);
