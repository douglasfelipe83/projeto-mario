/* Variaveis
um espaco de memoria que voce reserva e pode guardar o que quiser dentro
3 jeitos de criar 
- var / jeito antigo - nao usar
- let - voce pode alterar o valor depois
- const - constante (valor fixo)

        Funcoes
            um trecho de codigo so executado quando chamado

            JS manipula a DOM
            atraves de eventos

            */
const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function cliqueiNoBotao() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}
function esconderForm() {
    form.style.left = "-300px"
    form.style.transform = "translateX(0%)"
    mascara.style.visibility = "hidden"
}

