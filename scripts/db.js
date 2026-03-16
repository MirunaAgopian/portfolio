let projectsInfo = {
  en: [
    {
      projectImage: "assets/img/join.png",
      projectAlt: "Image of the kanbanboard project, JOIN",
      projectTitle: "Join",
      projectIcon: "assets/img/join_project_icon.png",
      projectOverlayDescription:
        "JOIN gave me practical experience with advanced CSS and DOM manipulation, and interactive UI behavior. The project features data handling with Firebase, including dynamic rendering, structured storage, real‑time updates, and form validation. The project pushed my skills and showed me how to build solid, data‑driven frontend features with confidence.",
      projectTechnologies: ["HTML |", "CSS |", "JS |", "Firebase"],
      projectBlackBoxDescription:
        "A collaborative Kanban board application built as a team project. It allows users to create tasks, assign them to contacts, prioritize them, and move them across categories using drag‑and‑drop.",
      projectGitHubLink: "https://github.com/MirunaAgopian/JOIN-2",
      projectLink: "",
    },
    {
      projectImage: "assets/img/epl2.png",
      projectAlt: "Image of the 2d jump and run game, El pollo loco",
      projectTitle: "El pollo loco",
      projectIcon: "assets/img/epl_project_icon.png",
      projectOverlayDescription:
        "El Pollo Loco was my first real dive into 2D game development. I learned how to detect collisions horizontally and vertically, control animation timing with well‑structured intervals, clear them correctly, and manage sound effects without performance issues. It challenged me, but it also showed me how powerful OOP can be when building interactive applications.",
      projectTechnologies: ["HTML |", "CSS |", "JS - OOP"],
      projectBlackBoxDescription:
        "A 2D jump‑and‑run game built with JavaScript and object‑oriented programming, inspired by classic platformers. Guide the character through the world, collect coins and bottles, and face the final enemy.",
      projectGitHubLink: "https://github.com/MirunaAgopian/El-pollo-locco",
      projectLink: "",
    },
  ],

  de: [
    {
      projectImage: "assets/img/join.png",
      projectAlt: "Bild des Kanban‑Board‑Projekts JOIN",
      projectTitle: "Join",
      projectIcon: "assets/img/join_project_icon.png",
      projectOverlayDescription:
        "JOIN hat mir praktische Erfahrung mit fortgeschrittenem CSS, DOM‑Manipulation und interaktiven UI‑Verhalten gegeben. Das Projekt verfügt über eine Firebase‑basierte Datenverarbeitung mit dynamischem Rendering, strukturierter Speicherung, Echtzeit‑Updates und Formularvalidierung. Das Projekt hat meine Fähigkeiten erweitert und mir gezeigt, wie man solide, datengetriebene Frontend‑Features mit Sicherheit entwickelt.",
      projectTechnologies: ["HTML |", "CSS |", "JS |", "Firebase"],
      projectBlackBoxDescription:
        "Eine kollaborative Kanban‑Board‑Anwendung, die als Teamprojekt entstanden ist. Nutzer können Aufgaben erstellen, Kontakten zuweisen, priorisieren und per Drag‑and‑Drop zwischen Kategorien verschieben.",
      projectGitHubLink: "https://github.com/MirunaAgopian/JOIN-2",
      projectLink: "",
    },
    {
      projectImage: "assets/img/epl2.png",
      projectAlt: "Bild des 2D‑Jump‑and‑Run‑Spiels El Pollo Loco",
      projectTitle: "El pollo loco",
      projectIcon: "assets/img/epl_project_icon.png",
      projectOverlayDescription:
        "El Pollo Loco war mein erster richtiger Einstieg in die 2D‑Spieleentwicklung. Ich habe gelernt, Kollisionen horizontal und vertikal zu erkennen, Animationen mit klar strukturierten Intervallen zu steuern, sie korrekt zu beenden und Soundeffekte ohne Performance‑Probleme zu verwalten. Es war herausfordernd, aber es hat mir gezeigt, wie mächtig OOP beim Entwickeln interaktiver Anwendungen sein kann.",
      projectTechnologies: ["HTML |", "CSS |", "JS - OOP"],
      projectBlackBoxDescription:
        "Ein 2D‑Jump‑and‑Run‑Spiel mit JavaScript und objektorientierter Programmierung, inspiriert von klassischen Plattformern. Führe die Figur durch die Welt, sammle Münzen und Flaschen und stelle dich dem Endgegner.",
      projectGitHubLink: "https://github.com/MirunaAgopian/El-pollo-locco",
      projectLink: "",
    },
  ],
};

