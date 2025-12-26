import { renderGames, games } from '../global.js';

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


document.addEventListener("DOMContentLoaded", () => {

    
    const params = new URLSearchParams(window.location.search);
    const gameId = params.get("id")

    const game = games.find(g => g.id === parseInt(gameId));


    if (game) {

        const title = game.title;
        const gameUrl = game.link
        const gameDesc = game.desc


        document.title = title + " - Dumbux";
        document.getElementById('game-title-display').innerText = title;
        document.getElementById('sandbox-frame').src = gameUrl;

        // --- HAVALI DESC RENDER SİSTEMİ ---
        const descContainer = document.getElementById('descText');
        
        // Cümleleri böl (Nokta, ünlem veya soru işaretinden sonra böl)
        // Sonra her bir cümleyi temizle ve boş olmayanları al
        const sentences = gameDesc.split(/(?<=[.!?])\s+/).filter(s => s.trim().length > 0);

        descContainer.innerHTML = `
            <div class="flex flex-col gap-6 w-full">
                <div class="flex items-center gap-3">
                    <div class="w-2 h-8 bg-indigo-600 rounded-full"></div>
                    <h2 class="text-2xl md:text-3xl font-extrabold text-slate-800">
                        About <span class="text-indigo-600">${title}</span>
                    </h2>
                </div>

                <div class="flex flex-col gap-3">
                    ${sentences.map(sentence => `
                        <div class="flex gap-4 items-start group">
                            <span class="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400 group-hover:scale-150 transition-transform"></span>
                            <p class="text-slate-600 text-base md:text-lg leading-snug font-medium">
                                ${sentence}
                            </p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

    } else {
        goHome();
    }

    setupEmailPanel();
    renderGames("gamesGridForHolder", 6);
});