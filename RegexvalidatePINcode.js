function validatePIN (pin) {
    return typeof pin === 'string' && Number.isInteger(+pin) && (pin.length === 4 || pin.length === 6) && /^[0-9]+$/.test(pin);
   }