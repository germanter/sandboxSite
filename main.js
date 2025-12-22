

import { renderGames } from './global.js';


// Panel Kontrol Fonksiyonu
function setupEmailPanel() {
    const btn = document.getElementById('sendItBtn');
    const panel = document.getElementById('emailPanel');
    const close = document.getElementById('closePanel');

    // Elementlerin sayfada olup olmadığını kontrol edelim (hata almamak için)
    if (btn && panel && close) {
        btn.addEventListener('click', () => {
            panel.classList.remove('hidden');
            btn.classList.add('hidden');
        });

        close.addEventListener('click', () => {
            panel.classList.add('hidden');
            btn.classList.remove('hidden');
        });
    }
}

// DOĞRU KULLANIM: Tek bir fonksiyon içinde ikisini de çağır
document.addEventListener('DOMContentLoaded', () => {
    setupEmailPanel();
    renderGames("gamesGrid"); 
});

