function criarCarta() {
  let cartaTexto = document.getElementById("carta-texto")
  document.querySelectorAll("span").forEach(remove =>{
    remove.remove()
  })

  if(cartaTexto.value == ""){
    let element = document.createElement("span")
    element.innerHTML = "Por favor, digite o conteúdo da carta"
    document.getElementById("carta-gerada").appendChild(element)
  }

  let partes = cartaTexto.value.split(" ")
  for (let index = 0; index < partes.length; index += 1) {
    let element = document.createElement("span")
    element.innerHTML = partes[index]
    document.getElementById("carta-gerada").appendChild(element)
  }


}


