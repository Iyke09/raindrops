module.exports = {
rainDrop: (num) => {
  let arr = [];
  let res = [];
  let rain = [];
  if(num === undefined){
    return 'please enter a value'
  }
  if(typeof(num) !== 'number'){
    return 'please enter a number'
  }
  if(num === 1){
    return 1
  }
  if(num < 0){
    return 'please enter a value > 0'
  }
  let number = num;
  for(let i = 2;i <= number;i++){
    while(number % i === 0){
      arr.push(i);
      number = number / i
    }
  }
  for(let x of arr){
    if(x === 3 && res.indexOf(x) === -1){
      res.push(x)
      rain.push('Pling')
    }
    if(x === 5 && res.indexOf(x) === -1){
      res.push(x)
      rain.push('Plang')
    }
    if(x === 7 && res.indexOf(x) === -1){
      res.push(x)
      rain.push('Plong')
    }
    if(arr.indexOf(3) === -1 && arr.indexOf(5) === -1 && arr.indexOf(7) === -1){
      return num
    }

  }
  return rain.join('')
}

}
