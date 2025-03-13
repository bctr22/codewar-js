function digitalRoot(n) {
    // ...
    let sum = n.toString().split("")
                          .reduce((sum, digit) => sum + parseInt(digit), 0);
    return sum > 9 ? digitalRoot(sum) : sum;
  }

//test cases
console.log(digitalRoot(16));
console.log(digitalRoot(942));
console.log(digitalRoot(132189));
console.log(digitalRoot(493193));
