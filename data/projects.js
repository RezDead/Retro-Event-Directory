const projects = [
  {
    id: "event-directory",
    title: "Event Directory",
    location: "Chico, CA",
    people: ["Julian Kroeger-Miller"],
    image: "./images/Directory/Directory.jpg",

    year: "2026",
    category: "Interactive Directory",

    summary: "A website serving as the event directory and project hub.",

    description: [
      "This website actually is a project! I didn't necessarily know what project I would want to create so I decided to become an amplifier for all of the other projects people would create.",
      "In total I created 5 fully interactive elements and 2 page templates that allow you to view people project and have a little bit of fun.",
      "I deeply hope you enjoy this event! We all worked really hard on these projects."
    ],

    details: [
      {
        label: "Tools",
        value: "HTML, CSS, JavaScript, ChatGPT"
      },
    ],

    gallery: [
      "./images/Directory/Project.jpg",
      "./images/Directory/Stickers.jpg",
      "./images/Directory/BSOD.jpg"
    ]
  },
  {
    id: "wayback",
    title: "Wayback Station",
    location: "Chico, CA",
    people: ["Alexander Liu"],
    image: "./images/Wayback/terminal.png",

    year: "2026",
    category: "Internet Archive",

    summary: "A terminal created to easily browse the archived internet.",

    description: [
      "The Temporal Archive Terminal is an interactive exhibit for Tech Toss Chico's grand opening that lets visitors browse the internet as it looked decades ago. Running on a refurbished Intel NUC in a retro CRT-style kiosk, it pulls live archived snapshots from the Internet Archive's Wayback Machine — so anyone can tap a preset like 1998 Google or the original Space Jam site, type in any website and year, and step a page forward and backward through its versions to watch it evolve. Beyond the nostalgia, it embodies Tech Toss's mission: salvaged hardware given a second life as a hands-on lesson in how technology — and the devices we throw away — have changed over time."
    ],

    details: [
      {
        label: "Tools",
        value: "Internet Archive"
      },
    ],

    gallery: [
      "./images/Wayback/google.png",
      "./images/Wayback/pepsi.png",
    ]
  },
  {
    id: "tv",
    title: "TechToss_TV",
    location: "Chico, CA",
    people: ["Arslan Magdanov"],
    image: "./images/tv/tv.jpg",

    year: "2026",
    category: "International TV",

    summary: "International TV Viewer that randomly finds live channels",

    description: [
      "Showcase of a technology called IPTV, used to be popular amongst enthusiasts. Millions of stations across the world stream their content online, the TechToss_TV randomizer will take you on a trip around the world of public access television. Press the big red button to find a random channel."
    ],

    details: [
      {
        label: "Tools",
        value: "Claude, IPTV"
      },
      {
        label: "Materials",
        value: "TV, Big Red Button, Mini PC"
      },
    ],

    gallery: [
      "./images/tv/iran.webp",
      "./images/tv/drama.webp"
    ]
  },
  {
    id: "text-adventure",
    title: "Choose Your Adventure",
    location: "Chico, CA",
    people: ["Ken Ford, Wade Lawler"],
    image: "./images/adventure/Text.jpg",

    year: "2026",
    category: "Text Adventure",

    summary: "AI powered text based adventure that allows for the creation of unique worlds",

    description: [
      "Before graphics, before controllers, before cutscenes — there was the prompt. Text adventure games, pioneered in the late 1970s with titles like Colossal Cave Adventure and Zork, were among the first interactive experiences in computing history. Players typed commands — \"go north,\" \"open door,\" \"take sword\" — and the computer responded in kind, building entire worlds through words alone.",
      "This exhibit presents a modern reimagining of that format. Using KoboldCPP, a locally-run language generation platform, volunteer Ken Ford has built an original text adventure with dynamically generated story worlds, branching narratives, and unique outcomes every time you play. No two playthroughs are quite the same.",
      "Displayed on a Commodore 1702 — Commodore's iconic color monitor from 1982 — the exhibit deliberately echoes the era that gave birth to the genre, while showcasing just how far software has come. Come type your first command and see where the story takes you."
    ],

    details: [
      {
        label: "Tools",
        value: "KoboldCPP, Commodore 1702"
      },
    ],

    gallery: [
      "./images/adventure/setup.jpg",
      "./images/adventure/text.png",
    ]
  },
  {
    id: "cardboard",
    title: "CardboardDeck 6100",
    location: "Chico, CA",
    people: ["Jorge Lopez-Sotelo"],
    image: "./images/cardboard/card.jpg",

    year: "2026",
    category: "Portable Console",

    summary: "A portable homemade console demonstrating use of old hardware.",

    description: [
      "A converted Intel NUC mini PC for compact gaming. It includes a two-in-one controller and keyboard for playing games in gaming mode or for desktop mode.  You can play modern games like the ones on the Nintendo Switch or retro games like the PlayStation 2, Nintendo Gamecube, or Sega Dreamcast, and older using Batocera Linux.",
      "This exhibit is meant to demonstrate how anyone can convert older hardware into mini gaming machines. This mini pc was most likely used for office work, but now it's been repurposed as a gaming machine stored in a cardboard housing. Sometimes you don't need the fanciest equipment to run older software; you just need it to turn on."
    ],

    details: [
      {
        label: "Tools",
        value: "Batocera Linux"
      },
      {
        label: "Materials",
        value: "NUC Mini PC, Controller, Keyboard"
      },
    ],

    gallery: [
      "./images/cardboard/build.jpg"
    ]
  },
  {
    id: "wall",
    title: "Divided We Stand",
    location: "Chico, CA",
    people: ["Jeff Jaxon"],
    image: "./images/wall/wall.jpg",

    year: "2026",
    category: "Video Wall",

    summary: "A monitor wall created from upcycled materials",

    description: [
      "Upcycled art installation featuring discarded computer displays, and other salvaged and reclaimed materials. The installation uses Macintosh computers and video wall controller boxes to display multiple images across the flat panel displays arranged in a 45° lenticular configuration so that a different set of images and video are stitched together into a continuous image depending on the viewing angle. Used here to highlight TechToss and retro computing, the piece also explores the idea that we can look at the same screens but see different pictures depending on our points of view."
    ],

    details: [
      {
        label: "Materials",
        value: ""
      },
    ],

    gallery: [
      "./images/wall/tt.jpg",
      "./images/wall/unlit.jpg",
    ]
  },
  {
    id: "timmodore",
    title: "Timmodore 64",
    location: "Chico, CA",
    people: ["Timmie Xiong", "Alejandro Gonzales"],
    image: "./images/timmo/Timmodore.jpg",

    year: "2026",
    category: "Custom console",

    summary: "A custom console created from e-waste",

    description: [
      "A portable home console that runs on a mini Optiplex. It offers games from several different retro consoles and tries to recreate that retro feel with a modern twist. It runs on Linux Mint paired with Cage to remove the desktop environment in order to really sell the console feel.",
      "We welcome everyone to try out our console and experience what games were like in the past or reminisce in nostalgia. There are thousands of games to choose from or you can pick out of a short curated list of games that were popular during their time."
    ],

    details: [
      {
        label: "Tools",
        value: "Linux Mint, Cage"
      },
      {
        label: "Materials",
        value: "Mini Optiplex,"
      },
    ],

    gallery: [
      "./images/timmo/build.png"
    ]
  },
  {
    id: "apple-lle",
    title: "Apple IIe",
    location: "Chico, CA",
    people: ["Wade Lawler"],
    image: "./images/Apple.jpg",

    year: "2026",
    category: "Retro Computing",

    summary: "A display setup to showcase what computing used to be",

    description: [
      "Introduced by Apple Computer in January 1983, the Apple IIe (\"e\" for enhanced) represents a landmark in the history of personal computing. Equipped with a 1 MHz 6502 processor and 64 KB of RAM, it was designed for home, education, and small business use and became the longest-selling computer in Apple's history, remaining in production for over a decade.",
      "This exhibit invites visitors to experience computing as it existed in the early 1980s, when loading a program was itself an event. Witness software being loaded directly from the machine's 5.25-inch floppy disk drive, the primary storage medium of the era. Several classic games will be on display and available to play — including The Oregon Trail, one of the most iconic titles of the era, first introduced to classrooms in the 1970s and forever tied to the Apple II.",
      "As a bonus, this unit has been configured to reach the modern internet — demonstrating that even 40-year-old hardware can connect to today's world through text-based websites and IRC chat, the predecessors of the forums and messaging platforms we use today.",
      "Come try it yourself. Load a game from disk, and see what computing felt like before the mouse, before the desktop, and before the cloud."
    ],

    details: [
      {
        label: "Materials",
        value: "Apple IIe, Floppy Disk, Games"
      }
    ],

    gallery: [

    ]
  },
  {
    id: "eliza",
    title: "ELIZA",
    location: "Chico, CA",
    people: [],
    image: "./images/ELIZA/Eliza.webp",

    year: "2026",
    category: "Retro AI",

    summary: "Chat with one of the earliest AI programs from the 1960s and see how simple rules created the illusion of conversation.",

    description: [
      "Step back into the 1960s and meet one of the earliest examples of artificial intelligence: ELIZA, a pioneering chatbot created by Joseph Weizenbaum at MIT. At this station, visitors can interact with a recreation of ELIZA's famous “DOCTOR” script, which mimics a Rogerian psychotherapist by turning users' statements into reflective questions.",
      "This station shows how simple pattern matching and scripted responses could create the illusion of conversation long before today’s AI assistants. Guests will see how ELIZA worked, try chatting with it, and compare its rule-based style with modern generative AI. It is a fun, hands-on look at the beginnings of human-computer conversation."
    ],

    details: [

    ],

    gallery: [
      "./images/ELIZA/Conversation.png"
    ]
  },
  {
    id: "laser-disc",
    title: "LaserDisc",
    location: "Chico, CA",
    people: [],
    image: "./images/laser/main.jpg",


    year: "2026",
    category: "DVD Predecessor",

    summary: "See the giant disc format that came before DVDs and helped change home video.",

    description: [
      "Explore the LaserDisc, a groundbreaking home video format introduced before DVDs and streaming. At this station, visitors can see how these large, shiny discs stored movies and interactive media using optical technology. Guests can compare LaserDiscs to VHS tapes and DVDs, learn why they were popular with movie collectors, and discover how they helped shape the future of home entertainment."
    ],

    details: [

    ],

    gallery: [
      "./images/laser/laser.avif",
      "./images/laser/LaserDisc.jpg"
    ]
  },
  {
    id: "furniture",
    title: "Sylvania Furniture TV",
    location: "Chico, CA",
    people: [],
    image: "./images/furniture.jpg",


    year: "2026",
    category: "Furniture TV",

    summary: "Watch an old internet training VHS on a vintage Sylvania console TV from the days when TVs were furniture.",

    description: [
      "Step back into the era when televisions were built like pieces of living room furniture. This station features a vintage Sylvania console TV playing an old internet training VHS, showing how families and workplaces were introduced to the online world before smartphones and modern broadband. Visitors can experience the blend of classic home entertainment technology with early digital-age education."
    ],

    details: [

    ],

    gallery: [

    ]
  },
  {
    id: "exodos",
    title: "eXoDOS",
    location: "Chico, CA",
    people: [],
    image: "./images/eXoDOS.jpg",


    year: "2026",
    category: "Game Archive",

    summary: "Play classic DOS games and see how eXoDOS helps preserve early PC gaming history.",

    description: [
      "Explore the world of classic DOS gaming through eXoDOS, a massive preservation project dedicated to collecting, organizing, and making old PC games playable on modern computers. This station lets visitors experience what computer gaming looked and felt like before modern graphics, online stores, and plug-and-play installs.",
      "Guests can try games from the DOS era, learn about command-line computing, and see how sound cards, pixel art, keyboard controls, and early 3D graphics shaped PC gaming history. The station also highlights the importance of software preservation, showing how emulation and digital archives help keep older games from disappearing as original hardware and disks become harder to use."
    ],

    details: [

    ],

    gallery: [
      
    ]
  },
];