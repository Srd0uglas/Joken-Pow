// 1º saber quando o botão foi clicado
const opcao = document.querySelectorAll(".options-imagens")  // trazer todos os elemtnos que tem a classe options-imagens

// saber quando um deles foi clicado> quando a imagem for clicada, chama a função handOptionClick
// forEach pega todos os elementos = 1 por 1
opcao.forEach(img =>{
    img.addEventListener("click", handOptionClick)
})

// event em parenteses é para tinformar qual a imagem que foi clicada, por exemplo = temos 3 imagens, então ele especifica a imagem que foi clicada
function handOptionClick(event ){
    const imagemClicada = event.currentTarget
}