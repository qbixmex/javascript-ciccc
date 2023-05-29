/*
  function countDown(number) {
    for (let index = number; index >= 1; index--) {
      console.log(index);
    }
    return "DONE";
  }

  const result = countDown(10);

  console.log(result);
*/

function countDownRecursive(number) {
  if (number < 1) {
    console.log("DONE");
    return;
  }
  console.log(number);
  countDownRecursive(number - 1);
}

countDownRecursive(10);
