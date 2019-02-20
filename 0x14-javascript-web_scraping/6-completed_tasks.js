#!/usr/bin/node
const request = require('request');
const url = process.argv[2];
request(url, function (error, response, body) {
  if (error) { console.log(error); }
  let ob = {};
  body = JSON.parse(body);
  for (let i = 0; i < body.length; i++) {
    if (ob[body[i].userId]) {
      ob[body[i].userId] += 1;
    } else {
      ob[body[i].userId] = 1;
    }
  }
    console.log(ob);

});
