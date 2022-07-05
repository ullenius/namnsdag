"use strict";

var months = require("../data.js");

function countDays(months) {
        var sum = 0;

        months.forEach( function sumMonth(month) {
            var days = Object.values(month);
            days.forEach( function counter(day) {
                var count = day ? day.length : 0;
                sum = sum + count;
            });
        });
        return sum;
}
