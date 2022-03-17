const { breedFetcher } = require('./breedFetcher')
let args = process.argv.slice(2);
const breedType = args[0];

 breedFetcher(breedType, (error, success) => {
  
 if(error){
   console.log(`Error fetching details`, error);
 } else {
   console.log('Success', success);
 }

}) 










