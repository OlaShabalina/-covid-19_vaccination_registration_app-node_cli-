const { isNameValid } = require('../db.functions'); 

test(`name should not contain special characters`, () => {
  expect(isNameValid("Test!@#")).toBe(false)
  expect(isNameValid("Olga")).toBe(true)
})