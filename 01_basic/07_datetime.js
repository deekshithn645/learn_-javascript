let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());



let myCreatedDate = Date(2024,7,26); //year,month,date
// console.log(myCreatedDate);
// console.log(myCreatedDate.toString());
console.log(myCreatedDate.toLocaleString());

let nmyCreatedDate = new Date("01-14-2024");
console.log(nmyCreatedDate);
console.log(nmyCreatedDate.toLocaleDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myTimeStamp.getTime());






