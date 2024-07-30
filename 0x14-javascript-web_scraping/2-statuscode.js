#!/usr/bin/node

const request = require('request');

const url = process.argv[2];

if (!url) {
  console.error('Usage: node get-status-code.js <URL>');
  process.exit(1);
}

request(url, function (error, response, body) {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }
  console.log('code:', response.statusCode);
});

