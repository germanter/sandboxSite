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
           showOfflineScreen();        
        }
    } catch (error) {
        // İnternet yoksa kullanıcıyı uyar veya bir 'lost-connection' sayfasına at
        showOfflineScreen();
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



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function showOfflineScreen() {
    // Sayfadaki her şeyi temizle ve senin şık tasarımını bas
    document.documentElement.innerHTML = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Connection Lost - Dumbux</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            background: linear-gradient(135deg, #f5f3ff 0%, #f0f9ff 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        .container {
            background: white;
            border-radius: 16px;
            padding: 60px 40px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
            text-align: center;
            max-width: 500px;
            width: 100%;
        }

        .icon {
            width: 120px;
            height: 120px;
            margin: 0 auto 30px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 60px;
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0%, 100% {
                opacity: 1;
                transform: scale(1);
            }
            50% {
                opacity: 0.7;
                transform: scale(0.95);
            }
        }

        h1 {
            font-size: 28px;
            color: #1a202c;
            margin-bottom: 12px;
            font-weight: 700;
        }

        .subtitle {
            font-size: 16px;
            color: #718096;
            margin-bottom: 10px;
            line-height: 1.6;
        }

        .error-code {
            display: inline-block;
            background: #edf2f7;
            padding: 8px 16px;
            border-radius: 8px;
            color: #667eea;
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 30px;
        }

        .description {
            color: #4a5568;
            font-size: 15px;
            margin-bottom: 40px;
            line-height: 1.7;
        }

        .button-wrapper {
            display: flex;
            gap: 12px;
            flex-direction: column;
        }

        .btn-primary {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 14px 32px;
            font-size: 16px;
            font-weight: 600;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
        }

        .btn-primary:active {
            transform: translateY(0);
        }

        .btn-secondary {
            background: transparent;
            color: #667eea;
            border: 2px solid #667eea;
            padding: 12px 32px;
            font-size: 16px;
            font-weight: 600;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .btn-secondary:hover {
            background: #f5f3ff;
            transform: translateY(-2px);
        }

        .btn-secondary:active {
            transform: translateY(0);
        }

        /* Mobile Styles */
        @media (max-width: 640px) {
            .container {
                padding: 40px 24px;
            }

            h1 {
                font-size: 24px;
            }

            .icon {
                width: 100px;
                height: 100px;
                font-size: 50px;
            }

            .subtitle {
                font-size: 15px;
            }

            .btn-primary,
            .btn-secondary {
                padding: 12px 24px;
                font-size: 15px;
            }

            .description {
                font-size: 14px;
            }
        }

        /* Tablet/Desktop Styles */
        @media (min-width: 641px) {
            .button-wrapper {
                flex-direction: row;
                justify-content: center;
            }

            .btn-primary,
            .btn-secondary {
                flex: 0 1 auto;
                min-width: 150px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="icon">📡</div>
        
        <h1>Connection Lost</h1>
        <p class="subtitle">Oops! Something went wrong</p>
        
        <div class="error-code">ERROR 503</div>
        
        <p class="description">
            It looks like your internet connection is unstable or our server is temporarily unavailable. Don't worry, we're working to get things back online!
        </p>

        <div class="button-wrapper">
            <button class="btn-primary" onclick="retryConnection()">
                🔄 Try Again
            </button>
        </div>
    </div>

    <script>
        function retryConnection() {
            // Reload the page
            location.reload();
        }
    </script>
</body>
</html>
`;
}






