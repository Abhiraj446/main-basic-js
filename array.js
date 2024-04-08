console.log("working")

//HOISTING
// console.log(a)
// var a="hello";  //var is undefined in hoisting

// show();
// function show(){
//     console.log("hello")   //regular function is working in hoisting
// }

// console.log(a);
// let a=function(){
//      console.log("hello")  //anonymous function is not working in hoisting
// }


// show();
// let show=()=>{
//     console.log("hello")
// }
//arrow function not working


//ARRAY
// let a=["hello",25,12,36]
// console.log(a)
// a[0]=21
// console.log(a)
// console.log(a.length)
// console.log(a.indexOf(12))

// a.pop()
// console.log(a)
// a.push(45)
// console.log(a)

// a.shift()
// console.log(a)
// a.unshift(124)
// console.log(a)

// let b=["abhi",99]
// let c=["khatana",100]
// console.log(b.concat(c))
// delete b[1]
// console.log(b)

// let matrix=[[1,5,8],[1,14,17],[12,9,32]];
// console.log(matrix[0][1]);
//0 represents 1st array and 1 represents 2nd element of 1st array


// let a=["hello","mr",2,5,9,10]
// a.splice(0,3,"ram")
// console.log(a)

// let s="test"
// let st=["t","e","s","t"]
// console.log(s.slice(1,3))
// console.log(st.slice(1,3))
// console.log(st.reverse())

let city=["agra","mumbai","delhi","lucknow"];
// console.log(city.splice(0,3))
// console.log(city.slice(0,3))
// console.log(city.copyWithin(2,0))
// console.log(city.entries())  //gives array iterator
// console.log(city.fill("patna"))

// var xyz=Array.from("abcd")
// console.log(xyz)

// console.log(city.includes("jana")) //false

// console.log(city.join)

// console.log(city.map(Math.sqrt))  //gives NaN replace all elements


// var num2 = [4, 9, 16, 25];
// function xyz(a, b){
// return a + b;
// }
// num2.reduce(xyz)
// console.log(num2.reduce(xyz))


// let a=10;
// console.log(typeof(a))
// a=a.toString()
// console.log(typeof(a))

// let a="10";
// let b= typeof Number(a)
// console.log(b)

// let a=[2,5,9,7,4,21,15]
// console.log(a.slice(2,6))
// b=a.slice(2,6)
// console.log(b)
// console.log(a.includes(13))