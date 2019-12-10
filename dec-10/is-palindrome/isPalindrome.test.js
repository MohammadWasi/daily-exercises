import { isPalindrome } from "./isPalindrome";

test('" aba" is not a palindrome', () => {
  expect(isPalindrome(" aba")).toBeFalsy();
});

test('"aba " is not a palindrome', () => {
  expect(isPalindrome("aba ")).toBeFalsy();
});

test('"greetings" is not a palindrome', () => {
  expect(isPalindrome("greetings")).toBeFalsy();
});

test('"1000000001" is a palindrome', () => {
  expect(isPalindrome("1000000001")).toBeTruthy();
});

test('"race a car" is not a palindrome', () => {
  expect(isPalindrome("race a car")).toBeFalsy();
});
