// ANIMAÇÃO
window.sr = ScrollReveal({ reset: true });

// HOME
sr.reveal('.introducao-bg', { 
    rotate: {x:0, y:20, z: 0},
    duration: 4000 
});

sr.reveal('.animacao-missao', { 
    rotate: {x: 10, y: 20, z: 0},
    duration:4000
});

sr.reveal('.inscricao-lista', { 
    rotate: {x:0, y:20, z: 0},
    duration:4000
});

// PAGINAS
sr.reveal('.animacao-introducao-pg', { 
    rotate: {x:0, y:20, z: 0},
    duration: 4000 
});

sr.reveal('.texto-introducao-pg', { 
    rotate: {x:0, y:0, z: 0},
    duration: 4000 
});

sr.reveal('.pg-img', { 
    rotate: {x:0, y:30, z: 0},
    duration: 4000 
});

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "../img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "../img/close_white_36dp.svg";
    }
}





