function betterThanAverage(classPoints, yourPoints) {
    //   var t = 0;
    //   for (let i = 0; i < classPoints.length; i++){
    //     t += classPoints[i];
    //   }
    //   var avg = t/classPoints.length;
    //   return true ? yourPoints > avg : yourPoints < avg;
      
      const avg = classPoints.reduce((sum, score) => sum + score, 0) / classPoints.length;
      return yourPoints > avg;
    }