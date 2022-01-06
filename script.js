function criarCarta(){
let partes = document.getElementById("carta-texto").value.split(" ")
  for(let index = 0; index < partes.length; index +=1){
    let element = document.createElement("span")
    element.innerHTML = partes[index]
    document.getElementById("carta-gerada").appendChild(element)
  }
}