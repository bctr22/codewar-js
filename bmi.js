function bmi(weight, height) {
    let a = weight/Math.pow(height,2); 
    if(a <= 18.5){
      return "Underweight";
    }else if(18.5 < a && a <= 25.0){
      return "Normal";
    }else if(25.0 < a && a <= 30.0){
      return "Overweight";
    }else{
      return "Obese";
    }
  }
  