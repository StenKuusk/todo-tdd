const TodoModel = require('../models/todo.model');

const createTodo = async (req, res, next) => {
    try {
        const createdModel = await TodoModel.create(req.body);
        res.status(201).json(createdModel);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createTodo };