// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

test('valid phone number', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(4);
});

test('valid phone number', () => {
  expect(isPhoneNumber('098-765-4321')).toBe(true);
});

test('invalid phone number', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('valid phone number', () => {
  expect(isPhoneNumber('0987654321')).toBe(false);
});

test('valid email', () => {
  expect(isEmail('user@example.com')).toBe(true);
});

test('valid email', () => {
  expect(isEmail('user@gmail.com')).toBe(true);
});

test('invalid email', () => {
  expect(isEmail('userexample.com')).toBe(false);
});

test('invalid email', () => {
  expect(isEmail('userexamplecom')).toBe(false);
});

test('valid strong password', () => {
  expect(isStrongPassword('StrongPass1')).toBe(true);
});

test('valid strong password', () => {
  expect(isStrongPassword('StrongPassword2')).toBe(true);
});

test('invalid strong password', () => {
  expect(isStrongPassword('1weak')).toBe(false);
});

test('invalid strong password', () => {
  expect(isStrongPassword('bad')).toBe(false);
});

test('valid date', () => {
  expect(isDate('12/31/2020')).toBe(true);
});

test('valid date', () => {
  expect(isDate('06/30/2005')).toBe(true);
});

test('invalid date', () => {
  expect(isDate('13/322/2020')).toBe(false);
});

test('invalid date', () => {
  expect(isDate('311/12/2020')).toBe(false);
});

test('valid hex color', () => {
  expect(isHexColor('#FFAABB')).toBe(true);
});

test('valid hex color', () => {
  expect(isHexColor('#e6ffaa')).toBe(true);
});

test('invalid hex color', () => {
  expect(isHexColor('FABB')).toBe(false);
});

test('invalid hex color', () => {
  expect(isHexColor('e6faa')).toBe(false);
});
