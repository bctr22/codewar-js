function findShort(s){
  
  return Math.min(...s.split(' ').map((x) => x.length));
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));