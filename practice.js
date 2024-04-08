console.log("working")

//function are of 3 types

//1st function
function sum(a,b){
    return(a+b)
}
plus=sum(3,5)
// console.log(plus)


//2nd function
let abhi=function(a,b,c){
    return(a-b*c)
}
cal=abhi(5,8,7)
// console.log(cal)


//3rd function
let alg=(a,b)=>{
    return(a/b)
}
algebra=alg(8,2)
// console.log(algebra)


/*function don(){
    let name=prompt("Mention Your name")
    let age=prompt("Mention Your age")
    let address=prompt("Mention your address")

    if(age<0 || age==0 || age==null){
        alert("Invalid! try again")
    }
    else if(age>110){
        alert("Invalid! you are too old")
    }
    else{
        document.write("<h1 style=color:red>Welcome Mr."+" "+ name+" "+"Your age is"+" "+age+" "+"And you are from"+" "+address+ "</h1")
    }
}*/
// don()


let username="khatana"
function kh(){
    let message="Abhiraj"+" "+username
    // alert(message)
}
// kh()


let a=10;
let b=11;
c=a>b?a:b
// console.log(c)


let e=5;
let d='5';
if (e!==d){
    // console.log("True")
}
else{
    // console.log("False")
}

// alert(3+'5')



// alert('2'==2)

// let age = prompt('How old are you?', 100);
// alert("You are"+" "+ age +"years old!"); 
// confirm("are u sure want to exit")


let kk=(a,b)=>a*b
// console.log(kk)


let student={
    work:'progress',
    Report:'deposit',
}
// console.log(student)

student["time"]='get'
// console.log(student)


let message="hello";
let phrase=message;


let codes={
    "49":"Germany",
    "41":"Switcherland",
    "1":"USA"
};

for(let code in codes){
    // alert(codes)
}

function fun(){
    let name;
    console.log(name);
    name="abhiraj";
}
fun();