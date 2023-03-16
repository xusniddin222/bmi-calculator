const input2 = document.querySelector("#boy");
const input = document.querySelector("#vazn");
const btn = document.querySelector("#btn");
const img = document.querySelector("#img");
const you = document.querySelector("#you")

function changeColor(){
    let boy = input2.value;
    let ogirlik = input.value;
    let bmi =((ogirlik/ (boy*boy))).toFixed(1);
    console.log(bmi)
    if(bmi < 18.5){
        img.setAttribute("src", "./img/ozgin.png");
        you.innerHTML = "Siz ozg'insiz"
    }
    else if (bmi < 25){
        img.setAttribute("src", "./img/normal.png");
        you.innerHTML = "Siz normalsiz"
    }
    else if (bmi < 30){
        img.setAttribute("src", "./img/semiz.png");
        you.innerHTML = "Siz semissiz"
    }
    else if(bmi > 30){
        img.setAttribute("src", "./img/judasemiz.png");
        you.innerHTML = "Siz juda semissiz"
    }
    else  {
        you.innerHTML = "Iltimos vazningiz hamda bo'yingizni kiriting!"
    }
    console.log(bmi);
}

document.querySelector('form').addEventListener('submit' , (e)=>{
     e.preventDefault()    
     changeColor()
})


// const btn = document.querySelector('#btn')
// const input = document.querySelector('#boy')
// const input2 = document.querySelector('#vazn')

// function changeColor(){
//     console.log(input.value);    
//     let ogirlik = input.value
//     let boy = input2.value
//     let bmi =((ogirlik/ (boy*boy))).toFixed(1)
//     if(bmi < 18.5){
//     const h1 = document.querySelector(".imges")    
//     h1.setAttribute( "src" , "./img/normal.jpg")   
//     const hi = document.querySelector("#hi2")
//     hi2.innerHTML = "siz og'irsiz"
   
    
// }
// else if(bmi > 18.5 && bmi < 25){
//     const h1 = document.querySelector(".imges")    
//     const hi = document.querySelector("#hi")
//     h1.setAttribute( "src" , "./img/normal.jpg")
//     hi.innerHTML = "siz normalsiz"
    
// }
// else if(bmi > 25 && bmi < 30){
//     const h1 = document.querySelector(".imges")    
//     const hi = document.querySelector("#hi3")
//     h1.setAttribute( "src" , "./img/normal.jpg")
//     hi3.innerHTML = "siz semiz siz"
// }
// else {
//     const h1 = document.querySelector(".imges")    
//     const hi = document.querySelector("#hi4")
//     h1.setAttribute( "src" , "./img/normal.jpg")
//     hi4.innerHTML = "siz o'ta semiz siz"
// } 
// }
// document.querySelector('form').addEventListener('submit' , (e)=>{
//      e.preventDefault()    
//      changeColor()
// })







