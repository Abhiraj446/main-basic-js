console.log("working")

let text= document.getElementById("demo")
text.innerHTML="hello guys"

const text1= document.querySelector(".demo1")
text1.innerHTML="cddv"

text.style.backgroundColor="black"
text.style.color="red"


function add(){
    let num=Number(document.getElementById("text1").value);
    // console.log(num)
    
    //  document.getElementById("ss").innerHTML=num

    let num1=Number(document.getElementById("text2").value);
    // console.log(num1)

    // document.getElementById("sc").innerHTML=num1

    const sum=num+num1
    console.log(sum)

    document.getElementById("result").value=sum
}

function sub(){
    let num=Number(document.getElementById("text1").value);
    let num1=Number(document.getElementById("text2").value);
    const sum=num-num1
    console.log(sum)

    document.getElementById("result").value=sum
}

function mul(){
    let num=Number(document.getElementById("text1").value);
    let num1=Number(document.getElementById("text2").value);
    const sum=num*num1
    console.log(sum)

    document.getElementById("result").value=sum
}

function div(){
    let num=Number(document.getElementById("text1").value);
    let num1=Number(document.getElementById("text2").value);
    const sum=num/num1
    console.log(sum)

    document.getElementById("result").value=sum
}
