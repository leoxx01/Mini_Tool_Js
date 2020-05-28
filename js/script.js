window.addEventListener('load', ()=>{

    text_um = document.querySelector("#text_um")
    text_dois = document.querySelector("#text_dois")
    text_tres = document.querySelector("#text_tres")

    div_color = document.querySelector('.color')
})

let range_um = document.querySelector('#um')
let range_dois = document.querySelector('#dois')
let range_tres = document.querySelector('#tres')

let text_um = null
let text_dois = null
let text_tres = null

let div_color = null

let valor = null

 range_um.addEventListener('change',()=>{
    text_um.value = range_um.value
    change_color()
 })
 range_dois.addEventListener('change',()=>{
    text_dois.value = range_dois.value
    change_color()
 })
 range_tres.addEventListener('change',()=>{
    text_tres.value = range_tres.value
    change_color()
 })

const change_color = () => {
    valor = text_um.value +","+ text_dois.value+","+ text_tres.value
    div_color.classList.add('change_color')
    div_color.style.background = "rgb("+valor+")"
}

//range_dois.addEventListener('onchange', change_one)
