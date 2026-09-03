// ============================================================================
// BIRTHDAY EXPERIENCE CONFIGURATION DATA
// Easily customize all text, photos, timeline, and wishes below!
// ============================================================================

export const birthdayData = {
  // Best Friend's Name
  name: "KK",

  // Header / Hero Section
  heroTitle: "Happy Birthday",
  heroSubtitle: "To one of the most wonderful, genuine, and brightest people in my life ✨",
  heroImage: "/kk_main.jpg",
  heroTag: "THE BIRTHDAY GIRL ✨",
  heroQuote: "Today is all about celebrating you and the incredible energy you bring into the world.",

  // Section 3: Birthday Message Card
  messageCard: {
    badge: "JUST A LITTLE REMINDER",
    title: "You make life brighter without even trying.",
    content: [
      "Some people come into your life unexpectedly and make it better. You are one of those rare people.",
      "Today is your day — and I hope it brings you as much genuine warmth and happiness as you bring to everyone around you."
    ]
  },

  // Section 4: Photo Gallery
  gallery: [
    {
      id: 1,
      src: "/kk_watch.jpg",
      caption: "That iconic look ✨",
      aspect: "portrait",
      tag: "Favorite",
      objectFit: "contain",
      bg: "#111111"
    },
    {
      id: 2,
      src: "/kk_1.jpg",
      caption: "Unfiltered laughter & classic moments 🌸",
      aspect: "landscape",
      tag: "Memories"
    },
    {
      id: 3,
      src: "/kk_2.jpg",
      caption: "Always bringing the good energy ⚡",
      aspect: "polaroid",
      tag: "Vibe"
    },
    {
      id: 4,
      src: "/kk_3.jpg",
      caption: "Spontaneous adventures are the best ones 🚗",
      aspect: "portrait",
      tag: "Adventures"
    },
    {
      id: 5,
      src: "/kk_4.jpg",
      caption: "Never a dull moment around you 🌸",
      aspect: "landscape",
      tag: "Unforgettable"
    },
    {
      id: 6,
      src: "/kk_5.jpg",
      caption: "The main character energy right here 👑",
      aspect: "polaroid",
      tag: "Iconic"
    }
  ],

  // Section 5: Timeline ("Moments That Matter") — REMOVED

  // Section 6: Things I Appreciate About You (3 cards only)
  appreciation: [
    {
      icon: "Sun",
      title: "Your Warm Energy",
      description: "You light up any room you walk into with a natural, effortless warmth that makes everyone feel instantly comfortable."
    },
    {
      icon: "Heart",
      title: "Your Genuine Kindness",
      description: "You care deeply about the people in your life, and you show up for them in ways that truly matter."
    },
    {
      icon: "Laugh",
      title: "Your Sense of Humor",
      description: "Whether it's inside jokes or completely silly commentary, you always know how to make any situation funnier."
    }
  ],

  // Section 7: Interactive Surprise Wish
  surprise: {
    buttonText: "There's one more thing... 🎁",
    title: "A Special Wish For You",
    wishText: "I hope this upcoming year brings you more reasons to smile than ever before 😊✨, more beautiful adventures to remember 🌸🦋, peace in the quiet moments 🤍🌙, and everything your heart is quietly working towards. 💫🌷\n\nMay this year be kind to you, full of happiness, laughter, beautiful surprises, and moments worth remembering. 🥹💖✨",
    badge: "BIRTHDAY SURPRISE ✨",
    signature: "Happy Birthday, KK 🤍"
  },

  // Page 2: The Personal Digital Handwritten Letter
  letter: {
    salutation: "Dear KK,",
    paragraphs: [
      "Happy Birthday to one of the most special, hilarious, and irreplaceable people I know.",
      "Before you came into my life, I never really knew what it felt like to have a friend I could genuinely call my own. And then there was you. 🤍✨ You became my first true friend, and honestly, that makes our friendship a little more special to me than I probably know how to explain. 🌷🦋",
      "I hope you always remember how amazing you truly are — even on the days when life gets overwhelming or when you don't feel it. You bring so much light, comfort, and fun into the lives of everyone around you.",
      "Keep being your crazy, kind, brilliant, beautiful self. And no matter how much life changes or where it takes us, I hope there are still countless memories, laughs, and random deep conversations waiting for us.",
      "Have the happiest birthday. You deserve the absolute best year ahead. 🤍"
    ],
    signOff: "Your forever best friend ✨",
    closingNote: "Always cheering for you 🤍",

    // Embedded Photos in the letter (scrapbook style)
    embeddedPhotos: [
      {
        src: "/kk_1.jpg",
        caption: "One of many memories ✨",
        rotation: "-rotate-3"
      },
      {
        src: "/kk_6.jpg",
        caption: "Never a dull moment 🌸",
        rotation: "rotate-3"
      },
      {
        src: "/kk_5.jpg",
        caption: "More memories loading... 🚀",
        rotation: "-rotate-2"
      }
    ]
  },

  // Music configuration (Optional audio player)
  music: {
    title: "Sapphire ✨",
    artist: "Special Birthday Edition",
    src: "./sapphire.mp3"
  }
};
