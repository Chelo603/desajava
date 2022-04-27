
let seleccionar = document.querySelector('select');
let parrafo = document.querySelector('p');

seleccionar.addEventListener('change', hamburguesa);

function hamburguesa() {
  let eleccion = seleccionar.value;

  if (eleccion === 'grande') {
    parrafo.textContent = 'Hamburhuesa de 380g ';
  } else if (eleccion === 'doble') {
    parrafo.textContent = 'Hamburguesa doble carne y aderezo';
  } else if (eleccion === 'tyl') {
    parrafo.textContent = 'Hamburguesa de carne con lechuga y tomate';
  } else if (eleccion === 'completa') {
    parrafo.textContent = 'Contiene  doble carne, lechuga, tomate, huevo y queso';
  } else {
    parrafo.textContent = '';
  }
}



