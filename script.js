// Removi todo o sistema de música

// Lista de músicas (URLs do YouTube)
const playlist = {
    'mae': 'https://www.youtube.com/embed/MmRj2pHAyj0?autoplay=1',    // Mãe - Fábio Jr
    'irma': 'https://www.youtube.com/embed/sYxvQOX1_pU?autoplay=1',   // Amizade Sincera
    'cunhada': 'https://www.youtube.com/embed/CePK_I3nHYY?autoplay=1' // Amigos Para Sempre
};

function initializeMusic() {
    const playerContainer = document.getElementById('youtubePlayer');
    let currentIframe = null;

    document.querySelectorAll('.play-button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const audioId = button.getAttribute('data-audio');
            const videoUrl = playlist[audioId];

            console.log('Botão clicado:', audioId);
            console.log('URL do vídeo:', videoUrl);

            if (currentButton === button && currentIframe) {
                // Parar música atual
                console.log('Parando música');
                playerContainer.removeChild(currentIframe);
                currentIframe = null;
                button.classList.remove('playing');
                button.textContent = '▶';
                currentButton = null;
            } else {
                // Parar música anterior (se houver)
                if (currentIframe) {
                    playerContainer.removeChild(currentIframe);
                    if (currentButton) {
                        currentButton.classList.remove('playing');
                        currentButton.textContent = '▶';
                    }
                }

                // Criar novo iframe
                console.log('Tocando nova música');
                const iframe = document.createElement('iframe');
                iframe.src = videoUrl;
                iframe.width = "0";
                iframe.height = "0";
                iframe.allow = "autoplay";
                iframe.style.display = "none";
                
                playerContainer.appendChild(iframe);
                currentIframe = iframe;
                currentButton = button;
                button.classList.add('playing');
                button.textContent = '⏸';
            }
        });
    });
} 