function checkExam(array1, array2) {
    let score = 0;
    for(let i = 0; i< array1.length; i++){
      score += array2[i] === array1[i] ? 4 : (array2[i] === "" ? 0 : -1);
    }
    return Math.max(score,0);
  }