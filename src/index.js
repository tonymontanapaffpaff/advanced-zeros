module.exports = function getZerosCount(number, base) {
  // your implementation
let j = 0;
let i = 2;
let a = new Array();
do
{
 if (base % i === 0) 
 {
  a[j] = i;
  j++;
  base = base / i;
 }
 else
 {
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
  let min = 100000;
  for (let i = 0; i < noRepeat.length; i++)
    if (noRepeat[i] < min) min = noRepeat[i];
  return min;
}

