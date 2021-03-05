const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');


global.fetch = require('jest-fetch-mock');
let app;

describe('app', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
        app = require('../js/app.js')
    })

    afterEach(() => {
        fetch.resetMocks();
    })
    describe('addPatient', () => {
        test('it renders a new li on the page with the patient data', () => {
            const liCount = document.querySelectorAll('li').length;
            app.addPatient({ name: 'Joe', age: 72 });
            const newLiCount = document.querySelectorAll('li').length;
            expect(newLiCount).toEqual(liCount + 1)
            expect(document.querySelector('section#patients').textContent).toContain("Joe");
            expect(document.querySelector('section#patients').textContent).toContain(72);
           
        })
        })
    })
