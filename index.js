function hasTargetSum(array, target) {
  // Write your algorithm here
  for (i = 0; i < array.length; i++) {
    let x = array[i]
    for (t = i + 1; t < array.length; t++) {
      const sum = x + array[t]
      if (sum === target) {
        return true
      }
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  The variable
  let takes the first number in the array and iterates through the array, adding each number to the first number.If the sum equals target,
  return true.
  The variable
  for the second number in the array iterates through the remainder of the array, adding each number to the second number, and
  if the sum equals target,
  return true.
  The hasTargetSum function will continue until it 's gone through each number in the array, except for the last one. Finally, it returns false at the end of the function.
*/

/*
  Add written explanation of your solution here
  The
  function has an input array that adds each number to each other number.If that number equals the target number, the
  function should
  return true. Otherwise, the
  function should
  return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
