//we just define title and link of games, we dont deal with color shit here
const games = [
  {
    title: "Shoot the Orbs 2D",
    link: "/games/theOrbs2d.html",
    imgLink: "https://i.postimg.cc/dts1cT0S/shoot-The-Orbs2d.webp"
  },
  {
    title: "Shoot the Orbs 3D",
    link: "/games/theOrbs3d.html",
    imgLink: "https://i.postimg.cc/TYtPdYLD/shoot-The-Orbs3d.webp"
  },
  {
    title: "Tree Master 2D",
    link: "/games/treeMaster2d.html",
    imgLink:"https://i.postimg.cc/j536Ls0k/wood-Master.webp"
  },
  {
    title: "Merged Balls 2D",
    link: "/games/mergedBalls2d.html",
    imgLink: "https://i.postimg.cc/jd6r1rC9/merged-Balls.webp"
  },
  {
    title: "Make a mess Lab",
    link: "/games/makeAMessLab.html",
    imgLink: "https://i.postimg.cc/90tYRq3x/make-AMess-Lab.webp"
  },
  {
    title: "Crazy Drone",
    link: "/games/crazyDrone.html",
    imgLink: "https://i.postimg.cc/9QSF98Y1/crazy-Drone.webp"
  },
  {
    title: "DumbAI",
    link: "/games/dumbAI.html",
    imgLink: "https://i.postimg.cc/sXKX0pWV/dumb-AI.webp"
  },
  {
    title: "Dino Mod",
    link: "/games/dinoMod.html",
    imgLink: "https://i.postimg.cc/Xvr0dmKy/dino-Mod.webp"
  },
  {
    title: "3D Arena",
    link: "/games/3dArena.html",
    imgLink: "https://i.postimg.cc/Gpy3xFMw/3d-Arena.webp"
  },
  {
    title: "Snipe The Bottles",
    link: "/games/snipeBottle.html",
    imgLink: "https://i.postimg.cc/J0865rd1/snipe-Bottle.webp"
  },
  {
    title: "2D Hanging Ball",
    link: "/games/hangingBall2d.html",
    imgLink: "https://i.postimg.cc/pVCYdZVs/hanging-Ball.webp"
  },
  {
    title: "3D Neon Race",
    link: "/games/neonRace3d.html",
    imgLink: "https://i.postimg.cc/NFggtWQ2/neon-Race.webp"
  },
  {
    title: "3D Chess",
    link: "/games/chess3d.html",
    imgLink: "https://i.postimg.cc/y838Cv9k/chess3d.webp"
  },
  {
    title: "3D Shoot The Aliens",
    link: "/games/shootAliens3d.html",
    imgLink: "https://i.postimg.cc/0jc9ycNn/shoot-The-Aliens.webp"
  },
  {
    title: "3D Shoot The Bloops",
    link: "/games/shootBloops3d.html",
    imgLink: "https://i.postimg.cc/7PVH9YN5/shoot-The-Bloops.webp"
  },
  {
    title: "Crazy Impulse",
    link: "/games/crazyImpulse.html",
    imgLink: "https://i.postimg.cc/445fPN1Q/crazy-Impulse.webp"
  },
  {
    title: "2D Drag Blocks",
    link: "/games/dragBlocks2d.html",
    imgLink: "https://i.postimg.cc/Dyw2Mkjh/drag-ABlock.webp"
  },
  {
    title: "Brick By Brick 2D",
    link: "/games/brickBybrick2d.html",
    imgLink: "https://i.postimg.cc/dVvKWFgF/brick-By-Brick.webp"
  }

];


//color base control here
const colorPalette = [
  "blue",    // Mavi
  "purple",  // Mor
  "amber",   // Kehribar/Turuncu
  "green",   // Yeşil
  "red",     // Kırmızı
  "slate"    // Gri/Füme
];


// 3. Fisher-Yates Karıştırma Fonksiyonu
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Elemanları takas et (Swap)
  }
  return array;
}


async function safeNavigate(targetUrl) {
  // 1. Önce tarayıcının online durumuna bak (Hızlı kontrol)
    if (!navigator.onLine) {
        showOfflineScreen();
        return;
    }
    
    try {
        // Sunucudan çok küçük bir parça çekerek gerçek bağlantıyı test et
        // 'no-store' ile cache'i devre dışı bırakıyoruz ki gerçek sonuç gelsin
        const response = await fetch('/assets/logo.ico', { 
            method: 'HEAD', 
            cache: 'no-store' 
        });

        if (response.ok) {
            window.location.href = targetUrl;
        } else {
            throw new Error("Poor Connection"); 
        }
    } catch (error) {
        // İnternet yoksa kullanıcıyı uyar veya bir 'lost-connection' sayfasına at
        alert("To Load The Games You Need Internet.");
        // İstersen: window.location.href = "/connection-lost.html";
    }
}

// HTML'den erişebilmek için window objesine bağla
window.safeNavigate = safeNavigate;


export function renderGames(containerId, limit = null){
  const grid = document.getElementById(containerId);
  
  if (!grid) {
    console.error(`Container with ID "${containerId}" not found.`);
    return;
  }

  // İçeriği temizle (Tekrar çağrıldığında üst üste binmemesi için)
  grid.innerHTML = "";

// --- YENİ MANTIK BAŞLANGICI ---
  let processedGames;

  if (limit) {
    // Limit varsa: Önce karıştır (shuffle), sonra limit kadarını al (slice)
    processedGames = shuffleArray([...games]).slice(0, limit);
  } else {
    // Limit yoksa: Orijinal listeyi hiç karıştırmadan direkt kullan
    processedGames = games;
  }
  // --- YENİ MANTIK BİTİŞİ ---

  // Renkleri her render'da karıştır
  const shuffledColors = shuffleArray([...colorPalette]);

  
  processedGames.forEach((game,index) => {
    const color = shuffledColors[index % shuffledColors.length];
    const card = document.createElement("div");
    card.className = `
      game-card   bg-gradient-to-br from-${color}-50 to-${color}-50
      rounded-2xl p-2 md:p-8 border-2 border-${color}-200 hover:border-${color}-400
    `;

        // Burada linki holder.html'e yönlendiriyoruz ve bilgileri URL'e gömüyoruz
    // Limit varsa holder.html, yoksa holder/holder.html kullan
    const baseUrl = limit ? "holder.html" : "holder/holder.html";

    const holderUrl = `${baseUrl}?title=${encodeURIComponent(game.title)}&gameUrl=${encodeURIComponent(game.link)}`;

    card.innerHTML = `
      <h3 class="text-xl font-semibold text-slate-800 mb-6 text-center">
        ${game.title}
      </h3>

      <div class="relative w-full h-40 mb-6 overflow-hidden rounded-xl border border-${color}-200">
        <img 
          src="${game.imgLink}" 
          alt="${game.title}" 
          class="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
          onerror="this.src='https://via.placeholder.com/300x200?text=Game+Image'"
        />
      </div>

      <button 
        class="w-full bg-${color}-600 hover:bg-${color}-700 text-white font-semibold py-3 rounded-xl transition-colors"
        onclick="safeNavigate('${holderUrl}')">
        Play Now
      </button>
    `;

    grid.appendChild(card);
  });
}

