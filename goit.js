const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i += 1) { 
  console.log(fruits[i]);
  fruits.push('banana');
  console.log(fruits[i]);

}
