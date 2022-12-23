const texto = document.querySelector('.text');
const message = document.querySelector('.mensage');

async function frase() {
  const api = await fetch('https://api.adviceslip.com/advice');
  const json = await api.json();
  const x = json.slip.advice;

  texto.innerText = x;
  texto.classList.add('animacaoTexto');
}
frase();

window.addEventListener('click', () => {
  window.location.reload();
});

if (window.innerWidth > 800) {
  texto.addEventListener('mouseover', (event) => {
    message.classList.add('block');
  });
  window.addEventListener('mouseover', (event) => {
    if (event.target.getAttribute('data-tela') === 'true') {
      message.classList.remove('block');
    }
  });
}

console.log();
