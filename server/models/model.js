const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Categories => Field => Type

const categories_model = new Schema({
    type: {type: String, default: "Investment"},
    color: {type: String, default: '#FCBE44'}
})

//Transactions => Field => {Name, type, amount, date}

const transaction_model = new Schema({
    name: {type: String, default: "Anonymous"},
    type: {type: String, default: "Investment"},
    amount: {type: Number},
    date: {type: Date, default: Date.now}
})

//Creating models inside mongoDB database

const Categories = mongoose.model("categories", categories_model);
const Transaction = mongoose.model("transactions", transaction_model);

exports.default = Transaction;
module.exports = {
    Categories,
    Transaction
}