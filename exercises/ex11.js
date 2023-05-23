const reverse = (text) => {
  let result = "";
  for (let i = text.length - 1; i >= 0; i--) {
    result += text[i];
  }
  console.log(result);
  return result;
};

const reversedName = reverse("hello");

console.log("=".repeat(50));

const reverse2 = (text) => {
  let result = "";
  for (let i = text.length - 1; i >= 0; i--) {
    result += text[i];
  }
  console.log(result);
};

reverse2(reversedName);
