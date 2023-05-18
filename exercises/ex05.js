/*

Size	Width	Length	Sleeve
S	    18"	    28"	    8.13"
M	    20"	    29"	    8.38"
L	    22"	    30"	    8.63"
XL	    24"	    31"	    8.88"
2XL	    26"	    33"	    9.63"
3XL	    28"	    34"	    10.13"

Use the sizing chart above, create a series of logical expressions
that prints the size of a t-shirt based on the
measurements of shirtWidth, shirtLength, and shirtSleeve.
Valid sizes include S, M, L, XL, 2XL, and 3XL.

For example, if...

const shirtWidth = 23; // size L (large)
const shirtLength = 30; // size L (large)
const shirtSleeve = 8.71; // size L (large)

Then print L to the console. 

If shirtWidth, shirtLength, and shirtSleeve don't fit within the range of acceptable values for a specific size, then print NA to the console. For example, if...

var shirtWidth = 18; // size S (small)
var shirtLength = 29; // size M (medium)
var shirtSleeve = 8.47; // size M (medium)
Then print N/A to the console because the measurements don't all match up with one particular size.

*/

const sw = 24;
const sl = 31;
const ss = 8.88;

if ((sw === 18) && (sl === 28) && (ss === 8.13)) { // check for small
  console.log("S");
} else if ((sw === 20) && (sl === 29) && (ss === 8.13)) {
  console.log("M");
} else if ((sw === 22) && (sl === 30) && (ss === 8.63)) {
  console.log("L");
} else if ((sw === 24) && (sl === 31) && (ss === 8.88)) {
  console.log("XL");
} else if ((sw === 26) && (sl === 33) && (ss === 9.63)) {
  console.log("2XL");
} else if ((sw === 28) && (sl === 34) && (ss === 10.13)) {
  console.log("3XL");
} else {
  console.log("na");
}
