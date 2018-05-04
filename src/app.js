module.exports = {
  squareFunc: (num) => {
    const arr = num.toString().split('')
    const newArr = arr.map((x) => x ** 2);
    
    return newArr.join('');
  }
}
