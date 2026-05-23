// userController.js
const userModel = require('../models/userModel');

exports.getAllUsers = (req, res) => {
  res.json(userModel.getAll());
};

exports.getUserById = (req, res) => {
  const user = userModel.getById(parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
};

exports.createUser = (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ error: 'Name and email required' });
  const id = userModel.getAll().length + 1;
  const user = { id, name, email };
  userModel.create(user);
  res.status(201).json(user);
};

exports.updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const updated = userModel.update(id, req.body);
  if (!updated) return res.status(404).json({ error: 'User not found' });
  res.json(updated);
};

exports.deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  const deleted = userModel.delete(id);
  if (!deleted) return res.status(404).json({ error: 'User not found' });
  res.status(204).send();
};