const domInfo = {
  en: {
    navTitle: "Menu",
    navHero: "About me",
    navSkills: "Skillset",
    navProjects: "Portfolio",
    navFeedback: "References",
    navContact: "Contact me",

    heroUpperSpan: "Hello there! I'm",
    heroLowerSpan: "Frontend Developer",
    heroBtn: "Get in Touch",

    abMeHeader: "About me",
    abMeDescription:
      "Hi there, I'm Miruna. My career in IT started from a desire to create something of my own — my own apps and websites. I strive to design intuitive user experiences and write code that is clear, maintainable, and scalable. With each project, I’ve learned that the most elegant solutions come from a strong understanding of core fundamentals and the ability to apply recurring concepts effectively.",
    abMeDescriptionLower: "Let's connect and work togehter!",

    abMeBtn: "Let's talk",
    abMeOverlaySpan: "More about me",
    abMeLiFirst: "Team player",
    abMeLiSecond: "Highly motivated",
    abMeLiThird: "Analytical thinker",
    abMeLiFourth: "Structured working style",
    abMeLiFifth: "Based in Mannheim",
    abMeLiSixth: "German, English & Romanian speaker",

    competencieadHeader: "Core Competencies",
    competenciesDescription:
      "I develop clean, maintainable frontend applications using HTML, CSS, JavaScript, Angular, and TypeScript. I work confidently with asynchronous programming and OOP principles, and I enjoy building interfaces that are both intuitive and visually consistent. I value clarity, simplicity, and structure — in code, UI, and documentation. I'm also experienced with Scrum, Firebase, and collaborative team workflows.",
    competenciesOverlayUpper: "Don't you find the skill you need?",
    competenciesOverlayLower:
      "I'm currently expanding my knowledge. I have a special interest in learning:",

    myWorkHeader: "My work",
    myWorkSubheader:
      "Have a look at my projects - Test them to better understand my skills in action.",
    myWorkBtnPrev: "<< Previous project",
    myWorkBtnNext: "Next project >>",

    feedbackHeader: "What my colleagues say about me",
    feedbackBoxDescriptionFirst:
      "Working with Miruna was truly enriching. She combines strong analytical skills with an organized way of working. Her understanding of software architectures and her ability to tackle technical challenges with determination are particularly noteworthy. She is always helpful and communicates as an equal — a top recommendation for any team.",
    feedbackBoxDescriptionSecond:
      "Miruna is an extremely reliable and highly competent frontend developer, and working with her on the Join project was always productive and pleasant. She works in a structured way, communicates clearly, and contributes creative solutions. Her teamwork skills and her eye for clean, maintainable code are particularly noteworthy.",
    feedbackBoxDescriptionThird:
      "I would like to give some brief positive feedback about Miruna. What stands out most is her very structured and clear way of working. She approaches tasks thoughtfully and implements them cleanly, which makes collaboration within the team very pleasant and efficient. Thank you for that!",
    feedbackSpan: "Frontend developer",
    feedbackLink: "To Linkedin profile",

    contactHeader: "Let's build something cool together!",
    contactSubheader: "Got a problem to solve?",
    contactDescription:
      "Then I am here to solve it. Just hit me and let work together. I like new challenges and love working in team.",

    contactFormName: "What's your name?",
    contactFormNamePlaceholder: "Your name goes here",
    contactFormNameError: "Please enter your name.",

    contactFormMail: "What's your email?",
    contactFormMailPlaceholder: "youremail@email.com",
    contactFormMailError: "Is you email correct?",

    contactFormTextarea: "How can I help you?",
    contactFormTextareaPlaceholder: "Hello Miruna, I am interested in...",
    contactFormTextareaError: "Please enter your message.",

    contactPrivacyPolicyTextBefore: "I've read the",
    contactPrivacyPolicyLinkText: "privacy policy",
    contactPrivacyPolicyTextAfter: "and agree to the processing of my data.",
    contactPrivacyPolicyError: "Please agree to the privacy policy.",

    contactBtn: "Drop a line",

    footerLink: "Legal notice",
  },

  de: {
    navTitle: "Menü",
    navHero: "Über mich",
    navSkills: "Skillset",
    navProjects: "Portfolio",
    navFeedback: "Referenzen",
    navContact: "Kontakt",

    heroUpperSpan: "Hallo! Ich bin",
    heroLowerSpan: "Frontend Entwicklerin",
    heroBtn: "Kontakt",

    abMeHeader: "Über mich",
    abMeDescription:
      "Hallo, ich bin Miruna. Mein Weg in die IT begann mit dem Wunsch, etwas Eigenes zu schaffen – eigene Apps und Websites. Ich lege großen Wert auf intuitive Nutzererlebnisse und schreibe Code, der klar, wartbar und skalierbar ist. Mit jedem Projekt habe ich gelernt, dass elegante Lösungen aus einem tiefen Verständnis der Grundlagen und der Fähigkeit entstehen, wiederkehrende Konzepte gezielt einzusetzen.",
    abMeDescriptionLower: "Lass uns vernetzen und gemeinsam arbeiten!",

    abMeBtn: "Lass uns reden",
    abMeOverlaySpan: "Mehr über mich",
    abMeLiFirst: "Teamplayer",
    abMeLiSecond: "Hoch motiviert",
    abMeLiThird: "Analytische Denkerin",
    abMeLiFourth: "Strukturierte Arbeitsweise",
    abMeLiFifth: "Ansässig in Mannheim",
    abMeLiSixth: "Spricht Deutsch, Englisch & Rumänisch",

    competencieadHeader: "Kernkompetenzen",
    competenciesDescription:
      "Ich entwickle saubere, wartbare Frontend‑Anwendungen mit HTML, CSS, JavaScript, Angular und TypeScript. Ich arbeite sicher mit asynchroner Programmierung und OOP‑Prinzipien und baue Oberflächen, die intuitiv und visuell konsistent sind. Klarheit, Einfachheit und Struktur sind mir wichtig – im Code, im UI und in der Dokumentation. Außerdem habe ich Erfahrung mit Scrum, Firebase und kollaborativen Team‑Workflows.",
    competenciesOverlayUpper: "Fehlt dir eine bestimmte Fähigkeit?",
    competenciesOverlayLower:
      "Ich erweitere aktuell mein Wissen. Besonders interessieren mich folgende Themen:",

    myWorkHeader: "Meine Projekte",
    myWorkSubheader:
      "Schau dir meine Projekte an – teste sie, um meine Fähigkeiten in Aktion zu sehen.",
    myWorkBtnPrev: "<< Vorheriges Projekt",
    myWorkBtnNext: "Nächstes Projekt >>",

    feedbackHeader: "Was meine Kolleg:innen über mich sagen",
    feedbackBoxDescriptionFirst:
      "Die Zusammenarbeit mit Miruna war eine echte Bereicherung. Sie kombiniert starke analytische Fähigkeiten mit einer organisierten Arbeitsweise. Besonders hervorzuheben ist ihr Verständnis für Software-Architekturen und ihre Fähigkeit, technische Herausforderungen zielstrebig zu lösen. Dabei ist sie stets hilfsbereit und kommuniziert auf Augenhöhe - eine Top-Empfehlung für jedes Team.",
    feedbackBoxDescriptionSecond:
      "Miruna ist eine äußerst zuverlässige und kompetente Frontend‑Entwicklerin, mit der die Zusammenarbeit im Join-Projekt jederzeit produktiv und angenehm war. Sie arbeitet strukturiert, kommuniziert klar und bringt kreative Lösungen ein. Besonders hervorzuheben sind ihre Teamfähigkeit und ihr Blick für sauberen, wartbaren Code.",
    feedbackBoxDescriptionThird:
      "Ich möchte gerne ein kurzes positives Feedback zu Miruna geben. Besonders hervorzuheben ist ihre sehr strukturierte und klare Arbeitsweise. Sie geht Aufgaben durchdacht an und setzt sie sauber um, was die Zusammenarbeit im Team sehr angenehm und effizient macht. Vielen Dank dafür!",
    feedbackSpan: "Frontend Entwicklerin",
    feedbackLink: "Zum LinkedIn‑Profil",

    contactHeader: "Lass uns etwas Großartiges schaffen!",
    contactSubheader: "Ein Problem zu lösen?",
    contactDescription:
      "Dann bin ich die Richtige dafür. Schreib mir einfach – ich freue mich auf die Zusammenarbeit. Ich mag neue Herausforderungen und arbeite gerne im Team.",

    contactFormName: "Wie heißt du?",
    contactFormNamePlaceholder: "Hier kommt dein Name",
    contactFormNameError: "Ups! Dein Name fehlt.",

    contactFormMail: "Deine E‑Mail?",
    contactFormMailPlaceholder: "deine@email.de",
    contactFormMailError: "Ist deine E‑Mail korrekt?",

    contactFormTextarea: "Wie kann ich dir helfen?",
    contactFormTextareaPlaceholder:
      "Hallo Miruna, ich interessiere mich für...",
    contactFormTextareaError: "Bitte gib deine Nachricht ein.",

    contactPrivacyPolicyTextBefore: "Ich habe die",
    contactPrivacyPolicyLinkText: "Datenschutzerklärung",
    contactPrivacyPolicyTextAfter:
      "gelesen und stimme der Verarbeitung meiner Daten zu.",
    contactPrivacyPolicyError: "Bitte stimme der Datenschutzerklärung zu.",

    contactBtn: "Nachricht senden",

    footerLink: "Impressum",
  },
};
