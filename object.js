console.log("working")


//Object
let student={
    firstName : 'Abhiraj',
    lastName : 'Khatana',
    age : 19,
    address : 'Saharanpur',
}
/*delete student.lastName
console.log(student)
console.log(student.address)
alert("firstName" in student)*/

// const num=student.age
// console.log(num)

// student.age=20;
// console.log(student)

// student.gender='male';
// console.log(student)

const namee=student["firstName","lastName","age"]
console.log(namee)

// student["age"]=21
// console.log(student)


// student["country"]="india"
// console.log(student)

// let codes={
//     "49":"Germany",
//     "41":"Switcherland",
//     "1":"USA"
// };

// for(let code in codes){
//     alert(codes)
// }


/*let person={
    boy:{
        boy1:{
            name:'abhiraj',
            age:19,
        },
        boy2:{
            name:'aryan',
            age:18,
        },
    },
    girl:{
        girl1:{
            name:'Kannu',
            age:19,
        },                              
        girl2:{
            name:'Vani',
            age:19,
        },
    },
}
console.log(person.girl.girl1)
console.log(person.boy.boy1)*/


//method
// let user={
//     name:"IET",
//     age:30
// };
// user.sayHi=function(){
//     alert("Hello");
// }
// // user.sayHi();

// //this method
// let st={
//     name:'abhi',
//     age:19,
// }
// st.say=function(){
//     // alert(this.name)
// }
// st.say()

//numbers
// alert(7e9)

//math.random
// console.log(Math.max(5,9,45,25))
// console.log(Math.min(5,9,45,25))


//math.power
// alert(Math.pow(2,5))

// function sum(a,b){
//     return(a+b)
// }
// alert(sum(2,5))


// let iet = "Institue\n of \n Education \n and \bTraining"
// document.write(iet)

// let a="hello"
// alert(a[0]);     //h
// alert(a[a.length-4])   //e


//upper lower case
// alert("hello".toUpperCase())
// alert("HeLLo".toLowerCase())
// alert(a[1].toUpperCase())


//includes
// alert(`There are so many name of`.includes('many'))

// alert(`Institute of Education and training`.includes('of',5))

//starts with and ends with
// alert("Abhiraj".startsWith("A"))
// alert("Abhiraj".endsWith("j"))



//getting a substring
let abc = "Thare fighter in the history of india";
// alert(abc.slice(2,8));

// let abc = "India is our country";
// alert(abc.slice(7));

// alert("Abhiraj Khatana".slice(-3,-1))

// alert("clarify".substring(6,2))
// alert("clarify".slice(6,2))
// alert("clarify".substr(-5,3))  //-3 is position and 3 is length


//ARRAYS

let fruits=["apple","mango","guava"]
// alert(fruits[2])
// fruits[3]="orange"
// alert(fruits)
// alert(fruits.length)

fruits.push="abhi"
// alert(fruits)


//multidimensional array
let matrix=[
    [1,2,3],[4,5,6],[7,8,9]
];
// alert(matrix[1][1])


let city = ["New delhi", "Mumbai", "Kolkata", "Chennai", "Goa", "Agra"];
city.splice(0, 2, "IET", "Institue");
// alert(city)

let cities = ["new delhi", "Mumbai", "kolkata", "India"];
cities.splice(3, 0, "Azam");
// alert(cities)


//concat() it creates a new array by merging arrays
let shr=["mumbai","SRE"];
let state=["up","pb"];
let country=shr.concat(state);
// alert(country)++

let arr=[1,2,3]
arr.reverse()
// alert(arr)


let citi = ["Agra", "Mumbai", "Delhi", "Lucknow"];
citi.copyWithin(2, 0);
// alert(citi)


// let citi = ["Agra", "Mumbai", "Delhi", "Lucknow"];
citi.entries(2, 0);
// alert(citi)

let ct=("agra","mumbai",'delhi');
// ct.fill("sre")
// alert(ct)


// let xyz=Array.from("ABCD")
// alert(xyz)

let cit=["agra","mumbai","delhi"]
cit.includes("jana")
// alert(cit)

let dd=["agra","mumbai","delhi"]
// alert(dd.join)

var num = [4, 9, 16, 25];
num.map(Math.sqrt);
// alert(map)

var num2 = [4, 9, 16, 25];
function xyz(a, b){
return a + b;
}
num2.reduce(xyz)
console.log(num2)