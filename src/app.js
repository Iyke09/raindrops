module.exports = {
  rainDrop: (num) => {
    let arr = [];
    let result = [];
    let rainDropArr = [];
    //if value entered is undefined
    if(num === undefined){
      return 'please enter a value'
    }
    //if value entered is not a number
    if(typeof(num) !== 'number'){
      return 'please enter a number'
    }
    //if value entered is equal to 1
    if(num === 1){
      return 1
    }
    //if value entered is less than 0 or negative
    if(num <= 0){
      return 'please enter a value > 0'
    }
    let number = num;
    for(let i = 2;i <= number;i++){
      while(number % i === 0){//check if there is a remainder
        arr.push(i);
        number = number / i
      }
    }
    for(let x of arr){
      //check if x = 3 and is in result array
      if(x === 3 && result.indexOf(x) === -1){
        result.push(x)
        rainDropArr.push('Pling')
      }
      //check if x = 5 and is in result array
      if(x === 5 && result.indexOf(x) === -1){
        result.push(x)
        rainDropArr.push('Plang')
      }
      if(x === 7 && result.indexOf(x) === -1){
        result.push(x)
        rainDropArr.push('Plong')
      }
      //if 3 or 5 or 7 is in arr
      if(arr.indexOf(3) === -1 && arr.indexOf(5) === -1 && arr.indexOf(7) === -1){
        return num
      }

    }
    return rainDropArr.join('')
  }
}
