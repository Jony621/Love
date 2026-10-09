const story = [
  {
    eyebrow: "A NOTE FROM MY HEART",
    heading: "For My Love",
    subheading: "♡  my favorite hello, my hardest goodbye  ♡",
    message: "If I could give you one thing in this world, it would be the ability to see yourself through my eyes. Then you would understand why you mean so much to me.",
    ornament: "✧･ﾟ: *✧･ﾟ:* ♡ *:･ﾟ✧*:･ﾟ✧",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1000&q=85", imageAlt: "A romantic couple watching the sunset"
  },
  {
    eyebrow: "THERE IS SO MUCH TO LOVE",
    heading: "What I Like In You Most",
    subheading: "It's the little things that make you extraordinary.",
    message: "It's not just one thing. It's the beautiful way you make ordinary moments feel special, the kindness in your heart, and the comfort I find just by being close to you.",
    ornament: "୨୧  little things, endless reasons  ୨୧",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1000&q=85", imageAlt: "Soft pink flowers in romantic light"
  },
  {
    eyebrow: "IF I HAD TO CHOOSE",
    heading: "You",
    subheading: "In you, I like you most.",
    message: "Not a perfect version of you, not a version you think the world wants to see—just you. Your real, wonderful, sometimes silly, always precious self. That's the person my heart chooses.",
    ornament: "♡ just you, always you ♡",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=85", imageAlt: "A couple sharing a romantic moment"
  },
  {
    eyebrow: "THE WINDOWS TO YOUR SOUL",
    heading: "Your Eyes",
    subheading: "I could get lost in them and never ask for directions.",
    message: "Your eyes have a kind of magic I can't explain. Sometimes one look from you says more than a thousand words, and when they light up with happiness, my whole world feels a little brighter.",
    ornament: "✧ eyes full of stars ✧",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=85", imageAlt: "A softly lit portrait with expressive eyes"
  },
  {
    eyebrow: "MY FAVORITE SIGHT",
    heading: "Your Smile",
    subheading: "My sunshine on even the cloudiest day.",
    message: "Your smile is my favorite kind of beautiful. It makes the world feel softer, turns my bad days around, and reminds me that happiness can be as simple as seeing you smile.",
    ornament: "☼ a little sunshine, just for me ☼",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=85", imageAlt: "A warm, happy portrait"
  },
  {
    eyebrow: "I COULD LISTEN FOREVER",
    heading: "How You Speak",
    subheading: "Even the simplest words sound special from you.",
    message: "I love hearing you talk—your stories, your excitement, your random little thoughts, and even the way you say my name. I don't just listen to your words; I love the feeling of being close to you when you share them with me.",
    ornament: "ღ your voice feels like home ღ",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1000&q=85", imageAlt: "A couple enjoying a quiet moment together"
  }
];

const heartStage = document.getElementById("heartStage");
const heartButton = document.getElementById("heartButton");
const contentStage = document.getElementById("contentStage");
const eyebrow = document.getElementById("eyebrow");
const heading = document.getElementById("heading");
const subheading = document.getElementById("subheading");
const message = document.getElementById("message");
const ornament = document.getElementById("ornament");
const storyImage = document.getElementById("storyImage");
const nextButton = document.getElementById("nextButton");
const musicToggle = document.getElementById("musicToggle");
const musicStatus = document.getElementById("musicStatus");
const youtubeAudio = document.getElementById("youtubeAudio");
const stepCount = document.getElementById("stepCount");
const progressBar = document.getElementById("progressBar");

let currentStep = -1;
let musicStarted = false;
let musicIsPlaying = false;
const youtubeVideoId = "O_xFSe4fZuA"; // Prithibir Joto Sukh — Habib Wahid & Nancy

function startMusic() {
  if (musicStarted) return;
  musicStarted = true;
  youtubeAudio.innerHTML = `<iframe id="loveSongPlayer" title="Prithibir Joto Sukh by Habib Wahid and Nancy" width="1" height="1" src="https://www.youtube-nocookie.com/embed/${youtubeVideoId}?autoplay=1&loop=1&playlist=${youtubeVideoId}&controls=0&playsinline=1&rel=0&enablejsapi=1" allow="autoplay; encrypted-media; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
  musicIsPlaying = true;
  musicToggle.textContent = "Ⅱ";
  musicToggle.setAttribute("aria-label", "Pause song");
  musicStatus.textContent = "Now playing · loops in the background";
}

function toggleMusic() {
  const player = document.getElementById("loveSongPlayer");
  if (!musicStarted) { startMusic(); return; }
  if (!player || !player.contentWindow) return;
  const command = musicIsPlaying ? "pauseVideo" : "playVideo";
  player.contentWindow.postMessage(JSON.stringify({ event: "command", func: command, args: [] }), "*");
  musicIsPlaying = !musicIsPlaying;
  musicToggle.textContent = musicIsPlaying ? "Ⅱ" : "▶";
  musicToggle.setAttribute("aria-label", musicIsPlaying ? "Pause song" : "Play song");
  musicStatus.textContent = musicIsPlaying ? "Now playing · loops in the background" : "Paused · tap play to continue";
}

musicToggle.addEventListener("click", toggleMusic);

function sprinkleHearts() {
  const symbols = ["♡", "♥", "✧", "ღ"];
  const rect = heartButton.getBoundingClientRect();
  for (let i = 0; i < 13; i++) {
    const particle = document.createElement("span");
    particle.className = "floating-heart";
    particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    particle.style.left = `${rect.left + rect.width / 2 + (Math.random() - .5) * 170}px`;
    particle.style.top = `${rect.top + rect.height / 2 + (Math.random() - .5) * 80}px`;
    particle.style.fontSize = `${14 + Math.random() * 18}px`;
    document.body.appendChild(particle);
    particle.addEventListener("animationend", () => particle.remove());
  }
}

function showStep(index) {
  currentStep = index;
  const item = story[index];
  eyebrow.textContent = item.eyebrow;
  heading.textContent = item.heading;
  subheading.textContent = item.subheading;
  message.textContent = item.message;
  ornament.textContent = item.ornament;
  storyImage.src = item.image;
  storyImage.alt = item.imageAlt;
  stepCount.textContent = `A tiny love story · ${index + 1} of ${story.length}`;
  progressBar.style.width = `${((index + 1) / story.length) * 100}%`;
  nextButton.hidden = false;
  nextButton.innerHTML = index === story.length - 1
    ? 'Read it all again <span>♡</span>'
    : 'Next little secret <span>♡</span>';
  contentStage.hidden = false;
  contentStage.style.animation = "none";
  void contentStage.offsetWidth;
  contentStage.style.animation = "";
}

heartButton.addEventListener("click", () => {
  startMusic();
  sprinkleHearts();
  heartButton.classList.add("broken");
  window.setTimeout(() => {
    heartStage.hidden = true;
    showStep(0);
  }, 430);
});

nextButton.addEventListener("click", () => {
  if (currentStep >= story.length - 1) {
    currentStep = -1;
    contentStage.hidden = true;
    heartStage.hidden = false;
    heartButton.classList.remove("broken");
    progressBar.style.width = "20%";
    eyebrow.textContent = "MY FAVORITE PERSON";
    stepCount.textContent = "A tiny love story · 1 of 5";
    nextButton.hidden = true;
    return;
  }
  showStep(currentStep + 1);
});
