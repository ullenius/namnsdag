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

                var mapped = days.map( function map(day) {
                    return func(day);
                });
                //console.log("mapped", mapped);
                var result = days.map( func ).reduce( function sum(a,b) {
                    return a + b;
                });
                sum += result;
                console.log("result", result);

/*
                days.forEach( function counter(day) {
                    var count = func(day);
                    sum = sum + count;
                });
                */
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

describe("hasNamelessDays", function validAmount() {

    test("Correct amount of nameless days", function assert() {
        var expected = 7;
        var actual = countDays(months, namelessDays);
        expect( actual ).toBe( expected );
    });
});

describe("hasCorrectNamelessDays", function validDays() {

    test("Nameless days match", function assert() {
        var [
                january,
                february,
                mars,
                april,
                may,
                june,
                july,
                august,
                september,
                october,
                november,
                december
            ] = months;

        var nyarsDagen = january[1];
        var kyndelsmassoDagen = february[2];
        var skottdagen = february[29];
        var mariaBebadelsedag = mars[25];
        var johannesDoparensDag = june[24];
        var allhelgonadagen = november[1];
        var juldagen = december[25];

        var namelessDays = [ 
            nyarsDagen, kyndelsmassoDagen, skottdagen,
            mariaBebadelsedag, johannesDoparensDag,
            allhelgonadagen, juldagen];
        
        namelessDays.forEach( function check(element) {
            expect(element).toBeUndefined();
        });
    });
});
