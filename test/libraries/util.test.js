const util = require('../../src/libraries/util');

// Validate util.isEmpty start

test('validate if string is empty passing BC', () => {
    expect(util.isEmpty("BC")).toBe(false);
});

test('validate if string is empty passing empty string', () => {
    expect(util.isEmpty("")).toBe(true);
});

test('validate if string is empty passing undefined', () => {
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

test('validate if string is agency 33', () => {
    expect(util.isAgency("33")).toBe(false);
});

test('validate if function isAgency passing undefined', () => {
    expect(util.isAgency(undefined)).toBe(false);
});

test('validate if function isAgency passing null', () => {
    expect(util.isAgency(null)).toBe(false);
});

// Validate util.isAgency end

// Validate util.isAccount start

test('validate if string is account 0098761', () => {
    expect(util.isAccount("0098761")).toBe(false);
});

test('validate if string is account 111', () => {
    expect(util.isAccount("111")).toBe(false);
});


test('validate if function isAccount passing undefined', () => {
    expect(util.isAccount(undefined)).toBe(false);
});

test('validate if function isAccount passing null', () => {
    expect(util.isAccount(null)).toBe(false);
});

// Validate util.isAccount end

// Validate util.isNif start

test('validate if string is nif 0098761', () => {
    expect(util.isNif("0098761")).toBe(false);
});

test('validate if string is account 111', () => {
    expect(util.isNif("111")).toBe(false);
});

test('validate if function isNif passing undefined', () => {
    expect(util.isNif(undefined)).toBe(false);
});

test('validate if function isNif passing null', () => {
    expect(util.isNif(null)).toBe(false);
});

test('validate if function isNif passing null', () => {
    expect(util.isNif(null)).toBe(false);
});

test('validate if function isNif passing 078.024.328-87', () => {
    expect(util.isNif('078.024.328-87')).toBe(true);
});

test('validate if function isNif passing 078.024.328-87', () => {
    expect(util.isNif('078.024.328-87')).toBe(true);
});

// Validate util.isNif end


// Validate util.validateEmail start

test('validate function validateEmail passing teste@gmail.com', () => {
    expect(util.validateEmail('teste@gmail.com')).toBe(true);
});

test('validate function validateEmail passing teste@gmail.com', () => {
    expect(util.validateEmail('teste@gmail.com')).toBe(true);
});

test('validate function validateEmail passing testegmail.com', () => {
    expect(util.validateEmail('testegmail.com')).toBe(false);
});

test('validate function validateEmail passing empty string', () => {
    expect(util.validateEmail('')).toBe(false);
});

test('validate function validateEmail passing null', () => {
    expect(util.validateEmail(null)).toBe(false);
});

test('validate function validateEmail passing undefined', () => {
    expect(util.validateEmail(undefined)).toBe(false);
});

// Validate util.validateEmail end