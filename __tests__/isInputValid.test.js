const { isInputValid } = require('../db.functions');
const { isNameValid } = require('../db.functions');
const { isDateValid } = require('../db.functions');

test(`provides validation for the date and name along with checking black input`, () => {
  expect(isInputValid("", isNameValid, "Field can not be blank")).toBe(console.info('\x1b[31m%s\x1b[0m', 'Input cannot be blank.'))
  expect(isInputValid("", isDateValid, "Field can not be blank")).toBe(console.info('\x1b[31m%s\x1b[0m', 'Input cannot be blank.'))
  expect(isInputValid("David", isNameValid, "Field can not be blank")).toBe(console.info('\x1b[33m%s\x1b[0m','Correct input'))
  expect(isInputValid("11/05/2023", isDateValid, "Field can not be blank")).toBe(console.info('\x1b[33m%s\x1b[0m','Correct input'))
  expect(isInputValid("Olgaa$#%%#^", isNameValid, "Name input shouldn't contain special characters!")).toBe(console.info('\x1b[31m%s\x1b[0m', "Name input shouldn't contain special characters!"))
  expect(isInputValid("11/05/2020", isDateValid, "Date can not be in the past")).toBe(console.info('\x1b[31m%s\x1b[0m', "Date can not be in the past"))
})


// (input, validateFunction, errorMessage)