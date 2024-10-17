function getMiddle(s)
{
  let len = s.length;  
  let pos = Math.floor(len / 2);  
  if (len % 2 === 0) {
    return s.substring(pos - 1, pos + 1); 
  }else{
     return s.charAt(pos);
  }
}
