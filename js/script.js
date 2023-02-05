const togglemenu = document.querySelector(".toggle");
const enlaces = document.querySelector(".responsivemenu");

togglemenu.addEventListener('click',()=>{
    enlaces.classList.toggle('activado');
})

const grandel = document.querySelector(".grande");
const puntol = document.querySelectorAll(".punto");

puntol[0].classList.add("activo");

puntol.forEach((cadaPunto,i)=>{
    puntol[i].addEventListener("click",()=>{
        let posicion = i;

        puntol.forEach((puntos,i)=>{
            puntol[i].classList.remove("activo");//revisar
        })

        // puntol[0].classList.remove("activo");

        switch (posicion) {
            case 0:
                grandel.style.transform = "translateX(0%)";

                puntol[i].classList.add("activo");
                break;
        
            case 1:
                grandel.style.transform = "translateX(-33.3%)";
                puntol[i].classList.add("activo");
                break;
            case 2:
                grandel.style.transform = "translateX(-66.6%)";
                puntol[i].classList.add("activo");
                
                break;
            default:
                
                break;
        }
    })

});