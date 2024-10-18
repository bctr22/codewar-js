function XO(str) {
    //code here
  let a = str.toLowerCase().split('x').length -1;
  let b = str.toLowerCase().split('o').length -1;
  if(a === b || (a < 0 && b < 0)){
    return true;
  }else{
    return false;
  }
}

