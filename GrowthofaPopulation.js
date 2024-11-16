function nbYear(p0, percent, aug, p, y = 0) { 
    if(p0>=p){
      return y;
    }
    return nbYear(Math.floor(p0 *(1 + percent / 100)+aug), percent, aug, p, y + 1);
  }

  console.log(nbYear(1000,2,50,1200));