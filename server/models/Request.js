const mongoose = require('mongoose');
const {Schema} = mongoose;

const requestSchema = new Schema ({
    user: String,
    type: String,
    materials: [Object],
    status: String,
    requestedDate: Date,
    dueDate: Date
})

mongoose.model('requests', requestSchema);