let fruits1 = ['a', 'b', 'c', 'd']
let result1 = fruits1[fruits1.length - 1]
console.log(result1)//d

const char = ['x', 'y', 'z']
const result2  = char.at(-1)
console.log(result2)//z

let fruits2 = ["Apple", "Orange", "Pear"];
const results3 = fruits2.pop();
console.log(results3)//pear
console.log(fruits2)//['Apple 'Orange']

let fruits3= ["Apple", "Orange", "Pear"];
const output = fruits3.push('Mango')
console.log(output)//The call fruits3.push(...) is equal to fruits3[fruits3.length] = 4
console.log(fruits3)//[ 'Apple', 'Orange', 'Pear', 'Mango' ]

let num  = [1,2,3,4,5]
const add = num.unshift(0)
console.log(num)//[ 0, 1, 2, 3, 4, 5 ]
console.log(add)//6

let num2 = [0,1,2,3,4]
const sub = num2.shift()
console.log(num2)//[ 1, 2, 3, 4 ]
console.log(sub)//0

let fruits4 = ['Orange'];
let arr = fruits4
console.log(arr === fruits4)//true

//for loop
let vegs = ['okro', 'pumpkins', 'carrot']
for (let i = 0; i < vegs.length; i++) { //old
    console.log(vegs[i])
}

//for..of
let num3 = [1,2,3,4,5]
for (let num of num3) { //newest
    console.log(num)
}

//for..in
let num4 = [6,7,8,9]
for (let key in num4) {//works becos array acts as objects but has problems and it's a bad idea.
    console.log(num4[key])
}

//new Array()
let ar = new Array("Apple", "Pear", "etc");
console.log(ar)

let ar2 = new Array(2);
console.log(ar2)
console.log(ar2.length)

//Multidimensional arrays
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  console.log(matrix[0][1])

  //toString
  let ar3 = [1, 2, 3];
  console.log(ar3)
  const res = String(ar3)// or toString(ar3)
  console.log(res)

  //Numeric conversion 
  let ar4 = ['123']
  const res2 = Number(ar4);
  console.log(res2)
  console.log(typeof res2)
