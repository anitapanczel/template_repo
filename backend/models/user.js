const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: { type: String, required: true }, //empty is not enough
    content: { type: String }, //empty string is enough
    isDone: { type: Boolean, default: false },
});

const dashboardSchema = new mongoose.Schema({
    title: { type: String, required: true }, //empty is not enough
    todos: [todoSchema], // empty list is default?
});

const userSchema = new mongoose.Schema({
    username: { type: String }, //empty string is not enough
    providers: {
        google: { type: String },
        github: { type: String }
    },
    dashboards: [dashboardSchema], // empty list is default?
});

const User = mongoose.model('User', userSchema);

module.exports = User;