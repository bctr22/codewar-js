function duplicateCount(text){
    //...
    return new Set(text.toLowerCase().match(/(.)(?=.*\1)/g)).size;
  }
//test case
  console.log(duplicateCount('abcd1aabb')); //should equal 2 (a & b)