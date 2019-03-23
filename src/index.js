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
let max = 0;
for (let i = 0; i < a.length; i++)
  if (a[i] > max) max = a[i]; 
return number / max;
}

