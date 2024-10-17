function isIsogram(str){
    str =  str.toLowerCase().split('');
    if(str.length != new Set(str).size){
      return false;
    }
    return true;  
}


