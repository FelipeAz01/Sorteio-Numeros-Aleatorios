function generateNumber() {
  const min = Math.ceil(document.querySelector('.input-min').value);
  const max = Math.floor(document.querySelector('.input-max').value);

  if (max > min) {
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    // Exibe o resultado na tela
    const numberContainer = document.querySelector('.number-container');
    const numberResult = document.querySelector('.number-result');
    numberResult.textContent = `Número sorteado: ${result}`;
    numberContainer.style.display = 'flex';

    // Fecha o contêiner quando o botão for clicado
    document.querySelector('.close-btn').addEventListener('click', () => {
      numberContainer.style.display = 'none';
    });
  } else {
    alert('O valor mínimo tem que ser MENOR que o valor máximo');
  }
}
