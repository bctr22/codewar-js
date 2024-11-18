function getSum(a, b){
    const s = Math.min(a,b);
    const e = Math.max(a,b);
    return Array.from({length:e-s+1},(_,i) => s+i).reduce((sum,cur)=>sum+cur,0);
}

console.log(getSum(2,2));