const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (!error) {
      callback(data.trim());
    } else if (error.code === 'ENOENT') {
      callback(null);
    }
  });
};

module.exports = breedDetailsFromFile;