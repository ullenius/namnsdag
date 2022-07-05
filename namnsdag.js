"use strict";

var http = require("http");
var months = require("./data.js");

var server = http.createServer();

var namesToday = function(req, res) {
    var names = getNames( new Date() );
    var json = JSON.stringify( names ? names : [] );
    res.setHeader("Content-Type", "application/json");
    res.write( json );
    res.end();
};

function getNames(date) {
    var month = date.getMonth();
    var day = date.getDate();

    var currentMonth = months[month]; // 0-indexed array
    var names = currentMonth[day];
    return names;
}

server.on("request", namesToday);

server.listen(4242, function run() {
    console.log("Namnsdag-server is running...");
});
