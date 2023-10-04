import axios from 'axios';

// Replace 'some_endpoint' and 'some_parameter' with your actual endpoint and parameter values
const endpoint = 'https://run.mocky.io/';
const parameter = 'v3/d30d6982-86f1-4d4e-a58f-777fe98e2b90';

// Add any query parameters as an object

// Make a request to your Express server's proxy route
axios.get(`/api/production-api/${endpoint}`)
  .then((response) => {
    console.log(response.data); // Handle the response data
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });

