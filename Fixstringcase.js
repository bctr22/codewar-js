function solve(s){
    return s.split('').reduce((a,b) => a + (b === b.toUpperCase() ? 1 : -1),0) > 0 ? s.toUpperCase() : s.toLowerCase()
}