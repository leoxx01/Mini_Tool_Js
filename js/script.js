window.addEventListener('load', start)
var range_um = document.querySelector('#um')
var range_dois = document.querySelector('#dois')
var range_tres = document.querySelector('#tres')

var text_um = document.querySelector("#text_um")
var text_dois = document.querySelector("#text_dois")
var text_tres = document.querySelector("#text_tres")

var valor = null

function start(){
    change_one()
}
function change_one(event){
    text_um.value = range_um.value
    text_dois.value = range_dois.value
    text_tres.value = range_tres.value
    valor = text_um.value +","+ text_dois.value+","+ text_tres.value
    console.log(valor)
    change_color()
}
function change_color(){
    var div_color = document.querySelector('.color')
    div_color.classList.add('change_color')
    
    div_color.style.background = "rgb("+valor+")"
}
//range_dois.addEventListener('onchange', change_one)
