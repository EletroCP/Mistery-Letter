function criarCarta() {
  let cartaTexto = document.getElementById("carta-texto")
  document.querySelectorAll("span").forEach(remove =>{
    remove.remove()
  })
//ref indexOf https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
  if(cartaTexto.value == "" || document.getElementById("carta-texto").value.indexOf(" ") == 0){
    let element = document.createElement("span")
    element.innerHTML = "Por favor, digite o conteúdo da carta."
    document.getElementById("carta-gerada").appendChild(element)
  }

  let style = ["newspaper", "magazine1", "magazine2"]
  let size = ["medium", "big", "reallybig"]
  let rotate = ["rotateleft", "rotaterigth"]
  let tilt = ["skewleft", "skewrigth"]



  let partes = cartaTexto.value.split(" ")
  for (let index = 0; index < partes.length; index += 1) {
    let element = document.createElement("span")
    element.innerHTML = partes[index]
    element.classList.add(style[parseInt(Math.random() * 3)])
    element.classList.add(size[parseInt(Math.random() * 3)])
    element.classList.add(rotate[parseInt(Math.random() * 2)])
    element.classList.add(tilt[parseInt(Math.random() * 2)])
    element.style.display = "inline-block"
    document.getElementById("carta-gerada").appendChild(element)

  }
  document.getElementById("carta-contador").innerHTML = partes.length
}

















"newspaper medium rotateleft skewleft", "newspaper medium rotateleft skewrigth", "newspaper medium rotaterigth skewleft", "newspaper midium rotaterigth skewrigth"
"newspaper big rotateleft skewleft", "newspaper big rotaterigth skewleft", "newspaper big rotateleft skewrigth", "newspaper big rotaterigth skewrigth",
"newspaper reallybig rotateleft skewleft", "newspaper reallybig rotaterigth skewleft", "newspaper reallybig rotateleft skewrigth", "newspaper reallybig rotaterigth skewrigth",

"magazine1 medium rotateleft skewleft", "magazine1 medium rotateleft skewrigth", "magazine1 medium rotaterigth skewleft", "magazine1 midium rotaterigth skewrigth"
"magazine1 big rotateleft skewleft", "magazine1 big rotaterigth skewleft", "magazine1 big rotateleft skewrigth", "magazine1 big rotaterigth skewrigth",
"magazine1 reallybig rotateleft skewleft", "magazine1 reallybig rotaterigth skewleft", "magazine1 reallybig rotateleft skewrigth", "magazine1 reallybig rotaterigth skewrigth",

"magazine2 medium rotateleft skewleft", "magazine2 medium rotateleft skewrigth", "magazine2 medium rotaterigth skewleft", "magazine2 midium rotaterigth skewrigth"
"magazine2 big rotateleft skewleft", "magazine2 big rotaterigth skewleft", "magazine2 big rotateleft skewrigth", "magazine2 big rotaterigth skewrigth",
"magazine2 reallybig rotateleft skewleft", "magazine2 reallybig rotaterigth skewleft", "magazine2 reallybig rotateleft skewrigth", "magazine2 reallybig rotaterigth skewrigth"