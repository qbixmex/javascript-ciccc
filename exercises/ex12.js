const checkPalindrome = (text) => {
  let result = "";
  for (let i = text.length - 1; i >= 0; i--) {
    result += text[i];
  }
  return (text == result) ? true : false;
};

console.log();

let word = "tenet";
let result = checkPalindrome(word);

console.log(`Is "${word}" a palindrome ?`, result ? 'Yes' : 'No');

word = "orange";
result = checkPalindrome(word);

console.log(`Is "${word}" a palindrome ?`, result ? 'Yes' : 'No');
