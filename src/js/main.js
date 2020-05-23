AOS.init();


let slider = document.querySelector(".slider-contenedor")
let slideritem = document.querySelectorAll(".contenido-slider")
let contador = 1;
let width = slideritem[0].clientWidth;
let intervalo = 3000;
let libro = document.querySelectorAll(".libro-portada")[0];
let option_libro = document.getElementById("gaa");

window.addEventListener("resize", function() {
    width = slideritem[0].clientWidth;
})
setInterval(function() {
    slides();
}, intervalo);

function slides() {
    slider.style.transform = "translate(" + (-width * contador) + "px)";
    slider.style.transition = "transform 1s";
    contador++;
    if (contador == slideritem.length) {
        setTimeout(function() {
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador = 1;
        }, 1500)
    }
}


/*galeria*/
// onmouseover="document.getElementById('option-libro').style.display='none'"
// onmouseout="document.getElementById('option-libro').style.display='block'"


// libro.addEventListener("onmouseover", function(e) {
//         option_libro.style.display = "none";
//     })
//     // function aparecer(){
//     //     if()
//     // }
// libro.addEventListener("onmouseout", function(e) {
//     option_libro.style.display = "block";
// })