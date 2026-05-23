// userModel.js
// In-memory user model

let users = [];

module.exports = {
  getAll: () => users,
  getById: (id) => users.find(u => u.id === id),
  create: (user) => {
    users.push(user);
    return user;
  },
  update: (id, data) => {
    const user = users.find(u => u.id === id);
    if (!user) return null;
    Object.assign(user, data);
    return user;
  },
  delete: (id) => {
    const idx = users.findIndex(u => u.id === id);
    if (idx === -1) return false;
    users.splice(idx, 1);
    return true;
  }
};