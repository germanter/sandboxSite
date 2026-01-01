

import { renderGames } from './global.js';


function setupEmailPanel() {
    const btn = document.getElementById('sendItBtn');
    const panel = document.getElementById('emailPanel');
    const close = document.getElementById('closePanel');

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

document.addEventListener('DOMContentLoaded', () => {
    setupEmailPanel();
    renderGames("gamesGrid"); 
});

