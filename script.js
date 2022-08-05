const cartaTexto = document.getElementById('carta-texto');
let estilo = [];

function classeRandom() {
  estilo = [];

  const style = ['newspaper', 'magazine1', 'magazine2'];
  const size = ['medium', 'big', 'reallybig'];
  const rotate = ['rotateleft', 'rotateright'];
  const tilt = ['skewleft', 'skewright'];

  estilo.push(style[parseInt(Math.random() * style.length, 10)]);
  estilo.push(size[parseInt(Math.random() * size.length, 10)]);
  estilo.push(rotate[parseInt(Math.random() * rotate.length, 10)]);
  estilo.push(tilt[parseInt(Math.random() * tilt.length, 10)]);
}

function newStyle() {
  this.className = '';
  estilo.forEach((element) => {
    classeRandom();
    this.classList.add(element);
  });
}

function estiloCarta() {
  const partes = cartaTexto.value.split(' ');

  for (let index = 0; index < partes.length; index += 1) {
    const element = document.createElement('span');
    element.addEventListener('click', newStyle);

    estilo.forEach((elemento) => {
      classeRandom();
      element.classList.add(elemento);
    });
    element.innerHTML = partes[index];
    element.style.display = 'inline-block';
    document.getElementById('carta-gerada').appendChild(element);
  }
  document.getElementById('carta-contador').innerHTML = partes.length;
}

function criarCarta() {
  document.querySelectorAll('span').forEach((remove) => {
    remove.remove();
  });
  //  ref indexOf https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf;
  if (cartaTexto.value === '' || document.getElementById('carta-texto').value.indexOf(' ') === 0) {
    const element = document.createElement('span');
    element.innerHTML = 'Por favor, digite o conteúdo da carta.';
    document.getElementById('carta-gerada').appendChild(element);
    return;
  }
  classeRandom();
  estiloCarta();
}
document.getElementById('criar-carta').addEventListener('click', criarCarta);
