const numbers = [1, 3, 5, 2, 6, 7, 5];
console.log(numbers);
numbers.reverse();
console.log(numbers);

// another type
const number = [11, 3, 5, 2, 77, 43, 6, 7, 5];
console.log(number);
const reversed = number.reverse();
console.log(reversed);

// 
const rev_numbers=[];
for(const num of number){
    rev_numbers.unshift(num);
}
console.log(rev_numbers);

// reversed side
const rev_rev_number=[];
for(let i=number.length-1; i>=0; i--){
    const num = number[i];
    console.log(num);
    rev_rev_number.push(num);
}
console.log(rev_rev_number);