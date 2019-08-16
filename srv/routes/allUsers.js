const { getTable } = require('../db/getTable');

module.exports = {
  getAllUsers: (req, res) => {
    const query = 'SELECT username FROM user';
    getTable(query)
      .then(data => res.json(data));
  },
};
