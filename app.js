// variable are one of the keys to programming
// a variable is location in memory
// variable is like 
// data primitive:number,String , Boolean, Undefied, Null(0)
// Dynamic: Arrays,Objects, Functions
// a=10;
// b=20;
// c=a+b;
// console.log(c)=printf(c);
/*creat variable:let name = "John"; */
/*erreur:alert();*/
//console.log(10);
//alert(10);
//si j'ai un variable son valeur elle return undifind
console.log("bonjour");
let name = "hafsa";
let age = 20;
console.log("my name is:"+name +" "+age);
let travaille=true;
console.log(!travaille);
//creat  array
let users = ["hafsa","meriem","kaouther"];
//affiche un tableau
console.log(users);
//creat object
let person = {
    firstName : "Hafsa",
    lastName : "Omar",
    age :20,
}
console.log(person.firstName+" "+person.lastName+" "+person.age);
//add property
person.email="hafsaomar@gmail.com";
console.log(person.email);
//delete property
delete person.email;
console.log(person.email);
//Array methods
//push() add element at end of array
users.push("Ali");
console.log(users);
//unshift() add element at the beginning of
users.unshift("Sara");
console.log(users);
console.log(users.length)
//pop() delete element from the end of array
users.pop();
console.log(users);
//shift() delete element from the begining of
users.shift();
console.log(users);
//filter
users.filter(function(element){
    return element!=='hafsa';
})
console.log(users);
//indexof() search for an element in array
let index = users.indexOf("meriem");
console.log(index);
//arithmetic operators:used to 
let number=20
number+=5 //number=number+5
console.log(number)
//comarison operators
let comparition=10>5;
console.log(comparition);
if (number>10){
    console.log("the number is greater than  10")
    }else{
        console.log("the number is less than or equal to 10")
    }
    /*Logical Operators: used to combine two or more conditions and return true if any one condition is true */
    //Logical Operators
    /*AND operator &&
     OR operator || */
    let x=true , y=false ;
    if(x&&y){
        console.log("both are true")
    }else{
        console.log("one of them is false ")
    }
    if(x||y){
        console.log("at least one of them is true")     
    }else{
       console.log("none of them is  true") 
    }
/*Equality operators*/
let a=3,b="3";
console.log(a==b);
console.log(a===b);//meme le type doit etre le meme
//conditions and loops
if(a==b){
    console.log("they are equals")
}else{
    console.log(" they aren't equals")
}
for(let i=0;i<5;i++){
    console.log(i);
}
let arr=[1,2,3,4];
for(const item of arr){
    console.log(item);
}
while(arr.length>0){
    let rem = arr.pop();
    console.log(rem)
}
//functions
c=10;
d=20;
function add(x,y){
    let result= x+y
    return result;
}
let result =add(c,d);
console.log(result);
