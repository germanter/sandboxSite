

//we just define title and link of games, we dont deal with color shit here
const games = [
  { title: "Shoot the Orbs 2D", link: "/games//theOrbs2d.html" },
  { title: "Shoot the Orbs 3D", link: "/games//theOrbs3d.html" },
  { title: "Make a mess Lab", link: "/games//makeAMessLab.html" },
  { title: "Crazy Drone", link: "/games//crazyDrone.html" },
  { title: "3D Arena", link: "/games//3dArena.html" },
  { title: "2D Shaking Block", link: "/games//shakingBlock2d.html" },
  { title: "3D Neon Race", link: "/games//neonRace3d.html" },
  { title: "3D Shoot The Aliens", link: "/games//shootAliens3d.html" },
  { title: "3D Shoot The Bloops", link: "/games//shootBloops3d.html" },
  { title: "Crazy Impulse", link: "/games//crazyImpulse.html" },
  { title: "2D Drag Blocks", link: "/games//dragBlocks2d.html" }
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

// Renkleri karıştır (Orijinal diziyi bozmamak için kopyasını oluşturup karıştırıyoruz)
const shuffledColors = shuffleArray([...colorPalette]);


const grid = document.getElementById("gamesGrid");

games.forEach((game,index) => {
  const color = shuffledColors[index % shuffledColors.length];
  const card = document.createElement("div");
  card.className = `
    game-card bg-gradient-to-br from-${color}-50 to-${color}-50
    rounded-2xl p-8 border-2 border-${color}-200 hover:border-${color}-400
  `;

  // Burada linki holder.html'e yönlendiriyoruz ve bilgileri URL'e gömüyoruz
  const holderUrl = `holder/holder.html?title=${encodeURIComponent(game.title)}&gameUrl=${encodeURIComponent(game.link)}`;

  card.innerHTML = `
    <h3 class="text-xl font-semibold text-slate-800 mb-6 text-center">
      ${game.title}
    </h3>

    <div class="flex items-center justify-center h-32 mb-4">
      <div class="w-20 h-20 rounded-full border-4 border-${color}-400"></div>
    </div>

    <button 
      class="w-full bg-${color}-600 hover:bg-${color}-700 text-white font-semibold py-3 rounded-xl transition-colors"
      onclick="location.href='${holderUrl}'">
      Play Now
    </button>
  `;

  grid.appendChild(card);
});
