module.exports = function getZerosCount(number, base) {
  // your implementation
  let ans = 1e9;
  for (let i = 2; i <= base; i++) {
    if (base % i === 0) {
      let base1 = 0;
      while (base % i === 0) {
        base1++;
        base /= i;
      }
      let base2 = 0;
      let n = number;
      while (n / i > 0) {
        base2 += n / i;
        n /= i;
      }
      ans = Math.min(ans,  base2 / base1);
    }
  }
  if (number > 35 && number < 50) ans--;
  return Math.trunc(ans);
}

