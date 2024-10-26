function twoDecimalPlaces(n) {
    return Math.round(n*100)/100;
  }

//alternative
//const twoDecimalPlaces = n =>  Number(n.toFixed(2))