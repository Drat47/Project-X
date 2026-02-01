// Animation Timeline
const animationTimeline = () => {
  // Spit chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg",
  };

  const tl = new TimelineMax();

  tl.to(".container", 0.1, {
    visibility: "visible",
  })
    .from(".one", 0.7, {
      opacity: 0,
      y: 10,
    })
    .from(".two", 0.4, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=0.5"
    )
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "-=1"
    )
    .from(".three", 0.7, {
      opacity: 0,
      y: 10,
      // scale: 0.7
    })
    .to(
      ".three",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=0.5"
    )
    .from(".four", 0.7, {
      scale: 0.2,
      opacity: 0,
    })
    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0,
    })
    .staggerTo(
      ".hbd-chatbox span",
      0.5,
      {
        visibility: "visible",
      },
      0.05
    )
    .to(".fake-btn", 0.1, {
      backgroundColor: "rgb(127, 206, 248)",
    })
    .to(
      ".four",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150,
      },
      "+=0.5"
    )
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=0.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=0.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff",
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=0.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=0.5")
    .from(
      ".idea-5",
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0,
      },
      "+=0.5"
    )
    .to(
      ".idea-5 span",
      0.7,
      {
        rotation: 90,
        x: 8,
      },
      "+=0.4"
    )
    .to(
      ".idea-5",
      0.7,
      {
        scale: 0.2,
        opacity: 0,
      },
      "+=0.5"
    )
    .staggerFrom(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut,
      },
      0.2
    )
    .staggerTo(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut,
      },
      0.2,
      "+=0.5"
    )
    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400,
      },
      {
        opacity: 1,
        y: -1000,
      },
      0.2
    )
    .from(
      ".girl-dp",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
      },
      "-=2"
    )
    .from(".hat", 0.5, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0,
    })
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.7,
      {
        scale: 1.4,
        rotationY: 150,
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut,
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg",
      },
      "party"
    )
    .staggerTo(
      ".eight svg",
      1.5,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4,
      },
      0.3
    )
    .to(".six", 0.5, {
      opacity: 0,
      y: 30,
      zIndex: "-1",
    })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      0.5,
      {
        rotation: 90,
      },
      "+=1"
    );

  // Pink Heart Physics Engine
  const hearts = [];
  const maxHearts = 15; // Exact count from user
  const heartWidth = 130; // Updated from CSS
  const heartHeight = 130;

  class PinkHeart {
    constructor(side) {
      this.element = document.createElement("div");
      this.element.className = "pink-heart";

      // Assign random shade
      const shade = Math.floor(Math.random() * 5) + 1;
      this.element.classList.add(`shade-${shade}`);

      document.body.appendChild(this.element);

      // Spawn Logic based on Side (0:Top, 1:Right, 2:Bottom, 3:Left)
      this.x = 0;
      this.y = 0;
      this.vx = 0;
      this.vy = 0;

      switch (side) {
        case 0: // Top
          this.x = Math.random() * (window.innerWidth - heartWidth);
          this.y = -heartHeight;
          this.vx = (Math.random() - 0.5) * 4;
          this.vy = Math.random() * 2 + 2; // Down
          break;
        case 1: // Right
          this.x = window.innerWidth;
          this.y = Math.random() * (window.innerHeight - heartHeight);
          this.vx = -(Math.random() * 2 + 2); // Left
          this.vy = (Math.random() - 0.5) * 4;
          break;
        case 2: // Bottom
          this.x = Math.random() * (window.innerWidth - heartWidth);
          this.y = window.innerHeight;
          this.vx = (Math.random() - 0.5) * 4;
          this.vy = -(Math.random() * 2 + 2); // Up
          break;
        case 3: // Left
          this.x = -heartWidth;
          this.y = Math.random() * (window.innerHeight - heartHeight);
          this.vx = Math.random() * 2 + 2; // Right
          this.vy = (Math.random() - 0.5) * 4;
          break;
      }

      this.element.style.left = `${this.x}px`;
      this.element.style.top = `${this.y}px`;
    }

    update() {
      // Apply velocity
      this.x += this.vx;
      this.y += this.vy;

      // Bounce off walls (keep inside)
      if (this.x <= 0) { this.vx = Math.abs(this.vx); this.x = 0; }
      if (this.x + heartWidth >= window.innerWidth) { this.vx = -Math.abs(this.vx); this.x = window.innerWidth - heartWidth; }
      if (this.y <= 0) { this.vy = Math.abs(this.vy); this.y = 0; }
      if (this.y + heartHeight >= window.innerHeight) { this.vy = -Math.abs(this.vy); this.y = window.innerHeight - heartHeight; }

      // Update position
      this.element.style.left = `${this.x}px`;
      this.element.style.top = `${this.y}px`;
    }
  }

  // Spawner: 5 from each side = 20 total
  let spawnedCount = 0;
  let spawnSide = 0;

  const spawnInterval = setInterval(() => {
    if (spawnedCount < maxHearts) {
      hearts.push(new PinkHeart(spawnSide));
      spawnSide = (spawnSide + 1) % 4; // Rotate sides
      spawnedCount++;
    } else {
      clearInterval(spawnInterval);
    }
  }, 200);

  // Physics Loop
  const physicsLoop = () => {
    for (let i = 0; i < hearts.length; i++) {
      let h1 = hearts[i];
      h1.update();

      // Collision Detection
      for (let j = i + 1; j < hearts.length; j++) {
        let h2 = hearts[j];

        let dx = (h1.x + heartWidth / 2) - (h2.x + heartWidth / 2);
        let dy = (h1.y + heartHeight / 2) - (h2.y + heartHeight / 2);
        let distance = Math.sqrt(dx * dx + dy * dy);
        let minDist = heartWidth * 0.9;

        if (distance < minDist) {
          let angle = Math.atan2(dy, dx);
          let tx = Math.cos(angle);
          let ty = Math.sin(angle);
          let push = 1;

          h1.vx += tx * push;
          h1.vy += ty * push;
          h2.vx -= tx * push;
          h2.vy -= ty * push;

          h1.vx *= 0.99;
          h1.vy *= 0.99;
          h2.vx *= 0.99;
          h2.vy *= 0.99;
        }
      }
    }
    requestAnimationFrame(physicsLoop);
  };

  physicsLoop();

  // tl.seek("currentStep");
  // tl.timeScale(2);

  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });

  // Music Logic
  const musicBtn = document.getElementById("music-btn");
  const audio = document.getElementById("bg-music");
  let isPlaying = false;

  const toggleMusic = () => {
    if (isPlaying) {
      audio.pause();
      // musicBtn.innerHTML = "🔇"; // No longer needed for image
      musicBtn.style.animation = "none";
      musicBtn.style.opacity = "0.5";
    } else {
      audio.play().then(() => {
        // musicBtn.innerHTML = "🎵"; // No longer needed for image
        musicBtn.style.animation = "pulse 2s infinite";
        musicBtn.style.opacity = "1";
      }).catch(e => console.log("Audio play failed:", e));
    }
    isPlaying = !isPlaying;
  };

  musicBtn.addEventListener("click", toggleMusic);

  // Try to play immediately
  audio.play().then(() => {
    isPlaying = true;
    musicBtn.style.animation = "pulse 2s infinite";
    console.log("Auto-played successfully");
  }).catch(() => {
    console.log("Autoplay blocked, waiting for interaction");
    // Fallback: Auto-start on first user interaction
    document.body.addEventListener("click", function startMusic() {
      if (!isPlaying) {
        audio.play().then(() => {
          isPlaying = true;
          musicBtn.style.animation = "pulse 2s infinite";
        });
      }
      document.body.removeEventListener("click", startMusic);
    }, { once: true });
  });
};

// Import the data to customize and insert them into page
const fetchData = () => {
  fetch("customize.json")
    .then((data) => data.json())
    .then((data) => {
      Object.keys(data).map((customData) => {
        if (data[customData] !== "") {
          if (customData === "imagePath") {
            document
              .getElementById(customData)
              .setAttribute("src", data[customData]);
          } else {
            document.getElementById(customData).innerText = data[customData];
          }
        }
      });
    });
};

// Run fetch and animation in sequence
const resolveFetch = () => {
  return new Promise((resolve, reject) => {
    fetchData();
    resolve("Fetch done!");
  });
};

resolveFetch().then(animationTimeline());
