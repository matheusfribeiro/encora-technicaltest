/*
this function figures out all the different ways to give someone change for a 
certain amount of centss (using quarters, dimes, nickels, and pennies). 

how it works:
 
checks how many quarters can fit in the amount.
for each possible number of quarters, it sees how many dimes fit in the remaining
same thing for nickels
left over are pennies
keeps track of all the different combinations in a SET so you dont get duplicates

*/
function makeChange(n) {
  const result = new Set();

  for (let quarters = 0; quarters <= Math.floor(n / 25); quarters++) {
    for (let dimes = 0; dimes <= Math.floor((n - quarters * 25) / 10); dimes++) {
      for (let nickels = 0; nickels <= Math.floor((n - quarters * 25 - dimes * 10) / 5); nickels++) {
        const pennies = n - (quarters * 25 + dimes * 10 + nickels * 5);

        // add combination to our result set
        result.add([quarters, dimes, nickels, pennies]); 
      }
    }
  }

  // return the set of all the different ways to make change
  return result;
}

// print the output
console.log(makeChange(12));