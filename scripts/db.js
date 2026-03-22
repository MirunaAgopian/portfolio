/**
 * @typedef {Object} Project
 * @property {string} projectImage - Path to the project's main image.
 * @property {string} projectAlt - Accessible alt text for the project image.
 * @property {string} projectTitle - Display title of the project.
 * @property {string} projectIcon - Path to the small icon used in the UI.
 * @property {string} projectOverlayDescription - Long description shown in the overlay.
 * @property {string[]} projectTechnologies - List of technologies used.
 * @property {string} projectBlackBoxDescription - Short description shown in the black box.
 * @property {string} projectGitHubLink - URL to the GitHub repository.
 * @property {string} projectLink - URL to the live project (optional).
 * @type {{ en: TranslationMap, de: TranslationMap }}
 */
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
      projectLink: "https://miruna-agopian.de/JOIN-2/html/login.html",
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
      projectLink: "https://miruna-agopian.de/el_pollo_loco/",
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
      projectLink: "https://miruna-agopian.de/JOIN-2/html/login.html",
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
      projectLink: "https://miruna-agopian.de/el_pollo_loco/",
    },
  ],
};

/**
 * @typedef {Object.<string, string>} TranslationMap
 * A dictionary of UI text strings used for DOM translation.
 * Keys correspond to data-i18n identifiers in the HTML,
 * and values contain the translated text for the selected language.
 * @type {{ en: TranslationMap, de: TranslationMap }}
 */

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
    feedbackLink: "To Linkedin profile >>",

    contactHeader: "Let's build something cool together!",
    contactSubheader: "Got a problem to solve?",
    contactDescription:
      "Then I am here to solve it. Just hit me and let work together. I like new challenges and love working in team.",

    contactFormName: "What's your name?",
    contactFormNamePlaceholder: "Your name goes here",
    contactFormNameError: "Please enter your name.",
    contactFormNameErrorBox: "Is your name that short?",

    contactFormMail: "What's your email?",
    contactFormMailPlaceholder: "youremail@email.com",
    contactFormMailError: "Is your email correct?",

    contactFormTextarea: "How can I help you?",
    contactFormTextareaPlaceholder: "Hello Miruna, I am interested in...",
    contactFormTextareaError: "Please enter your message.",
    contactFormTextareaErrorBox: "Is your message that short?",

    contactPrivacyPolicyTextBefore: "I've read the",
    contactPrivacyPolicyLinkText: "privacy policy",
    contactPrivacyPolicyTextAfter: "and agree to the processing of my data.",
    contactPrivacyPolicyError: "Please agree to the privacy policy.",
    contactPrivacyPolicySuccess: "Message sent successfully!",

    contactBtn: "Drop a line",

    footerLink: "Legal notice",

    legalNoticeHeader: "Legal notice",
    legalNoticeSubheaderFirst:
      "Information according to § 5 DDG (Digital Services Act Germany):",
    legalNoticeSubheaderSecond:
      "Responsible for content according to § 18(2) MStV:",
    legalNoticeSubheaderThird: "Contact:",
    legalNoticeSubheaderFourth: "Liability for Content",
    legalNoticeSubheaderFifth: "Liability for External Links",
    legalNoticeParagaphOne:
      "As a service provider, I am responsible for my own content on these pages in accordance with § 7(1) DDG. However, I am not obligated to monitor transmitted or stored external information (§§ 8–10 DDG). If I become aware of any legal violations, such content will be removed immediately.",
    legalNoticeParagaphTwo:
      "This website may contain links to external third‑party websites. I have no influence on their content and therefore cannot assume any liability for them. If I become aware of legal violations, such links will be removed immediately.",

    privPolicyHeader: "Privacy policy",
    privPolicySubheaderFirst: "1. Controller",
    privPolicySubheaderSecond: "2. Access Data / Server Log Files",
    privPolicySubheaderThird: "3. Contact Form",
    privPolicySubheaderFourth: "4. Disclosure of Data",
    privPolicySubheaderFifth: "5. SSL Encryption",
    privPolicySubheaderSixth: "6. Cookies and Tracking",
    privPolicySubheaderSeventh: "7. Rights of Data Subjects",
    privPolicySubheaderEigth: "8. Withdrawal of Consent",
    privPolicySubheaderNinth: "9. Changes to This Privacy Policy",
    dataDisclosure:
      "The data from this page belongs to Miruna-Alexandra Agopian",
    dataOwner: "Miruna-Alexandra Agopian",

    privPolicyParagraphOne:
      "When you visit this website, technical data is automatically collected by the hosting provider. This includes:",
    privPolicyLiOne: "IP address",
    privPolicyLiTwo: "Date and time of access",
    privPolicyLiThree: "Visited page",
    privPolicyLiFour: "Browser type and version",
    privPolicyLiFive: "Operating system",
    privPolicyParagraphTwo:
      "These data are processed to ensure the technical operation and security of the website. The legal basis is Art. 6(1)(f) GDPR (legitimate interest).",

    privPolicyParagraphThree:
      "If you contact me via the contact form, the following data will be processed:",
    privPolicyLiSix: "Name",
    privPolicyLiSeven: "Email address",
    privPolicyLiEight: "Message content",
    privPolicyLiNine: "IP address",
    privPolicyParagraphFour: "Purpose of processing:",
    privPolicyParagraphFive: "To respond to your inquiry.",
    privPolicyParagraphSix: "Storage period:",
    privPolicyParagraphSeven:
      "Your data will be deleted once your request has been fully processed, unless legal retention obligations apply.",
    privPolicyParagraphEight:
      "Your data will not be shared with third parties. Exception: The hosting provider processes data as part of a data processing agreement.",
    privPolicyParagraphNine:
      "This website uses SSL encryption. This ensures that data you transmit cannot be read by third parties.",
    privPolicyParagraphTen:
      "This website uses no cookies, no analytics tools, and no tracking technologies.",
    privPolicyParagraphEleven: "Under the GDPR, you have the following rights:",

    privPolicyLiTen: "Right of access",
    privPolicyLiEleven: "Right to rectification",
    privPolicyLiTwelve: "Right to erasure",
    privPolicyLiThirteen: "Right to restriction of processing",
    privPolicyLiFourteen: "Right to withdraw consent",
    privPolicyLiFifteen: "Right to data portability",
    privPolicyLiSixteen:
      "Right to lodge a complaint with a supervisory authority",
    privPolicyParagraphTwelve:
      "You may withdraw your consent at any time by sending an email. The withdrawal does not affect the lawfulness of processing carried out before the withdrawal.",
    privPolicyParagraphThirteen:
      "I may update this privacy policy to reflect legal requirements or changes to the website.",
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
    feedbackLink: "Zum LinkedIn‑Profil >>",

    contactHeader: "Lass uns etwas Großartiges schaffen!",
    contactSubheader: "Ein Problem zu lösen?",
    contactDescription:
      "Dann bin ich die Richtige dafür. Schreib mir einfach – ich freue mich auf die Zusammenarbeit. Ich mag neue Herausforderungen und arbeite gerne im Team.",

    contactFormName: "Wie heißt du?",
    contactFormNamePlaceholder: "Hier kommt dein Name",
    contactFormNameError: "Ups! Dein Name fehlt.",
    contactFormNameErrorBox: "Is dein Name so kurz?",

    contactFormMail: "Deine E‑Mail?",
    contactFormMailPlaceholder: "deine@email.de",
    contactFormMailError: "Ist deine E‑Mail korrekt?",

    contactFormTextarea: "Wie kann ich dir helfen?",
    contactFormTextareaPlaceholder:
      "Hallo Miruna, ich interessiere mich für...",
    contactFormTextareaError: "Bitte gib deine Nachricht ein.",
    contactFormTextareaErrorBox: "Ist deine Nanchicht so kurz?",

    contactPrivacyPolicyTextBefore: "Ich habe die",
    contactPrivacyPolicyLinkText: "Datenschutzerklärung",
    contactPrivacyPolicyTextAfter:
      "gelesen und stimme der Verarbeitung meiner Daten zu.",
    contactPrivacyPolicyError: "Bitte stimme der Datenschutzerklärung zu.",
    contactPrivacyPolicySuccess: "Nachricht erfolgreich zugestellt!",

    contactBtn: "Nachricht senden",

    footerLink: "Impressum",

    legalNoticeHeader: "Impressum",
    legalNoticeSubheaderFirst:
      "Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz):",
    legalNoticeSubheaderSecond:
      "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:",
    legalNoticeSubheaderThird: "Kontakt:",
    legalNoticeSubheaderFourth: "Haftung für den Inhalt",
    legalNoticeSubheaderFifth: "Haftung für externe Links",
    legalNoticeParagaphOne:
      "Als Diensteanbieter bin ich gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Eine Verpflichtung zur Überwachung übermittelter oder gespeicherter fremder Informationen besteht jedoch nicht (§§ 8–10 DDG). Bei Bekanntwerden von Rechtsverletzungen werden entsprechende Inhalte umgehend entfernt.",
    legalNoticeParagaphTwo:
      "Diese Webseite kann Links zu externen Webseiten Dritter enthalten. Auf deren Inhalte habe ich keinen Einfluss und kann daher keine Gewähr übernehmen. Bei Bekanntwerden von Rechtsverletzungen werden solche Links umgehend entfernt.",

    privPolicyHeader: "Datenschutzerklärung",
    privPolicySubheaderFirst: "1. Verantwortliche Stelle",
    privPolicySubheaderSecond: "2. Zugriffsdaten / Server-Logfiles",
    privPolicySubheaderThird: "3. Kontaktformular",
    privPolicySubheaderFourth: "4. Weitergabe von Daten",
    privPolicySubheaderFifth: "5. SSL-Verschlüsselung",
    privPolicySubheaderSixth: "6. Cookies und Tracking",
    privPolicySubheaderSeventh: "7. Rechte der betroffenen Personen",
    privPolicySubheaderEighth: "8. Widerruf der Einwilligung",
    privPolicySubheaderNineth: "9. Änderungen dieser Datenschutzerklärung",
    dataDisclosure: "Die Daten dieser Seite gehören Miruna-Alexandra Agopian.",
    dataOwner: "Miruna-Alexandra Agopian.",

    privPolicyParagraphOne:
      "Beim Besuch dieser Webseite werden automatisch technische Daten vom Hosting-Anbieter erfasst. Dazu gehören:",
    privPolicyLiOne: "IP-Adresse",
    privPolicyLiTwo: "Datum und Uhrzeit des Zugriffs",
    privPolicyLiThree: "Aufgerufene Seite",
    privPolicyLiFour: "Browsertyp und -version",
    privPolicyLiFive: "Betriebssystem",
    privPolicyParagraphTwo:
      "Diese Daten werden verarbeitet, um den technischen Betrieb und die Sicherheit der Webseite zu gewährleisten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).",

    privPolicyParagraphThree:
      "Wenn Sie mich über das Kontaktformular kontaktieren, werden folgende Daten verarbeitet:",
    privPolicyLiSix: "Name",
    privPolicyLiSeven: "E-Mail-Adresse",
    privPolicyLiEight: "Nachrichteninhalt",
    privPolicyLiNine: "IP-Adresse",
    privPolicyParagraphFour: "Zweck der Verarbeitung:",
    privPolicyParagraphFive: "Beantwortung Ihrer Anfrage.",
    privPolicyParagraphSix: "Speicherdauer:",
    privPolicyParagraphSeven:
      "Ihre Daten werden gelöscht, sobald Ihre Anfrage vollständig bearbeitet wurde, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.",
    privPolicyParagraphEight:
      "Ihre Daten werden nicht an Dritte weitergegeben. Ausnahme: Der Hosting-Anbieter verarbeitet Daten im Rahmen eines Auftragsverarbeitungsvertrags.",
    privPolicyParagraphNine:
      "Diese Webseite nutzt eine SSL-Verschlüsselung. Dadurch können übermittelte Daten nicht von Dritten mitgelesen werden.",
    privPolicyParagraphTen:
      "Diese Webseite verwendet keine Cookies, keine Analyse-Tools und keine Tracking-Technologien.",
    privPolicyParagraphEleven: "Nach der DSGVO hast du folgende Rechte:",

    privPolicyLiTen: "Recht auf Auskunft",
    privPolicyLiEleven: "Recht auf Berichtigung",
    privPolicyLiTwelve: "Recht auf Löschung",
    privPolicyLiThirteen: "Recht auf Einschränkung der Verarbeitung",
    privPolicyLiFourteen: "Recht auf Widerruf der Einwilligung",
    privPolicyLiFifteen: "Recht auf Datenübertragbarkeit",
    privPolicyLiSixteen: "Recht auf Beschwerde bei einer Aufsichtsbehörde",
    privPolicyParagraphTwelve:
      "Sie können Ihre Einwilligung jederzeit per E-Mail widerrufen. Der Widerruf berührt nicht die Rechtmäßigkeit der Verarbeitung bis zum Zeitpunkt des Widerrufs.",
    privPolicyParagraphThirteen:
      "Ich kann diese Datenschutzerklärung anpassen, um gesetzlichen Anforderungen oder Änderungen der Webseite gerecht zu werden.",
  },
};
