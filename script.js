let paragh = document.getElementById('text')
let pole = document.getElementById('vvod')
pole.addEventListener('keyup', perevod)
function perevod() {
    paragh.innerHTML = pole.value
}
let start = document.getElementById('start')
let change = document.getElementById('color')
let left = document.getElementById('arrow_left')
let right = document.getElementById('arrow_right')
let down = document.getElementById('arrow_down')
let up = document.getElementById('arrow_up')
let pers = document.getElementById('min')
let position_h = 0
let position_v = 0
let sum = 20

start.addEventListener('click', beginner)
function beginner() {
    pers.style.opacity = '1'
}
right.addEventListener('click', swap_right)
function swap_right() {
    position_h+=sum
    if(position_h>598){
        alert('Wrong way')
    }else{
        console.log(pers.style.left,position_h)
        pers.style.left = position_h+'px'
    }
}
left.addEventListener('click', swap_left)
function swap_left() {
    position_h-=sum
    if(position_h<0){
        alert('Wrong way')
    }else{
        console.log(pers.style.left,position_h)
        pers.style.left = position_h+'px'
    }
}
down.addEventListener('click', swap_down)
function swap_down() {
    position_v+=sum
    if(position_v>447){
        alert('Wrong Way')
    }else{
        pers.style.top = position_v+'px'
    }
}
up.addEventListener('click', swap_up)
function swap_up() {
    position_v-=sum
    if(position_v<0){
        alert('Wrong Way')
    }else{
        pers.style.top = position_v+'px'
    }
}