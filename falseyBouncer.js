// Falsy Bouncer
// Remove all falsy values from an array
// falsy values in JavaScript are false, null, 0, "", undefined and NaN

// const bouncer = (arr) => {
//   let trueOnes = [];
//
//   for (let item of arr) {
//     if (item) trueOnes.push(item);
//   }
//    return trueOnes;
// }
//
// bouncer([7, "ate", "", false, 9]);
//
// console.log(bouncer([7, "ate", "", false, 9]));

function bouncer (arr) {
  return arr.filter(function(item) {
    return item;
  });
}

bouncer([7, "ate", "", false, 9]);

console.log(bouncer([7, "ate", "", false, 9]));
