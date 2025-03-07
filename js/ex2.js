const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function oddNums(nums) {
  return nums.filter(num => num % 2 !== 0)
}

function divisible_by_2_or_5(nums) {
  return nums.filter(num => num % 2 === 0 || num % 5 === 0);
}

function divisible_by_3_squared(nums) {
  return nums.filter(num => num % 3 === 0).map(num => num ** 3);
}

console.log(oddNums(nums)); 
console.log(divisible_by_2_or_5(nums)); 
console.log(divisible_by_3_squared(nums));