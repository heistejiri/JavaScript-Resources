const button = document.querySelector("button")
const body = document.querySelector("body")
const color = ['blue', 'violet', 'green', 'purple', 'violet', 'orange', 'grey', 'brown']

body.style.backgroundColor = 'red'

button.addEventListener('click', changeBG)

function changeBG(){
    const colorIndex = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorIndex]
}

