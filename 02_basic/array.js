let myArr = [1,2,3,4,5,6,11,'apple','mango','pineapple'];
console.log(myArr);
console.log(typeof myArr);


let newArray = new String(myArr);
console.log(typeof newArray);
console.log(newArray);

console.log(`this is the array converted string = ${newArray}`);

console.log(myArr[0]);

//Arry methods

myArr.push('goa');
console.log(myArr);
myArr.pop();
console.log(myArr);
myArr.unshift('deekshith');
console.log(myArr);
myArr.shift();
console.log(myArr); 


console.log(myArr.includes('mango'));



