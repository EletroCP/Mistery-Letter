let cartaTexto = document.getElementById("carta-texto")
let estilo = []

function criarCarta() {

  document.querySelectorAll("span").forEach(remove => {
    remove.remove()
  })
  //ref indexOf https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
  if (cartaTexto.value == "" || document.getElementById("carta-texto").value.indexOf(" ") == 0) {
    let element = document.createElement("span")
    element.innerHTML = "Por favor, digite o conteúdo da carta."
    document.getElementById("carta-gerada").appendChild(element)
  }

  classeRandom()

  estiloCarta()

}
function classeRandom(){
   estilo = []

  let style = ["newspaper", "magazine1", "magazine2"]
  let size = ["medium", "big", "reallybig"]
  let rotate = ["rotateleft", "rotateright"]
  let tilt = ["skewleft", "skewright"]

  estilo.push(style[parseInt(Math.random() * style.length)])
  estilo.push(size[parseInt(Math.random() * size.length)])
  estilo.push(rotate[parseInt(Math.random() * rotate.length)])
  estilo.push(tilt[parseInt(Math.random() * tilt.length)])
}
function estiloCarta() {
  let partes = cartaTexto.value.split(" ")

  for (let index = 0; index < partes.length; index += 1) {
    let element = document.createElement("span")
    for(let index of estilo){
      classeRandom()
      element.classList.add(index)
      
    }
    element.innerHTML = partes[index]
    element.style.display = "inline-block"
    element.setAttribute("onclick", "newStyle(this)")
    document.getElementById("carta-gerada").appendChild(element)
  }
  document.getElementById("carta-contador").innerHTML = partes.length
}

function newStyle(word){
  word.className = ""

  for(let index of estilo){
    classeRandom()
    word.classList.add(index)
  }
}