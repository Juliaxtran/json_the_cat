const request = require('request');
let args = process.argv.slice(2);
const breedType = args[0];
console.log(breedType);






const breedfetcher = () => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedType}`, (error, response, body) => {

    if (error) {
      callback(`Failed to request details: ${error}`,null);
    }

    const data = JSON.parse(body);
    console.log(data[0].description);
    console.log(`Type of data`,typeof data);
  });
};

breedfetcher();


