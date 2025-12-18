const games = [
  {
    title: "Shoot the Orbs 2D",
    color: "blue",
    bg: "from-blue-50 to-cyan-50",
    border: "border-blue-200 hover:border-blue-400",
    btn: "bg-blue-600 hover:bg-blue-700",
    link: "/games//theOrbs2d.html"
  },
  {
    title: "Shoot the Orbs 3D",
    color: "purple",
    bg: "from-purple-50 to-pink-50",
    border: "border-purple-200 hover:border-purple-400",
    btn: "bg-purple-600 hover:bg-purple-700",
    link: "/games//theOrbs3d.html"
  },
  {
    title: "Make a mess Lab",
    color: "amber",
    bg: "from-amber-50 to-orange-50",
    border: "border-amber-200 hover:border-amber-400",
    btn: "bg-amber-600 hover:bg-amber-700",
    link: "/games//makeAMessLab.html"
  },
    {
    title: "Crazy Drone",
    color: "blue",
    bg: "from-blue-50 to-blue-50",
    border: "border-blue-200 hover:border-blue-400",
    btn: "bg-blue-600 hover:bg-blue-700",
    link: "/games//crazyDrone.html"
  },
{
    title: "3D Arena",
    color: "purple",
    bg: "from-purple-50 to-purple-50",
    border: "border-purple-200 hover:border-purple-400",
    btn: "bg-purple-600 hover:bg-purple-700",
    link: "/games//3dArena.html"
  },
  {
    title: "2D Shaking Block",
    color: "blue",
    bg: "from-blue-50 to-blue-50",
    border: "border-blue-200 hover:border-blue-400",
    btn: "bg-blue-600 hover:bg-blue-700",
    link: "/games//shakingBlock2d.html"
  },
  {
    title: "3D Neon Race",
    color: "purple",
    bg: "from-purple-50 to-purple-50",
    border: "border-purple-200 hover:border-purple-400",
    btn: "bg-purple-600 hover:bg-purple-700",
    link: "/games//neonRace3d.html"
  }
];

const grid = document.getElementById("gamesGrid");

games.forEach(game => {
  const card = document.createElement("div");
  card.className = `
    game-card bg-gradient-to-br ${game.bg}
    rounded-2xl p-8 border-2 ${game.border}
  `;

  card.innerHTML = `
    <h3 class="text-xl font-semibold text-slate-800 mb-6 text-center">
      ${game.title}
    </h3>

    <div class="flex items-center justify-center h-32 mb-4">
      <div class="w-20 h-20 rounded-full border-4 border-${game.color}-400"></div>
    </div>

    <button 
      class="w-full ${game.btn} text-white font-semibold py-3 rounded-xl transition-colors"
      onclick="location.href='${game.link}'">
      Play Now
    </button>
  `;

  grid.appendChild(card);
});
