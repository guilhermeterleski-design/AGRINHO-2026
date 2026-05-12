document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn-interativo');
    const msg = document.getElementById('msg-interativa');

    btn.addEventListener('click', () => {
        // Alterna a exibição da mensagem
        if (msg.classList.contains('hidden')) {
            msg.classList.remove('hidden');
            btn.textContent = 'Ocultar Detalhes';
        } else {
            msg.classList.add('hidden');
            btn.textContent = 'Ver Impacto Ambiental';
        }
    });
});
