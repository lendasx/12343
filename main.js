// Exemplo: rolar para baixo 500 pixels da posição atual
window.scrollTo({
    top: window.scrollY + 500,
    behavior: 'smooth'
});

window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
});

$('html, body').animate({
    scrollTop: $(window).scrollTop() + 500
}, 'slow');