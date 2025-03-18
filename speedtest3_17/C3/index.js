let button =document.querySelector("button")
let body =document.querySelector("body")
let mo =document.querySelector(".mo")
let wi =document.querySelector(".wi")
let black =document.querySelector(".black")
button.addEventListener(("click"),()=>{
    black.style.display="block"
    mo.style.display="block"
})
black.addEventListener(("click"),()=>{
    black.style.display="none"
    mo.style.display="none"
})
wi.addEventListener(("click"),()=>{
    black.style.display="none"
    mo.style.display="none"
})
