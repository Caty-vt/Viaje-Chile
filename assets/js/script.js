var nav = document.querySelector(`nav`);

window.addEventListener(`scroll`, function(){
    if (window.pageYOffset >100){
        nav.classList.add(`bg-dark`, `shadow`);
    } else {
        nav.classList.remove(`bg-dark`, `shadow`);
    }
})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

$(document).ready(function(){
    $(`#boton1`).click(function(){
        alert("El correo fue enviado correctamente...")
    })

    $(`.card-title`).click(function(){
        $(`.card-text`).toggle()
    });


});