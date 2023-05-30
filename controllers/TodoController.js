const TodoModel = require("../models/TodoModel");

module.exports.getTodo = async (req, res) => {
    const todo = await TodoModel.find();
    res.send(todo);
}
module.exports.saveTodo = async (req, res) => {
    const { text } = req.body;
    TodoModel.create({ text })
        .then((data) => {
            res.send(data)
        })
        .catch(error => console.log(error))
}

module.exports.updateTodo = async (req, res) => {
    const { _id, text } = req.body;

    TodoModel.findByIdAndUpdate(_id, { text })
        .then(() => res.set(201).send({ message: "Updated Successfully" }))
        .catch(error => console.log(error))
}

module.exports.deleteTodo = async (req, res) => {
    const { _id, text } = req.body;

    TodoModel.findByIdAndDelete(_id, { text })
        .then(() => res.set(201).send({ message: "Deleted Successfully" }))
        .catch(error => console.log(error))
}