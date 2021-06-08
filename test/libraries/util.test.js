const util = require('../../src/libraries/util');

// Validate util.isEmpty start

test('validate if string is empty passing BC', () => {
    expect(util.isEmpty("BC")).toBe(false);
});

test('validate if string is empty passing empty string', () => {
    expect(util.isEmpty("")).toBe(true);
});

test('validate if string is empty passing undefine', () => {
    expect(util.isEmpty(undefined)).toBe(true);
});

test('validate if string is empty passing null', () => {
    expect(util.isEmpty(null)).toBe(true);
});

// Validate util.isEmpty end

// Validate util.isAgency start

test('validate if string is empty passing null', () => {
    expect(util.isAgency("0001")).toBe(true);
});

test('validate if string is empty passing null', () => {
    expect(util.isAgency("33")).toBe(false);
});

// Validate util.isAgency end