// #258

const addDigits = (num) => {
  num = num.toString();
    
  if (num.length === 1) {
    return parseInt(num);
  }
  
  let newNum = 0;
  
  for (let i = 0; i < num.length; i++ ) {
    newNum += parseInt(num[i]);
  }
  
  return addDigits(newNum);
};