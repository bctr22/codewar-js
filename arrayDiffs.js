function arrayDiff(a, b) {
    let rel;
    return rel = a.filter(x => !b.includes(x));  
  }

//test cases
console.log(arrayDiff([1,2,3,4,5],[1]));