    let red = document.querySelector(".red")
    let green = document.querySelector(".green")
    let blue = document.querySelector(".blue")
    let getR = red.value
    let getG = green.value
    let getB = blue.value
    let image = document.querySelector(".image")
    image.textContent= `rgb(${red.value},${green.value},${blue.value})`
    red.addEventListener(("input"), () => {
        getR = red.value
        image.style.background = `rgb(${getR},${getG},${getB})`
        image.textContent = `rgb(${getR},${getG},${getB})`
    })
    green.addEventListener(("input"), () => {
        getG = green.value
        image.style.background = `rgb(${getR},${getG},${getB})`
        image.textContent = `rgb(${getR},${getG},${getB})`
    })
    blue.addEventListener(("input"), () => {
        getB = blue.value
        image.style.background= `rgb(${getR},${getG},${getB})`
        image.textContent = `rgb(${getR},${getG},${getB})`
    })