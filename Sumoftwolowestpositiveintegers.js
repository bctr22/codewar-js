function sumTwoSmallestNumbers(numbers) {  
  return numbers.sort((a,b)=>a-b).slice(0,2).reduce((a,b)=>a+b,0);

}

console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]));