module.exports = function getZerosCount(number, base) {
    // your implementation
    let j = 0;
    let i = 2;
    let a = new Array();
    do {
        if (base % i === 0) {
            a[j] = i;
            j++;
            base = base / i;
        } else {
            i++;
        }
    }
    while (i < base);
    a[j] = i;

    let noRepeat = [];
    nextInput:
        for (let i = 0; i < a.length; i++) {
            let str = a[i];
            for (let j = 0; j < noRepeat.length; j++) {
                if (noRepeat[j] == str) continue nextInput;
            }
            noRepeat.push(str);
        }
    let numberDiv = [];
    for (let i = 0; i < noRepeat.length; i++) {
      numberDiv[i] = Math.trunc(number / noRepeat[i]);
      for (let j = 2; j < 102; j++) {
        if (number / Math.pow(noRepeat[i], j) > 0)
        numberDiv[i] += Math.trunc(number / Math.pow(noRepeat[i], j));
      }
  }

  let min = numberDiv[0];
  for (let i = 0; i < numberDiv.length; i++)
    if (numberDiv[i] < min) min = numberDiv[i];  
    return min;
}