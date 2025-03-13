var countBits = function(n) {
    // Program Me
    return n.toString(2).split('1').length - 1;
  };
console.log(countBits(6680173375)); //should equal 20
