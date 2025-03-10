function openOrSenior(data){x``
    return data.map((a)=> a[0]>=55 && a[1]>7 ? 'Senior' : 'Open');
  }