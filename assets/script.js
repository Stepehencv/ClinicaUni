// Menu mobile
const mobileIcon = document.querySelector('.mobile-menu-icon');
const navMenu = document.querySelector('.nav-menu');

mobileIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Simular envio do formulário
const form = document.getElementById('form-contato');
const msgDiv = document.getElementById('form-mensagem');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        msgDiv.style.display = 'block';
        msgDiv.innerHTML = '✅ Mensagem enviada! Em breve entraremos em contato.';
        form.reset();
        setTimeout(() => {
            msgDiv.style.display = 'none';
        }, 4000);
    });
}