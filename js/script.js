const togglemenu = document.querySelector(".toggle");
const enlaces = document.querySelector(".responsivemenu");

togglemenu.addEventListener('click',()=>{
    enlaces.classList.toggle('activado');
})

const grandel = document.querySelector(".grande");
const puntol = document.querySelectorAll(".punto");

puntol[0].classList.add("activo");

var c = 0;

setInterval(function(){
        if (c>2) {
            c=0;
        }
        puntol.forEach((puntos,i)=>{
            puntol[i].classList.remove("activo");
        })
        puntol[c].classList.add("activo");
        // console.log(c);
        puntol.forEach((cadapunto,i) => {
            puntol[i].addEventListener("click",()=>{
                c=i;
            })
        });
        // console.log(c);
        grandel.style.transform = "translateX("+c*-33.3+"%)";
        c++;
},4000);


puntol.forEach((cadaPunto,i)=>{
    puntol[i].addEventListener("click",()=>{
        let posicion = i;

        puntol.forEach((puntos,i)=>{
            puntol[i].classList.remove("activo");//revisar
        })
        
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