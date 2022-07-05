"use strict";

var http = require("http");
var months = require("./data.js");


// server
var server = http.createServer();

var namesToday = function(req, res) {
    var names = getNames( new Date() );
    var json = JSON.stringify( names ? names : [] );
    res.end( json );
};

function getNames(date) {
    var month = date.getMonth(); // 0-indexed array
    var day = date.getDate();
    console.log("day", day); // debug

    var currentMonth = months[month];
    var names = currentMonth[day];
    return names;
}

server.on("request", namesToday);

server.listen(4242, function run() {
    console.log("Namnsdag-server is running...");
});
