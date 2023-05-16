var number = 5;

/**
 * Prints a number and add 2 to that one.
 */
function addTwo() {

  console.log("Running addTwo")

  const additionBy = 2;
  let sum;

  if ( number < 10 ) { //* TRUE
    sum = number + additionBy;
    console.log(sum);
  } else { //* FALSE
    sum = number;
    console.log(sum);
  }

  console.log("Final Sum:", sum);

}

addTwo();
