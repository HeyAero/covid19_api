const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');


describe('index.html', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })

    describe('head', () => {
        test('it has a title', () => {
            const title = document.querySelector('head title');
            expect(title).toBeTruthy();
            expect(title.textContent).toBe("Covid19 Server!")
        })
    })

    describe('body', () => {

        describe('form', () => {
            let form;
            let nameInput, ageInput, submitBtn;
            beforeEach(() => {
                form = document.querySelector('#new-patient-form')
                nameInput = form.querySelector('#name');
                ageInput = form.querySelector('#age')
                submitBtn = form.querySelector('#submitBtn');
            })
    
            test('it exists', () => {
                expect(form).toBeTruthy();
            });
    
            describe('name input', () => {
                test('it has an id of "name"', () => {
                    expect(nameInput).toBeTruthy();
                })

                test('it is a text input"', () => {
                    expect(nameInput.getAttribute('type')).toBe('text')
                })
        
                test('it has a label"', () => {
                    expect(document.querySelector('[for="name"]')).toBeTruthy();
                })
            })

        describe('age input', () => {
                test('it has an id of "age"', () => {
                    expect(ageInput).toBeTruthy();
                })

                test('it is a number input"', () => {
                    expect(ageInput.getAttribute('type')).toBe('number')
                })
        
                test('it has a label"', () => {
                    expect(document.querySelector('[for="age"]')).toBeTruthy();
                })
            })
    
            describe('submit button', () => {
                test('it says "New patient!', () => {
                    expect(submitBtn.value).toBe('Add patient');
                })
            })

        })

        test('it has a section to display vaccinated patients', () => {
            expect(document.querySelector('section#patients')).toBeTruthy();
        })
    })


})