
let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');
let sharedObject = require("../shared-object").sharedObject;

document.body.innerHTML = `<div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>`;

describe('DOM testing',function () {
    it("DOM elements should exist", function() {
        let nameInput = $('#name');
        let incomeInput = $('#income');
        expect(nameInput).to.exist;
        expect(incomeInput).to.exist;
    });
});

describe('sharedObject properties',function () {
    it("name and income should be null initially", function() {
        expect(sharedObject.name).equal(null, "name was not null initially");
        expect(sharedObject.income).equal(null, "income was not null initially");
    });
});

describe('sharedObject changeName()',function () {
    it("should NOT change name property with invalid params", function() {
        let expectedName = sharedObject.name;
        sharedObject.changeName('');

        expect(sharedObject.name).equal(expectedName);

        let nameInput = $('#name');
        expect(nameInput.val()).equal(expectedName)
    });

    it("should change name property with valid params", function() {
        let expectedName = 'Pesho';
        sharedObject.changeName(expectedName);

        expect(sharedObject.name).equal(expectedName);

        let nameInput = $('#name').val();
        expect(nameInput.val()).equal(expectedName)
    });
});