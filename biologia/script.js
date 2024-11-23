// Exemplo de um alerta interativo
document.addEventListener('DOMContentLoaded', function() {
    alert("Bem-vindo ao nosso blog sobre Condiloma Acuminado! Navegue pelas seções para aprender mais.");
    
    // Adicionando um efeito de scroll suave para os links do menu
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});