const { fetchBreedDescription } = require('../test/breedFetcher');
let args = process.argv.slice(2);
const breedType = args[0];

fetchBreedDescription(breedType, (error, success) => {
  
  if (error) {
    console.log(`Error fetching details`, error);
  } else {
    console.log('Success', success);
  }
}); 










