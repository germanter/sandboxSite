//we just define title and link of games, we dont deal with color shit here
export const games = [
  {
    id : 1,
    title: "Shoot the Orbs 2D",
    link: "/games/theOrbs2d.html",
    imgLink: "https://i.postimg.cc/dts1cT0S/shoot-The-Orbs2d.webp",
    desc: "Step into Shoot the Orbs 2D, a high-fidelity sandbox where precision and timing are everything. This simulator focuses on the unique mechanics of Vertical Ejection, where every launch requires careful observation of physics and momentum. The experience is designed to be intuitive yet grounded in realistic motion. To begin your mission, scan the airspace for active orbs moving across the grid. Select Your Target: Click or tap on a moving orb to lock your tracking systems. A red tactical bracket will confirm your lock-on status. Initiate Launch: Once a target is locked, the FIRE button will prime. Clicking it triggers the multi-stage launch sequence. Observe the Sequence: Watch as the interceptor is pneumatically pushed from the launcher. It will hang momentarily in the air (the turnover phase) before its main engines ignite to chase the orb. Reset: If the grid becomes too cluttered or you wish to start a new drill, use the RESET SCENARIO command to refresh all assets. This simulator is built using a modern HTML5 Canvas stack, prioritizing smooth performance and mathematically accurate motion. By leveraging a custom Vector Mathematics library, the project handles complex physical calculations: Kinematic Trajectories, Particle Physics, Guidance Logic, and Responsive Scaling."
  },
  {
    id : 2,
    title: "Shoot the Orbs 3D",
    link: "/games/theOrbs3d.html",
    imgLink: "https://i.postimg.cc/TYtPdYLD/shoot-The-Orbs3d.webp",
    desc: "Welcome to the digital frontline. Shoot The Orbs 3D is an immersive web-based simulation that puts you in control of a high-tech interceptor system. Built with a sleek, minimalist aesthetic, this sandbox focuses on the raw mechanics of precision guidance and tactical engagement. It is a real-time visualization of physics-based targeting and multi-stage launch sequences. Stepping into the commander's seat is intuitive but requires precision. Once the system is ONLINE, your sensors will automatically track hovering white orbs in the 3D space. Acquire Lock: Use your mouse or touch screen to click directly on a target. A red LOCK reticle will appear, confirming the tracking software has synchronized with the orb's coordinates. Engage: Once a lock is established, the FIRE button becomes active. Initiating the launch triggers a realistic three-stage sequence: Pneumatic Ejection, Lateral Tip-Over, and Active Tracking. Navigate: Use your mouse to rotate the camera around the launch site. Scroll to zoom and get a closer look at the procedural impact effects. System Reset: If you have cleared the airspace or want to start a new simulation, hit the RESET button to recalibrate the field. This project is a robust demonstration of modern web technologies, specifically designed to showcase the power of the Three.js library and WebGL rendering. The simulation calculates physics and lighting in real-time to provide an interactive, high-utility experience."
  },
  {
    id:3,
    title: "Tree Master 2D",
    link: "/games/treeMaster2d.html",
    imgLink: "https://i.postimg.cc/j536Ls0k/wood-Master.webp",
    desc: "Get ready to test your reflexes in Tree Master 2D, a high-octane, arcade-style survival game built for speed demons and precision clickers. This isn't just a walk in the woods; it is a battle against time and gravity where one wrong move means getting 'stumped' by a descending branch. The game features a vibrant, modern pixel-art aesthetic powered by a custom HTML5 Canvas engine, delivering buttery-smooth 60 FPS gameplay directly in your browser. The rules are simple, but the execution is legendary. You have one goal: chop as much wood as possible without getting crushed. Chop: Tap or click the LEFT side of the screen to stand on the left, or the RIGHT side to stand on the right. Avoid Branches: Watch the tree segments above you. If a branch is on the left, move to the right before your next chop. If it is on the right, move to the left. Beat the Clock: Your energy bar (the timer at the top) drains constantly. Every successful chop refills a portion of the bar. If the bar hits zero, it is game over. Increase the Pace: As your score climbs, the timer drains faster. You will need to find a rhythm to survive the 'difficulty scaling' mechanics. Super Lumberjack Ultra DX is an optimized web application that showcases advanced front-end development techniques."
  },
  {
    id:4,
    title: "Merged Balls 2D",
    link: "/games/mergedBalls2d.html",
    imgLink: "https://i.postimg.cc/jd6r1rC9/merged-Balls.webp",
    desc: "Step into the Merged Balls 2D, where gravity is your best friend and your worst enemy. This isn't just another matching game; it’s a high-stakes, neon-lit sandbox where strategic drops meet chaotic chain reactions. Whether you're a casual player looking to kill time or a hardcore strategist aiming for the 4096 tile, Bounce Merge delivers a smooth, tactile experience that keeps you coming back for 'just one more drop.' The mechanics are simple to pick up but difficult to master. Your objective is to drop numbered balls into the factory and match identical values to merge them into higher numbers. Aim and Release: Drag your finger or mouse to position the ball. Release to let gravity take over. Merge Logic: When two balls of the same value collide, they fuse into a single ball with double the value (e.g., 2 + 2 = 4, 1024 + 1024 = 2048). Watch the Danger Zone: Keep an eye on the red dashed line. If your factory overflows and balls stay above this limit for too long, it’s game over. Master the Modes: Choose Endless for a relaxed session, Level Mode to hit specific goals, or Challenge Mode to prove your efficiency with a limited number of drops. Bounce Merge is built on a robust HTML5 Canvas architecture, designed for high-performance rendering and buttery-smooth physics."
  },
  {
    id:5,
    title: "Sandbox.exe (only desktop)",
    link: "/games/sandboxExe.html",
    imgLink: "https://i.postimg.cc/KY4QFjPJ/sandbox-Exe.webp",
    desc: "Step into Sandbox.exe, a high-fidelity digital frontier where your imagination is the only law and physics is your ultimate playground. This isn't just a building tool; it’s a sophisticated, neon-infused environment where architectural precision meets chaotic destruction. Whether you are meticulously engineering a complex fortress or testing the structural integrity of a skyscraper with high-caliber ballistics, Sandbox.exe delivers a tactile, responsive experience that bridges the gap between creator and destroyer. Master the Toolkit: The world of Sandbox.exe is governed by a suite of professional-grade tools designed for total environmental control: * The Holder (Key 1): Your primary interface with the world. Manipulate objects in 3D space, adjust their distance with the scroll wheel, and position them with surgical precision. * Merger & Wire (Keys 2-3): Defy the limits of individual parts. Use the Merger to fuse objects into a single rigid body or the Wire tool to create complex, physics-based tethering systems. * The Icer (Key 4): Control the state of matter. Freeze objects in mid-air to create floating platforms or static foundations, then instantly toggle them back into dynamic motion. * Assault Rifle (Key 6): The ultimate stress test. Features a procedural recoil system, muzzle flashes, and realistic bullet hole decals. Use it to apply kinetic force to your creations and watch the physics engine react in real-time. Technical Excellence: Built on a robust architecture utilizing Three.js for high-performance 3D rendering and Cannon-es for industrial-grade physics calculations, Sandbox.exe ensures that every collision, constraint, and explosion is buttery-smooth. With real-time shadow mapping and atmospheric fog, it provides an immersive aesthetic that remains performant even as the object count rises. Note: Optimized for precision control and high-performance rendering, Sandbox.exe is a Desktop-Only experience. Keyboard and mouse are required to navigate the complexities of this physical world."  },
  {
    id:6,
    title: "Make a mess Lab",
    link: "/games/makeAMessLab.html",
    imgLink: "https://i.postimg.cc/90tYRq3x/make-AMess-Lab.webp",
    desc: "Step into the Make A Mess Lab, a high-fidelity virtual laboratory where the laws of motion are yours to command. This isn't just a technical demo; it’s a professional-grade interactive playground built with Three.js and Cannon-es to deliver buttery-smooth 3D rendering and realistic physical simulations. Whether you’re a curious explorer of digital worlds or a power user testing the limits of kinetic energy, this sandbox offers a tactile, high-performance experience optimized for both desktop and mobile.\n\nThe interface balances 'pick-up-and-play' simplicity with deep mechanical control, transforming your browser into a responsive environment for experimentation:\n\nSpawn & Populate: Use the Physics Lab panel to drop cubes, spheres, or complex compound objects like bottles into the fray. Every object features randomized aesthetics and unique physical properties.\n\nTactile Manipulation: Grab and move objects seamlessly. Use a mouse on desktop or intuitive touch gestures on mobile to navigate items through 3D space.\n\nDynamic Motion & Throwing: Master the art of momentum. Rotate objects mid-air using the Q and E keys, or 'flick' them across the scene to watch kinetic energy transfer in real-time based on your pointer velocity.\n\nFull Spatial Control: Navigate your environment with professional-grade camera controls, allowing you to rotate, pan, and zoom to witness every collision from the perfect angle.\n\nBuilt on a robust, content-rich architecture, the 3D Physics Sandbox is designed for those who want to play, build, and break things in a beautifully rendered mathematical world."
  },
  {
    id:7,
    title: "Crazy Drone",
    link: "/games/crazyDrone.html",
    imgLink: "https://i.postimg.cc/9QSF98Y1/crazy-Drone.webp",
    desc: "Welcome to the next level of browser based flight simulation. This isn't just a simple animation; it is a high fidelity 3D Drone Simulator designed for enthusiasts who appreciate the intersection of complex physics and smooth gameplay. Whether you are a seasoned FPV pilot or a curious beginner, this sandbox offers a realistic environment to test your maneuvers and master the skies. Step into the cockpit and take control of an advanced quadcopter. As you lift off, you will immediately feel the GPS Stabilized flight mode working to keep your craft level. The world is yours to explore, filled with dynamic AI traffic (keep an eye on those moving cars!) and natural obstacles like trees that will test your proximity flying skills. You can cycle through different perspectives, from a classic third person chase cam to an immersive FPV (First Person View) mode that puts you right in the pilot’s seat. Mastering the drone requires a delicate touch. Use W/S for Pitch, A/D for Roll, Arrows for Altitude and Yaw, Shift for Turbo, C for Camera Modes, M for Wind, R for Reboot. Mobile Support available. This project is built on a robust HTML5 and JavaScript foundation, utilizing the powerful Three.js library for high performance WebGL rendering. It employs a custom PID Controller logic to handle self leveling and stabilization."
  },
  {
    id:8,
    title: "DumbAI",
    link: "/games/dumbAI.html",
    imgLink: "https://i.postimg.cc/sXKX0pWV/dumb-AI.webp",
    desc: "Welcome to DumbAI, the world's most intentionally underwhelming artificial intelligence. While other models are busy trying to pass the Turing test or solve world hunger, DumbAI is hard at work perfecting the art of the shrug. It is a satirical sandbox project designed to simulate a 'high-tech' chat interface that delivers nothing but peak sarcasm, dubious wisdom, and glitchy humor. Whether you are looking for coding 'advice' that will definitely break your production environment or life tips from a bot that has the attention span of a goldfish, you have come to the right place. The experience is straightforward and dangerously low-stakes. Simply head to the input field at the bottom of the screen and type your most pressing questions. As you hit enter, you will witness the 'thinking' process in real-time, where the AI might be 'Consulting the void' or 'Spinning the hamster in its brain.' Depending on your keywords, the bot will categorize your query into specific domains like Coding, Corporate, or Mystic. Don't expect accuracy; the model boasts a 0.3% accuracy rate for a reason. DumbAI is a lightweight, high-performance web application built with a modern HTML5, CSS3, and Vanilla JavaScript stack. It utilizes a client-side logic engine with RegEx-driven keyword detection and hand-crafted responses."
  },
  {
    id:9,
    title: "3D Arena",
    link: "/games/3dArena.html",
    imgLink: "https://i.postimg.cc/Gpy3xFMw/3d-Arena.webp",
    desc: "Welcome to the ultimate digital playground where geometry meets gravity. This 3D Arena is a high-performance, browser-based environment designed for creators, experimenters, and anyone who loves to fiddle with spatial logic. Whether you are building a geometric masterpiece or just testing the limits of 3D perspective, this sandbox provides a seamless, tactile interface to bring your abstract ideas into a three-dimensional reality. Getting started in the sandbox is intuitive yet deep. You begin with a clean slate: a vast, grid-lined infinite floor. Use the Spawn Menu to drop Cubes, Spheres, Cones, or even 'Donuts' (Torus) into the scene. Once an object is spawned, clicking it activates the Transform Gizmo, allowing you to manipulate it with surgical precision. The real magic lies in the dual camera system. By switching between Look Mode and Float Mode, you can either orbit around a specific point of interest or physically glide through the 3D space like a spectator drone. Use the 'T' and 'R' keys for quick switching between moving and rotating your objects, and don't forget to use the Delete tool to prune your scene. This project is a robust showcase of modern web graphics, built primarily using the Three.js library."
  },
  {
    id :10,
    title: "Snipe The Bottles",
    link: "/games/snipeBottle.html",
    imgLink: "https://i.postimg.cc/J0865rd1/snipe-Bottle.webp",
    desc: "Welcome to SnipeBottles Pro, a high-octane 3D marksmanship simulation designed for those who live for the perfect shot. This isn't just another browser game; it’s a streamlined, low-latency training sandbox built to test your reflexes, steady your hand, and push your precision to the limit in a sleek, glass-morphic environment. You have 60 seconds to shatter as many neon-infused target bottles as possible. Acquisition: Use your mouse or touch controls to scan the horizon. Targets spawn at varying distances and hover with a subtle bobbing motion. The Scope: Engage the high-powered zoom. Ammo Management: You carry a high-caliber magazine with 5 rounds. Time your reloads strategically. Customization: Use the on-screen sensitivity slider. The experience is centered around fluidity with physical recoil and weapon sway. Upon impact, bottles shatter into shards with custom particle physics. SnipeBottles Pro leverages the cutting edge of modern web standards with Three.js & WebGL, dynamic DPR scaling, Pointer Lock API, and real-time audio synthesis."
  },
  {
    id :11,
    title: "2D Hanging Ball",
    link: "/games/hangingBall2d.html",
    imgLink: "https://i.postimg.cc/pVCYdZVs/hanging-Ball.webp",
    desc: "Step into a sleek, neon-drenched laboratory where gravity is your primary weapon. 2D Hanging Ball is a high-octane sandbox experience that challenges you to master the momentum of a kinetic orb. Your mission is simple but addictive: smash as many flasks as possible before the clock hits zero. Whether you are adjusting the pendulum's length for a tighter swing or chasing golden flasks to keep the timer alive, every movement is governed by realistic physics and fluid animations. It is not just a game; it is a masterclass in interactive canvas simulation. Swing the Orb: On desktop, click and drag the wrecking ball to build momentum. On mobile, use your finger to guide the pendulum's arc. Smash for Points: Impacting blue flasks builds your score and increases your combo multiplier. Time Management: Shatter golden flasks for extra seconds. Portal Mechanics: Hitting a portal shuffles flasks and grants a bonus. Adjust on the Fly: Use the Length Slider to change the pendulum’s rope."
  },
  {
    id :12,
    title: "3D Neon Race",
    link: "/games/neonRace3d.html",
    imgLink: "https://i.postimg.cc/NFggtWQ2/neon-Race.webp",
    desc: "Welcome to the neon-drenched grid of the future. 3D Neon Race is a high-octane, browser-based arcade experience that blends retro-synthwave aesthetics with modern 3D rendering. This isn't just a game; it is a pulse-pounding survival challenge where speed is your only ally and the slightest miscalculation leads to a 'Wasted' screen. Your mission is simple: survive the endless road and rack up the highest score possible. PC Controls: Use the A and D keys or the Left and Right Arrow keys to steer. Mobile: Touch and drag to glide through traffic. Avoid the crimson-pulsing obstacles. As you progress, your speed increases exponentially. Gary Rider: Ultra-Neon is a showcase of efficient HTML5 Canvas utilization and Three.js integration with dynamic rendering, adaptive performance, procedural geometry, custom collision logic, and modern CSS3 UI."
  },
  {
    id:13,
    title: "Crazy Eagle",
    link: "/games/crazyEagle.html",
    imgLink: "https://i.postimg.cc/Cxqf3M43/crazy-Eagle.webp",    
    desc: "Welcome to the high-altitude hunting grounds of the ultimate sky hunter. Crazy Eagle: Apex Predator is an intense, browser-based arcade combat experience that merges visceral survival mechanics with fluid flight dynamics. This isn't just a flight sim; it's a brutal gauntlet where you must dominate the food chain or be grounded forever. Your mission is simple: navigate through jagged peaks, dive for prey in the deep sea, and intercept hostile drones in restricted airspace to rack up the ultimate score. PC Controls: Use the W and S keys to control your pitch and Click to unleash your lethal talons. Mobile: Use the virtual joystick to soar and the Strike button to hunt. As your momentum builds, the environment shifts and the difficulty scales exponentially to test your predatory instincts. Crazy Eagle is a masterclass in lightweight HTML5 Canvas engineering and Web Audio API integration, featuring procedural terrain generation, dynamic screen-shake effects, custom particle physics, and a fully responsive CSS3 interface."  },
  {
    id:14,
    title: "3D Chess",
    link: "/games/chess3d.html",
    imgLink: "https://i.postimg.cc/y838Cv9k/chess3d.webp",
    desc: "Chess 3D is a high-performance, browser-based chess simulator that brings the classic game of strategy into a sleek, futuristic environment. Featuring a custom-built 3D engine and a sophisticated minimax AI, this project is designed for players who appreciate aesthetic precision and technical depth. Experience chess with high-fidelity visuals, real-time lighting, and an AI that thinks several steps ahead to challenge even seasoned players. The game follows standard International Chess rules, enhanced by a modern interface and haptic-style audio feedback. Selection: Click on any white piece to see its legal moves highlighted. Movement: Click on a highlighted ring to move. Smooth GSAP-powered animations. Capturing: Triggers sound and adds to Trophy Gallery. AI Opponent: Uses Minimax with Alpha-Beta Pruning and Piece-Square Tables. History log available. Built using Three.js with OutlineEffect, LatheGeometry, dynamic lighting, shadows, and responsive Glassmorphism UI."
  },
  {
    id:15,
    title: "3D Shoot The Aliens",
    link: "/games/shootAliens3d.html",
    imgLink: "https://i.postimg.cc/0jc9ycNn/shoot-The-Aliens.webp",
    desc: "Step into the vibrant world of Shoot the Aliens, a chaotic 3D shooting gallery that turns a messy bedroom floor into a high-stakes alien invasion. Built for those who love high-energy, 'one-more-turn' gameplay, this experience combines nostalgic toy aesthetics with razor-sharp web performance. You are equipped with a high-tech foam dart blaster, a lucky magic 8-ball charm, and exactly 30 seconds to clear the floor before mom gets home. Controls: Mouse to look and Left-Click to fire (Pointer Lock on desktop); Drag to aim and tap FIRE on mobile. Aliens reappear when hit. Magic 8-Ball gives feedback. Toy Box Battle: Plastic Panic is a masterclass in modern browser-based game development, utilizing Three.js and WebGL with procedural geometry, raycasting physics, dynamic particles, synthesized audio, and responsive UI scaling."
  },
  {
    id:16,
    title: "3D Shoot The Bloops",
    link: "/games/shootBloops3d.html",
    imgLink: "https://i.postimg.cc/7PVH9YN5/shoot-The-Bloops.webp",
    desc: "Dive into the pressurized depths of Shoot the Bloops, a high-octane 3D shooting gallery that transforms the tranquil ocean floor into a chaotic pearl-hunting frenzy. Your mission: pop the anxious, spike-covered pufferfish using your submarine’s bubble cannon before your oxygen supply runs dry. Controls: Mouse/Drag to aim, Click/Tap FIRE. Frenzy mode over 1,000 pearls triggers wavy effects. Landscape recommended on mobile. Shoot The Bloop leverages advanced WebGL via Three.js with procedural marine life, SVG displacement for frenzy, buoyancy physics for bubbles, volumetric fog, and audio synthesis for bloops."
  },
  {
    id:17,
    title: "Crazy Impulse",
    link: "/games/crazyImpulse.html",
    imgLink: "https://i.postimg.cc/445fPN1Q/crazy-Impulse.webp",
    desc: "Welcome to the ultimate digital laboratory for physics enthusiasts and curious minds. The Elastic Collision Simulator is a high fidelity interactive sandbox designed to visualize the fundamental laws of momentum and kinetic energy in real time. Whether you are looking to settle a bet about mass ratios or simply want to watch perfectly calculated impacts, this simulator provides a sleek, glass-morphism interface to explore the fascinating world of linear kinematics. You are presented with two test vehicles: Car 1 (Red) and Car 2 (Blue). Using the intuitive slider controls, you can modify the Mass (from 1 kg to 50 kg) and the Initial Speed (up to 20 m/s) for each car. Watch the collision and bounce. Reset available. Info Panel shows conserved momentum and energy. Built using modern HTML5 Canvas with vanilla JavaScript physics engine implementing conservation laws."
  },
  {
    id:18,
    title: "2D Drag Blocks",
    link: "/games/dragBlocks2d.html",
    imgLink: "https://i.postimg.cc/Dyw2Mkjh/drag-ABlock.webp",
    desc: "Welcome to the most vibrant and addictive sandbox puzzle experience on the web! Drag Blocks takes the classic block-fitting formula and injects it with a dose of personality, neon colors, and ultra-smooth performance. Whether you are looking to kill five minutes or chase a world-class high score, this logic-based playground is designed to keep your brain sharp and your eyes entertained. The goal is simple but the mastery is deep. You start with an empty 8x8 grid and three unique shapes waiting in your dock. Drag these shapes onto the board to create full horizontal or vertical lines. Completed lines explode, clearing space and boosting score. Blocks have 'silly' faces. Game Over when no space left. This project utilizes HTML5 Canvas & DOM with 2D array matrix, CSS3 variables, vanilla JavaScript ES6+, custom Drag-and-Drop for mouse/touch, weighted randomizer, and adaptive UI with CSS Grid/Flexbox."
  },
  {
    id:19,
    title: "Brick By Brick 2D",
    link: "/games/brickBybrick2d.html",
    imgLink: "https://i.postimg.cc/dVvKWFgF/brick-By-Brick.webp",
    desc: "Brick By Brick 2D is a high octane, precision-based construction simulator designed for those who have a sharp eye and even sharper reflexes. Set against a sleek, synthwave-inspired night horizon, your mission is simple yet addictive: stack neon blocks to build the tallest skyscraper the digital world has ever seen. It is a minimalist masterpiece that blends timing mechanics with a futuristic aesthetic, offering a 'one more try' experience. Control a high-tech construction crane. A neon block swings back and forth. Drop: Tap/Click/Spacebar to release. Precision: Perfect alignment maintains width and gives bonus. Miss: Slices off part, making platform smaller. Combos: Multiply score. Game Over: Miss completely, tower crumbles with physics debris. Built using modern HTML5 Canvas with 60 FPS, custom responsive engine, advanced rendering with gradients/particles, procedural skyline, Web Audio API tones, and requestAnimationFrame with delta-time clamp."
  }
];


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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

// 1. Sayfanın offline modda olup olmadığını takip eden bir bayrak (flag)
let isOfflineMode = false;

window.addEventListener('pageshow', function(event) {
    // Eğer zaten offline ekranındaysak, kontrolü tekrar çalıştırma (Döngüyü kırar)
    if (isOfflineMode) return;
    
    if (typeof safeNavigate === 'function') {
        // Sadece kontrol amaçlı çağırıyoruz
        checkConnectionQuietly();
    }
});

// Sadece arka planda kontrol yapan sessiz fonksiyon
async function checkConnectionQuietly() {
    if (!navigator.onLine) {
        isOfflineMode = true; // Bayrağı kaldır
        showOfflineScreen();
        return;
    }
    // Ping testi... (isteğe bağlı ama güvenli)
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

    const holderUrl = `${baseUrl}?id=${game.id}`;

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
            <button class="btn-primary" onclick="window.location.reload();">
                🔄 Try Again
            </button>
        </div>
    </div>

</body>
</html>
`;
}






