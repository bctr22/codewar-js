function swap (string) {
    //aeiou
    return string.replace(/[aeiou]/g, a => a.toUpperCase());
    
  }