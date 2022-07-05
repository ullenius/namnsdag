"use strict";

var months = require("../data.js");

var daysWithNames = function count( nameArr) {
    return nameArr ? nameArr.length : 0;
};

var namelessDays = function count( nameArr) {
    return nameArr ? 0 : 1;
};

var countDays = function numberOfDays(months, func=daysWithNames) {
            var sum = 0;

            months.forEach( function sumMonth(month) {
                var days = Object.values(month);
                days.forEach( function counter(day) {
                    var count = func(day);
                    sum = sum + count;
                });
            });
            return sum;
};

describe("hasAllNames", function validAmount() {
    test("Correct amount of names for 2022 calendar", function assert() {
            var expected = 627;
            var actual = countDays(months);
            expect( actual ).toBe( expected )
    });
});
