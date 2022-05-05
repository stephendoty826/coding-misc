
function makeInputVerifier(minimum, maximum){

  const verify = (inputValue) => {
    
    if(inputValue < minimum){
      return "Input is less than minimum value"
    }
    else if(inputValue > maximum){
      return "Input is more than maximum value"
    }
    else if(inputValue >= minimum && inputValue <= maximum){
      return "Input is in range"
    }
  }
  
  return verify
}

let verify = makeInputVerifier(3, 10)

verify(20)
