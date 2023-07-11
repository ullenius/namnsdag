"use strict";

var http = require("http");
var months = require("./data.js");
var PORT = 4242;

var server = http.createServer();

var namesToday = function(req, res) {
    var names = getNames( new Date() );
    var json = JSON.stringify( names || [] );
    res.setHeader("Content-Type", "application/json");
    setCors(res);
    res.write( json );
    res.end();
};

function setCors(response) {
    response.setHeader("Access-Control-Allow-Origin", process.env.ALLOW_ORIGIN);
    response.setHeader("Access-Control-Allow-Methods", process.env.ALLOW_METHODS);
}

function getNames(date) {
    var month = date.getMonth();
    var day = date.getDate();

    var currentMonth = months[month]; // 0-indexed array
    var names = currentMonth[day];
    return names;
}

server.on("request", namesToday);

server.listen(4242, function run() {
    console.log(`Namnsdag-server is running (port ${PORT})...`);
});
