const mongoose = require('mongoose');
const {Schema} = mongoose;

const orderSchema = new Schema({
    dateCreated: {type: Date, default: Date.now},
    createdBy: String,
    orderLines: [Object]
})

mongoose.model('orders',orderSchema);