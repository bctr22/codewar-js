function countPositivesSumNegatives(input) {
    if(!input || input.length === 0)return [];
    const a = input.filter(n => n > 0).length;
    const b = input.reduce((sum,n) => n < 0 ? sum + n : sum,0);
    
    return [a,b];
  }