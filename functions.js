console.log("working")


//function can be written in different methods

// 1st method function expression
// function abhi(a,b){
//      return(a+b);
// }
// sum=abhi(3,4);
// Sub=abhi(5,6);
// console.log(sum,Sub);

// //2nd method function declaration
// let plus=function(a,b){
//     return(a+b)
// }
// sum=plus(5,8)
// console.log(sum)

// //3rd method arrow function
// let add=(a,b)=>{
//     return(a+b)
// }
// sum=add(8,9)
// console.log(sum)


// function add(){
//     let a="hello"
//     b="mr"
//     c="hu"
//     console.log(a,b,c)
// }
// add()
// console.log(a,b,c)


// function func(){
//     let name=prompt("Enter your name")
//     let age=prompt("Mention your age")
    
//     if(age<0 || age==0 || age==null || age==""){
//         alert("Invalid input! please enter your valid age")
//     }
//     else if(age>125){
//         alert("Invalid input! you are so old to be here")
//     }
//     else{
//         document.write("<h1>You are" + " " + age + " " +"years old</h1>")
//     }
// }
// func()


// let username="lulu"
// function show(){
//     let message="hello"+ " " +username
//     alert(message);
// }
// show()
// alert(message);


function ab(a,b){
    return(a*b)
}
pro=ab(8,9)
console.log(pro)

plus=function(a,b){
    return(a/b)
}
div=plus(8,2)
console.log(div)

let min=(a,b)=>{
    return(a-b)
}
sub=min(9,10)
console.log(sub)


function intro(){
    let name=prompt("Mention ur name")
    let age=prompt("Mention ur age")
    let address=prompt("Mention ur address")

    if(age<0 || age==0 || age==null || age==""){
        alert("Invalid age")
    }
    else if(age>110){
        alert("Invalid")
    }
    else{
        document.write("<h1>Welcome"+" "+name+" "+"you are" + age+ " " + "years old" + " "+ "from" +" " + address +"</h1>")
    }
}
intro()
