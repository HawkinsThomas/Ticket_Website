module.exports = {
  getTable: (query) => {
    return new Promise((resolve, reject) => {
      db.query(query, (err, result) => {
        if (err) {
          reject(new Error('query error'));
        } else if (result.length === 0) {
          resolve(result);
        } else {
          const tableHeaders = Object.keys(result[0]);
          const tableData = result.map(row => Object.values(row));
          resolve(
            {
              tableHeaders,
              tableData,
            },
          );
        }
      });
    });
  },
};
