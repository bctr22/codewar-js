const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    const max = mpg * fuelLeft
    return max >= distanceToPump
  };