import { renderGames } from '../global.js';

function goHome() { // still need it
// Eğer ../index.html çalışmıyorsa, yolu şu şekilde zorla:
    // Mevcut adresin sonundaki /holder/holder.html kısmını atıp index.html ekler.
    const rootPath = window.location.href.split('/holder/')[0];
    window.location.href = rootPath + "/index.html";
}

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


document.addEventListener("DOMContentLoaded", ()=> {
    const params = new URLSearchParams(window.location.search);
    const title = params.get('title');
    const gameUrl = params.get('gameUrl');

    if (title && gameUrl) {
        // Sayfa ve Header başlığını güncelle
        document.title = title + " - SIMUX";
        document.getElementById('game-title-display').innerText = title;
        
        // Iframe'e oyunu yükle. 
        // gameUrl "games/oyun.html" şeklinde geldiği için bir üst klasöre çıkıp games'e girmeli
        document.getElementById('sandbox-frame').src = gameUrl;
    } else {
        // Parametre yoksa ana sayfaya güvenli dönüş
        goHome();
    }

     setupEmailPanel();


     renderGames("gamesGridForHolder",6)
    });