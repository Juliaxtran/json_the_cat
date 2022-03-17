const request = require('request');



const fetchBreedDescription = (breedType, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedType}`;
  request(url, (error, response, body) => {

    if (error) {
      return callback(`Failed to request details: ${error}`,null);
    }

    const data = JSON.parse(body);
    console.log(data);
    if (data[0]) {
      return callback(null, data[0].description);
    } else {
      return callback(`Breed not found`, null);
    }
   
  });
};



module.exports = { fetchBreedDescription };

