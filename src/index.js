module.exports = function getZerosCount(number, base) {
  // your implementation
  var factors = {};
  var trailingZeros = Infinity;

  factors = factorize(base);

  for (var key in factors) {
    
    var divider = divide(number, +key, +factors[key]);
    if ( trailingZeros > divider) {
      trailingZeros = divider;
    }
    
  }
  
  return trailingZeros;

  function divide(integer, factor, denominator) {
    var num = integer;
    var fac = factor;
    var den = denominator || 1;
    var counter = 0;

    for (i=1; Math.floor(num/Math.pow(fac,i)) > 0; i++) {
      counter += Math.floor(num/Math.pow(fac,i));
    }

    return Math.floor(counter /= den);
  }

  function factorize(integer) {
    var factor = {};
    var num = +integer;

    for (var i = 2; num > 1; i++) {
      let counter = 0;
      while (num%i === 0) {
        num /= i;
        counter++;
        factor [ i ] = counter;
      }      
    }

    return factor;
  }
}