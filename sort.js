const numbers =[34, 6, 2, 7, 1, 3, 12];
// Ascending --->smaller to larger
// Descending --->larger to smaller
const number_asc = [...numbers].sort(function(a, b){return a-b});
const number_dsc = [...numbers].sort(function(a, b){return b-a});
console.log(number_asc);
console.log(number_dsc);