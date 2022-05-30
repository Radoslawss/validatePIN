function validatePIN (pin) {
    if(pin.length == 4 || pin.length == 6){
        if(/^[0-9]+$/.test(pin)){
            if(Math.sign(pin)==1 || Math.sign(pin)==0){
            return true;
            }
        }else{
            return false;
        }
    }else{
      return false;
    }
  }

/*
console.log(validatePIN("1234"));
console.log(validatePIN("123412"));
console.log(validatePIN("0000"));
console.log(validatePIN("124"));
console.log(validatePIN("-1234"));
console.log(validatePIN("123e"));
console.log(validatePIN(".123"));
*/