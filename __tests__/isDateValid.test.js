const { isDateValid } = require('../db.functions');

test(`input should be a date and the date can only be today or in future`, () => {
  expect(isDateValid("1233233123")).toBe(false)
  expect(isDateValid("hello")).toBe(false)
  expect(isDateValid("12/01/2023")).toBe(true)
  expect(isDateValid("21/09/2050")).toBe(true)
  expect(isDateValid("01/01/2021")).toBe(false)
})