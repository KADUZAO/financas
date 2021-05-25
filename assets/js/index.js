const formationcontent = document.querySelector(".formationcontent");
const formationslist = document.querySelector(".formationslist");
const formations = [
    {
        content: "<strong>Módulo 1.</strong> Tirando as vendas dos seus olhos"
    },
    {
        content: "<strong>Módulo 2.</strong> Transformando sua mentalidade"
    },
    {
        content: "<strong>Módulo 3.</strong> Dinheiro & felicidade"
    },
    {
        content: "<strong>Módulo 4.</strong> Choque de realidade"
    },
    {
        content: "<strong>Módulo 5.</strong> Dívidas: como me livrar delas?"
    },
    {
        content: "<strong>Módulo 6.</strong> Colocando a casa em ordem"
    },
    {
        content: "<strong>Módulo 7.</strong> Firmando suas raízes financeiras"
    },
    {
        content: "<strong>Módulo 8.</strong> Dinheiro dentro da família"
    },
    {
        content: "<strong>Módulo 9.</strong> Planejamento & Organização"
    },
    {
        content: "<strong>Módulo 10.</strong> Aprendendo a se pagar na prática"
    },
    {
        content: "<strong>Módulo 11.</strong> Sonhe e realize"
    },
    {
        content: "<strong>Módulo 12.</strong> Investimentos"
    },
    {
        content: "<strong>MÓDULO BÔNUS</strong>"
    },
]

formations.map(formation => {
    const formationclone = formationslist.cloneNode(true);

    formationclone.querySelector(".textformation").innerHTML = formation.content;
    formationcontent.appendChild(formationclone);
});

let circles = document.querySelectorAll(".circlelist");
let maximum = circles.length;

function animeBall() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4)
    circles.forEach(function(element) {
        if((windowTop) > element.offsetTop) {
            element.classList.add("select");
        } else {
            element.classList.remove("select");
        }
    })
}

animeBall();

if(maximum) {
    window.addEventListener('scroll', function() {
        animeBall();
    })
}