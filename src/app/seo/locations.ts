export type LocationPage = {
  slug: string;
  city: string;
  region: string;
  title: string;
  description: string;
  intro: string;
  localAngle: string;
  nearby: string[];
};

export const locationPages: LocationPage[] = [
  {
    slug: "webdesign-holzminden",
    city: "Holzminden",
    region: "Landkreis Holzminden",
    title: "Webdesign Holzminden für Unternehmen | KA Technologies",
    description: "Webdesign und individuelle Software aus Holzminden: schnelle Websites, Landingpages und digitale Systeme für Unternehmen in Holzminden und dem Weserbergland.",
    intro: "Als Webdesign-Studio in Holzminden entwickeln wir Websites und digitale Systeme für Unternehmen, die regional sichtbar werden und intern effizienter arbeiten möchten.",
    localAngle: "Kurze Wege, direkte Abstimmung und ein Partner vor Ort – von der ersten Idee bis zum laufenden System.",
    nearby: ["Höxter", "Bodenwerder", "Stadtoldendorf"],
  },
  {
    slug: "webdesign-hameln",
    city: "Hameln",
    region: "Weserbergland",
    title: "Webdesign Hameln für Unternehmen | KA Technologies",
    description: "Professionelles Webdesign für Hameln: moderne Websites, Landingpages und Individualsoftware für Unternehmen im Weserbergland. Klar, schnell und conversionstark.",
    intro: "Sie suchen Webdesign in Hameln, das mehr kann als gut aussehen? Wir verbinden klare Inhalte, starke Gestaltung und digitale Abläufe zu einem Auftritt, der Anfragen gewinnt.",
    localAngle: "Von Holzminden aus arbeiten wir digital und persönlich mit Unternehmen in Hameln und dem gesamten Weserbergland.",
    nearby: ["Bad Pyrmont", "Rinteln", "Bodenwerder"],
  },
  {
    slug: "webdesign-hoexter",
    city: "Höxter",
    region: "Kreis Höxter · Weserbergland",
    title: "Webdesign Höxter für Unternehmen | KA Technologies",
    description: "Webdesign für Höxter und den Kreis Höxter: individuelle Websites, Landingpages und Softwarelösungen für mehr Sichtbarkeit, Anfragen und klare Prozesse.",
    intro: "Für Unternehmen in Höxter gestalten und entwickeln wir digitale Auftritte, die verständlich erklären, was Sie anbieten – und Interessenten zuverlässig zum nächsten Schritt führen.",
    localAngle: "Die Nähe zu Höxter und Holzminden macht persönliche Termine genauso möglich wie schnelle digitale Abstimmungen.",
    nearby: ["Holzminden", "Bodenwerder", "Stadtoldendorf"],
  },
  {
    slug: "webdesign-bad-pyrmont",
    city: "Bad Pyrmont",
    region: "Weserbergland",
    title: "Webdesign Bad Pyrmont für Unternehmen | KA Technologies",
    description: "Modernes Webdesign für Bad Pyrmont: Websites, Landingpages und individuelle Software für Dienstleister, Betriebe und Unternehmen im Weserbergland.",
    intro: "Ihr Unternehmen in Bad Pyrmont soll online professionell und eigenständig wirken? Wir entwickeln einen klaren digitalen Auftritt mit passenden Inhalten, schnellen Ladezeiten und sinnvoller Anfrageführung.",
    localAngle: "Wir verstehen regionale Märkte und verbinden lokale Auffindbarkeit mit einem Auftritt, der auch über Bad Pyrmont hinaus überzeugt.",
    nearby: ["Hameln", "Rinteln", "Holzminden"],
  },
  {
    slug: "webdesign-bodenwerder",
    city: "Bodenwerder",
    region: "Weserbergland",
    title: "Webdesign Bodenwerder für Unternehmen | KA Technologies",
    description: "Webdesign in Bodenwerder: individuelle Websites, Landingpages und digitale Tools für Unternehmen, Vereine und Dienstleister im Weserbergland.",
    intro: "Ob lokaler Betrieb, Dienstleister oder wachsendes Unternehmen: Wir bauen für Bodenwerder Websites und Systeme, die Angebote verständlich machen und Abläufe vereinfachen.",
    localAngle: "Eine gute Website muss regional gefunden werden und gleichzeitig professionell genug sein, um neue Kunden über die Region hinaus zu erreichen.",
    nearby: ["Holzminden", "Hameln", "Stadtoldendorf"],
  },
  {
    slug: "webdesign-rinteln",
    city: "Rinteln",
    region: "Weserbergland",
    title: "Webdesign Rinteln für Unternehmen | KA Technologies",
    description: "Webdesign für Rinteln und das Weserbergland: strategische Websites, Landingpages und maßgeschneiderte Software für mehr digitale Klarheit.",
    intro: "Wir entwickeln für Unternehmen in Rinteln digitale Lösungen, die Vertrauen schaffen, Leistungen auf den Punkt bringen und wiederkehrende Arbeit im Hintergrund reduzieren.",
    localAngle: "Von der regionalen Landingpage bis zum eigenen Kunden- oder Mitarbeiterportal: persönlich geplant, digital umgesetzt.",
    nearby: ["Hameln", "Bad Pyrmont", "Holzminden"],
  },
  {
    slug: "webdesign-stadtoldendorf",
    city: "Stadtoldendorf",
    region: "Landkreis Holzminden · Weserbergland",
    title: "Webdesign Stadtoldendorf für Unternehmen | KA Technologies",
    description: "Webdesign für Stadtoldendorf: moderne Websites, Landingpages und Individualsoftware für regionale Unternehmen im Landkreis Holzminden.",
    intro: "Für Unternehmen in Stadtoldendorf schaffen wir einen digitalen Auftritt, der Leistungen klar erklärt, auf dem Smartphone funktioniert und aus Besuchern konkrete Anfragen macht.",
    localAngle: "Als Studio in Holzminden sind wir im Landkreis schnell erreichbar und begleiten auch die technische Weiterentwicklung nach dem Launch.",
    nearby: ["Holzminden", "Höxter", "Bodenwerder"],
  },
];

export const locationBySlug = Object.fromEntries(locationPages.map((location) => [location.slug, location])) as Record<string, LocationPage>;
