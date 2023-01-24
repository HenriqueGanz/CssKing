const btnCssKing = document.querySelector(".btn");
const container = document.querySelector('.container');
const main = document.querySelector('main');

//mostrar ao visualizar componentes
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }else {
            entry.target.classList.remove('show');
        }
    })
});

const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el) => observer.observe(el));

//interacao com o botao para a proxima etapa

btnCssKing.addEventListener('click', () => {
    container.classList.remove('noDisplay')
    main.classList.add('noDisplay')
});