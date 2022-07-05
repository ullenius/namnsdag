"use strict";

var months = require("./data.js");

function getNames(date) {
    var month = date.getMonth(); // 0-indexed array
    var day = date.getDate();
    console.log("day", day); // debug

    var currentMonth = months[month];
    var names = currentMonth[day];
    return names;
}

var names = getNames( new Date() );
console.log("names:", names);

// servern
var http = require("http");
var server = http.createServer( function hello(req, res) {
    var names = getNames( new Date() );
    var json = JSON.stringify( names ? names : [] );
    res.end( json );
});

server.listen(4242, function foo() {
    console.log("Namnsdag-server is running...");
});
