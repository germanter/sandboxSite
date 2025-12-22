import { renderGames } from '../global.js';

function goHome() { // still need it
// Eğer ../index.html çalışmıyorsa, yolu şu şekilde zorla:
    // Mevcut adresin sonundaki /holder/holder.html kısmını atıp index.html ekler.
    const rootPath = window.location.href.split('/holder/')[0];
    window.location.href = rootPath + "/index.html";
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


     renderGames("gamesGridForHolder",6)
    });