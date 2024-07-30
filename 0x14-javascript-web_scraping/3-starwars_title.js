#!/usr/bin/node

const request = require('request');

// Get the movie ID from the command-line arguments
const movieId = process.argv[2];

if (!movieId) {
  console.error('Usage: node get-movie-title.js <movie_id>');
  process.exit(1);
}

// Define the API endpoint with the given movie ID
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Make a GET request to the API
request(apiUrl, function (error, response, body) {
  if (error) {
    console.error('Error fetching data:', error);
    process.exit(1);
  }

  // Check if the response status code is 200 (OK)
  if (response.statusCode !== 200) {
    console.error(`Failed to fetch data. Status code: ${response.statusCode}`);
    process.exit(1);
  }

  try {
    // Parse the response body as JSON
    const data = JSON.parse(body);

    // Print the movie title if it exists, otherwise print an error message
    if (data.title) {
      console.log(data.title);
    } else {
      console.error('Movie not found');
    }
  } catch (e) {
    console.error('Error parsing JSON:', e);
    process.exit(1);
  }
});

