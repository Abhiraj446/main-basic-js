//for loop

// for(i=1;i<=5;i++){
//     console.log(i)
// }

// for(i=8;i>=1;i--){
//     document.write(i+ "<br>")
// }

// a='abhi';
// for(i=1;i<=5;i++){
//     document.write(a+"<br>")
// }


//while loop

// var i=10;
// while(i<=20){
//     document.write(i+ "<br/>");
//     i++;
// }


//do while loop

// var i=5;
// do{
//     document.write(i+ "<br>");
//     i++;
// }while(i<=10);


//for in loop

// var tutorial = [81, 31, 15, 41, 52, 75, 69, 67,45];  
// let i = 1;  
// for(var tut in tutorial) {    
//    document.write("values[" +i+ " ]: " +tutorial[tut] +"<br>");  
//     i++;  
// }  


// const user={
//     name:'Abhiraj',
//     age:19,
//     add:'Sre',
//     func(){
//         console.log("My name is"+" "+this.name+" "+"and my age is"+" "+this.age)
//     }
// }
// for(const key in user){
//     document.write(`${key}: ${user[key]}`+"<br>")
// }
// user.num=7545464466;
// console.log(user)
// user.func()


//for in loop
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
for(const key in person.boy.boy1){
    document.write(`${key}: ${person.boy.boy1[key]}`+"<br>")
}
for(const key in person.girl.girl1){
    document.write(`${key}: ${person.girl.girl1[key]}`+"<br>")
}*/


// let person={
//     name:'abhiraj',
//     age:19,
//     address:'sre',
    // show(){
    //     console.log(this.name)
    // }
// }
// person.show()
// for(const key in person){
//     document.write(`${key}:${person[key]}`+"<br>")
// }

// let txt="";
// for(let i in person){
//     txt+=person[i]+" "
// }
// console.log(txt)

// for(let a in person){
//     console.log(person[a])
// }


// let a=[41,15,23,69,14,"abhi",15]
// for(let x of a){
//     console.log(x)
// }

// let b="abhiraj";
// for(let y of b){
//     console.log(y)
// }

// let arr=[41,25,21,23,65]
// arr.forEach(function(x){
//     console.log(x)
// })

// let fruits=[5,5,6,3,2]
// fruits.forEach(function(x){
//     document.write(x+"<br>")
// })

// let sum=0;
// let num=[10,20,30,40]
// num.forEach(function a(y){
//       sum=y+20
//       console.log(sum)
// }) 


// let arr=[5,4,8,3,2]
// let newArr=[]
// arr.forEach(function me(y){
//         newArr.push(y*y)
// console.log(newArr)
// })
// console.log(newArr)

// let btn=document.getElementById("mybtn")
// btn.addEventListener('click',function(){
//     let arr=[5,4,8,3,2]
//     let newArr=[]
//     arr.forEach(function (y){
//             newArr.push(y*y)
//     console.log(newArr)
//     })
// })

let a=[5,4,6,8]
let ne=[]
let re=a.forEach((y)=>{
    // return y*y
    ne.push(y*y)
    console.log(ne)
})
// console.log(re)



