const btnEntrar = document.querySelector('.overlay-left button');
const btnCadastrar = document.querySelector('.overlay-right button');
const container = document.querySelector('.container');

btnEntrar.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

btnCadastrar.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});
