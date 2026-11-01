export type Lang = "en" | "es" | "fr";

export const LANG_STORAGE_KEY = "lb-lang";

export function langFromPath(pathname: string): Lang {
  if (pathname === "/fr" || pathname.startsWith("/fr/")) return "fr";
  return pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en";
}

export function englishPath(pathname: string): string {
  if (pathname === "/fr") return "/";
  if (pathname.startsWith("/fr/")) return pathname.slice(3);
  if (pathname === "/es") return "/";
  if (pathname.startsWith("/es/")) return pathname.slice(3);
  return pathname;
}

export function pathForLang(pathname: string, lang: Lang): string {
  const en = englishPath(pathname);
  return lang === "en" ? en : (en === "/" ? `/${lang}` : `/${lang}${en}`);
}

export function preferredLanguage(stored: string | null, browserLanguage: string): Lang {
  if (stored === "es" || stored === "en" || stored === "fr") return stored;
  const language = browserLanguage.toLowerCase().split("-")[0];
  return language === "es" || language === "fr" ? language : "en";
}

export const navItems = {
  fr: [
    { to: "/fr", label: "Accueil" },
    { to: "/fr/show", label: "Le spectacle" },
    { to: "/fr/company", label: "La compagnie" },
    { to: "/fr/artists", label: "Artistes" },
  ],
  en: [
    { to: "/", label: "Home" },
    { to: "/show", label: "The Show" },
    { to: "/company", label: "The Company" },
    { to: "/artists", label: "Artists" },
  ],
  es: [
    { to: "/es", label: "Inicio" },
    { to: "/es/show", label: "El show" },
    { to: "/es/company", label: "La compañía" },
    { to: "/es/artists", label: "Artistas" },
  ],
} as const;

export const bookingLabel: Record<Lang, string> = {
  fr: "Contact",
  en: "Booking",
  es: "Contrataciones",
};

export const footerCopy = {
  fr: {
    tagline: "Tango argentin, danse aérienne et théâtre physique. De Zárate aux scènes d'Europe, d'Asie et d'Amérique.",
    explore: "Explorer",
    bookings: "Diffusion",
    rights: "Tous droits réservés.",
  },
  en: {
    tagline:
      "Argentine tango, aerial performance and physical theatre. From Zárate to stages in Europe, Asia and the Americas.",
    explore: "Explore",
    bookings: "Bookings",
    rights: "All rights reserved.",
  },
  es: {
    tagline:
      "Tango argentino, danza aérea y teatro físico. De Zárate a los escenarios de Europa, Asia y América.",
    explore: "Explorar",
    bookings: "Contrataciones",
    rights: "Todos los derechos reservados.",
  },
} as const;

export const heroCopy = {
  fr: {
    titleA: "Là où le tango",
    titleB: "prend son envol.",
    text: "Leonardo et Edgar Luizaga fondent le tango argentin, la danse aérienne et le théâtre physique en un langage scénique singulier.",
    primary: "Découvrir le spectacle",
    primaryTo: "/fr/show",
    secondary: "Voir la bande-annonce",
  },
  en: {
    titleA: "Where the embrace",
    titleB: "takes flight.",
    text: "Leonardo and Edgar Luizaga fuse Argentine tango, aerial performance and physical theatre.",
    primary: "Discover the show",
    primaryTo: "/show",
    secondary: "Watch the trailer",
  },
  es: {
    titleA: "Donde el tango",
    titleB: "alza vuelo.",
    text: "Leonardo y Edgar Luizaga funden el tango argentino con la danza aérea y el teatro físico en un lenguaje escénico propio.",
    primary: "Conocé el show",
    primaryTo: "/es/show",
    secondary: "Ver el trailer",
  },
} as const;

export const homeCopy = {
  fr: {
    manifesto: "Le tango est leur point de départ : un langage vivant qu'ils déconstruisent et recomposent en dialogue avec le cirque, le théâtre physique et la création visuelle.",
    pillars: [
      { title: "Tango", text: "Le couple, origine et cœur de chaque scène." },
      { title: "Aérien", text: "Sangles, cerceau et harnais : des corps suspendus au-dessus de l'orchestre." },
      { title: "Théâtre", text: "Une histoire racontée sans paroles, d'une fête de quartier jusqu'au seuil des enfers." },
    ],
    showTitle: "Tango – La Muerte del Ángel",
    showText: "Le mythe de Charon, raconté à travers le tango, le folklore argentin et la danse aérienne, avec un orchestre sur scène.",
    showCta: "Découvrir le spectacle",
    showTo: "/fr/show",
    castHeading: "La distribution",
    castLink: "Découvrir les artistes",
    castLinkTo: "/fr/artists",
    castRoles: ["Gabino", "Charon", "Chorégraphes associés", "Griseta et Osvaldo"],
  },
  en: {
    manifesto:
      "Tango is their starting point: taken apart and rebuilt with circus, physical theatre and visual design.",
    pillars: [
      { title: "Tango", text: "The embrace at the heart of every scene." },
      { title: "Aerial", text: "Straps, hoop and harness, flying over a live band." },
      { title: "Theatre", text: "A story told without words, from a barrio birthday to the edge of the underworld." },
    ],
    showTitle: "Tango – La Muerte del Ángel",
    showText: "The myth of Charon, told through tango, folklore, aerial dance and a live band. 70 minutes.",
    showCta: "Discover the show",
    showTo: "/show",
    castHeading: "The cast",
    castLink: "See all artists",
    castLinkTo: "/artists",
    castRoles: ["Gabino", "Charon", "Co-choreographers", "Griseta & Osvaldo"],
  },
  es: {
    manifesto:
      "El tango es su punto de partida: un lenguaje vivo que deconstruyen y reconfiguran en diálogo con el circo, el teatro físico y el diseño visual.",
    pillars: [
      { title: "Tango", text: "La pareja, origen y centro de cada escena." },
      { title: "Aéreo", text: "Straps, aro y arnés: cuerpos suspendidos sobre la orquesta en vivo." },
      { title: "Teatro", text: "Una historia narrada sin palabras, desde una celebración de barrio hasta los umbrales del inframundo." },
    ],
    showTitle: "Tango – La Muerte del Ángel",
    showText: "El mito de Caronte, narrado a través del tango, el folklore y la danza aérea, con orquesta en vivo.",
    showCta: "Conocé el show",
    showTo: "/es/show",
    castHeading: "El elenco",
    castLink: "Conocé a los artistas",
    castLinkTo: "/es/artists",
    castRoles: ["Gabino", "Caronte", "Coreógrafos asociados", "Griseta y Osvaldo"],
  },
} as const;

export const showCopyEs = {"title": "Tango – La Muerte del Ángel", "line": "En Buenos Aires, la muerte baila al ritmo del tango.", "workHeading": "La obra", "work": "Narrada a través del lenguaje expresivo del tango argentino, enriquecido con elementos del folklore y de la danza aérea en straps, aro y arnés, La Muerte del Ángel reimagina el mito de Caronte, el barquero del inframundo, desde la cultura argentina. Una obra de danza teatro que une mito, movimiento y emoción, con orquesta en vivo sobre el escenario.", "storyHeading": "La historia", "story": ["En un barrio de una Buenos Aires atemporal, donde cada esquina respira tango y aire de campo, Gabino y Amanda viven un amor sencillo y duradero, nacido en una milonga y sellado en el baile.", "Una tarde, mientras los vecinos celebran el cumpleaños de Gabino, se desata una tormenta y, con ella, llega Caronte. Atraído por el alma de Amanda, emerge del inframundo para reclamarla. Ella no se resiste: con serena entrega, baila con él.", "Solo Nocturna, médium y amiga de Gabino, alcanza a percibir su presencia. Despojado de su amada, Gabino emprende su propio descenso, un recorrido por la nostalgia, la memoria y el desconsuelo del que no logra desprenderse.", "Cuando los límites entre la vida y la muerte comienzan a desdibujarse, el amor se revela más fuerte que la propia mortalidad. Gabino elige seguir a Amanda más allá de este mundo, y Caronte los guía, juntos, hacia una unión que trasciende lo humano."], "charactersHeading": "Personajes", "characters": [{"name": "Gabino", "performer": "Leonardo Luizaga"}, {"name": "Amanda", "performer": "Maia Roldán"}, {"name": "Caronte", "performer": "Edgar Luizaga"}, {"name": "Nocturna", "performer": "Soledad Mangia"}, {"name": "El Tano, el cantor", "performer": "Roberto Minondi"}, {"name": "Griseta y Osvaldo", "performer": "Evangelina Martínez y Nelson Leiva"}, {"name": "Ivone y El Niño Bien", "performer": "Federica Tobares y Fabrizio Muñoz"}, {"name": "Charro y Esthercita", "performer": "Sofía Orlando y Heber Mallorquín"}], "trailerHeading": "Mirá el show", "galleryHeading": "Galería", "creditsHeading": "Créditos", "credits": [{"role": "Idea, dirección y producción general", "name": "Leonardo Luizaga y Edgar Luizaga"}, {"role": "Coreografía", "name": "Leonardo Luizaga, Edgar Luizaga y Maia Roldán"}, {"role": "Coreógrafos asociados", "name": "Camila Alegre y Ezequiel López"}, {"role": "Coreografía aérea", "name": "Edgar Luizaga"}, {"role": "Dirección musical", "name": "Matías Rubino"}, {"role": "Producción musical", "name": "Franco Zilocchi"}, {"role": "Diseño de vestuario", "name": "Leonardo Luizaga, con la asistencia de Silvana Ursula"}, {"role": "Diseño de iluminación", "name": "Jorge Ariel \"El Gato\" Ponce"}, {"role": "Técnicos aéreos", "name": "Flavio Lilli y Darío Diaco"}, {"role": "Asistencia de producción", "name": "Lucía Ohyama"}]};

export const companyCopyEs = {"title": "La compañía", "intro": "Coreógrafos, directores artísticos y fundadores de Luizaga Brothers Production, Leonardo y Edgar Luizaga han llevado el tango argentino a escenarios de Europa, Asia y América, con un lenguaje que funde danza, teatro y movimiento aéreo.", "originsHeading": "Los comienzos", "origins": "Nacidos en Zárate, Argentina, Leonardo y Edgar iniciaron su formación a los cinco años, en el seno de una familia de bailarines y gimnastas. Se formaron en el Instituto Superior de Arte del Teatro Colón y cultivaron el tango, el ballet, el flamenco, la danza contemporánea y las artes circenses. Ambos comenzaron su carrera internacional a los diecisiete años.", "approachHeading": "Su mirada", "approach": "Su obra nace del tango argentino, entendido no como una tradición fija, sino como un lenguaje vivo y mutable, que deconstruyen y reconfiguran en diálogo con el circo, el teatro físico y el diseño visual. De ese cruce surge un lenguaje atravesado por la tensión: entre el control y la entrega, entre el suelo y la elevación, entre la intimidad y lo monumental.", "trajectoryHeading": "Trayectoria", "togetherHeading": "Juntos", "regionsHeading": "Sus escenarios", "showCta": "Conocé el show", "showTo": "/es/show", "trajectories": [{"name": "Leonardo Luizaga", "achievements": ["Bailarín más joven de la compañía Tango Pasión, seleccionado por Héctor Zaraspe, de la Juilliard School", "Integrante de la compañía de Juan Carlos Copes", "Primer bailarín en Malbec Tango House, Nueva York", "Premio Carlos al Mejor Bailarín (Argentina)", "Representante de la Argentina en la Expo Yeosu, Corea", "Gira por más de treinta ciudades de Japón junto a la Fundación Min-On", "Primer bailarín en Stravaganza"]}, {"name": "Edgar Luizaga", "achievements": ["Formación profesional en ballet en el Instituto Superior de Arte del Teatro Colón", "Integrante del Ballet del Mercosur y de la compañía TangoX2 en Europa", "Especialización en disciplinas aéreas en L'Académie Fratellini (París) y La Central (Barcelona)", "Giras por teatros y festivales de Europa y Asia con Wild Tango y Break the Tango", "Artista invitado en Park Chinois, Londres", "Presentaciones en America's Got Talent y Spain's Got Talent"]}], "together": ["Creación y coreografía de proyectos en Nueva York, Londres, Shanghái y Dubái para firmas como Marriott International, Bulgari y The Moon Wolf Co.", "Fundación de Luizaga Brothers Production"], "premierePrefix": "Estreno de", "premiereSuffix": "en 2026", "regions": [{"name": "Europa", "countries": ["Reino Unido", "España", "Francia", "Italia"]}, {"name": "Asia", "countries": ["Japón", "China", "Corea del Sur", "Emiratos Árabes Unidos"]}, {"name": "América", "countries": ["Argentina", "Estados Unidos"]}]};

export const artistsCopyEs: Record<string, { name: string; role: string; responsibilities: string | null; credit: string }> = {"leonardo-luizaga": {"name": "Leonardo Luizaga", "role": "Gabino", "responsibilities": "Dirección general, coreografía y vestuario", "credit": "Bailarín más joven de Tango Pasión, integrante de la compañía de Juan Carlos Copes y Premio Carlos al Mejor Bailarín."}, "edgar-luizaga": {"name": "Edgar Luizaga", "role": "Caronte", "responsibilities": "Dirección general y coreografía aérea", "credit": "Formado en ballet en el Teatro Colón y en disciplinas aéreas en L'Académie Fratellini de París."}, "maia-roldan": {"name": "Maia Roldán", "role": "Amanda", "responsibilities": "Coreografía", "credit": "Bailarina de la gira Soy de Lali Espósito y de Wild Tango en Londres; Premio Hugo a la Mejor Coreografía Infantil."}, "camila-ezequiel": {"name": "Camila Alegre y Ezequiel López", "role": "Coreógrafos asociados", "responsibilities": null, "credit": "Campeones mundiales de Tango Escenario y jurados del Campeonato Mundial y del Campeonato Europeo de Tango."}, "evangelina-nelson": {"name": "Evangelina Martínez y Nelson Leiva", "role": "Griseta y Osvaldo", "responsibilities": null, "credit": "Subcampeones mundiales de Tango Escenario, con una danza que tiende puentes entre el tango y el folklore."}, "soledad-mangia": {"name": "Soledad Mangia", "role": "Nocturna", "responsibilities": null, "credit": "Campeona del Festival Nacional de Cosquín y partenaire de Julio Bocca."}, "fabrizio-federica": {"name": "Fabrizio Muñoz y Federica Tobares", "role": "Ivone y El Niño Bien", "responsibilities": null, "credit": "Una nueva generación del tango, con presentaciones en Rojo Tango (Faena Hotel), Café de los Angelitos y Señor Tango."}, "sofia-heber": {"name": "Sofía Orlando y Heber Mallorquín", "role": "Charro y Esthercita", "responsibilities": null, "credit": "Pareja protagonista de Buenos Ayres Wine en Corea del Sur y de la gira europea de El Sonido de mi Tierra, de Luis Pereyra."}, "matias-rubino": {"name": "Matías Rubino", "role": "Dirección musical y bandoneón", "responsibilities": null, "credit": "Integrante de la Orquesta Típica de Rodolfo Mederos y de Otros Aires, Tanghetto y Narcotango."}, "roberto-minondi": {"name": "Roberto Minondi", "role": "Voz y guitarra (El Tano)", "responsibilities": null, "credit": "Cinco años en Esquina Carlos Gardel; cantor de la Orquesta Típica Tanturi y de Romántica Milonguera."}, "sergio-milman": {"name": "Sergio Milman", "role": "Piano", "responsibilities": null, "credit": "Durante doce años, pianista, arreglador y director musical de la Orquesta Típica Percal."}, "luiza-anastasio": {"name": "Luiza Anastásio", "role": "Violín", "responsibilities": null, "credit": "Doctora en Música por la Universidad Federal de Minas Gerais, Brasil."}, "patricio-cotella": {"name": "Patricio Cotella", "role": "Contrabajo", "responsibilities": null, "credit": "Formado en la Orquesta Escuela de Tango dirigida por Emilio Balcarce."}, "franco-zilocchi": {"name": "Franco Zilocchi", "role": "Batería y producción musical", "responsibilities": null, "credit": "Ingeniero de sonido y productor musical."}, "ariel-ponce": {"name": "Jorge Ariel \"El Gato\" Ponce", "role": "Diseño de iluminación", "responsibilities": null, "credit": "Casi tres décadas en los teatros de la avenida Corrientes, con títulos como Stravaganza, Rent y Pretty Woman."}, "lucia-ohyama": {"name": "Lucía Ohyama", "role": "Producción", "responsibilities": null, "credit": "Producción ejecutiva y dirección de gira."}};

export const artistGroupHeadingsEs: Record<string, string> = {"Direction": "Dirección", "Dancers": "Bailarines", "Musicians": "Músicos", "Creative team": "Equipo creativo"};

const baseMediaCopy = { en: { play: "Play the official trailer", trailer: "La Muerte del Ángel — Official Trailer", close: "Close", biography: "Read biography of", enlarge: "Enlarge gallery photo", gallery: "Tango – La Muerte del Ángel gallery, photo", previous: "Previous gallery photo", next: "Next gallery photo", alts: ["A tango couple embraces with the live band behind them", "The ensemble dances beneath pink stage lights", "Two couples perform tango on stage", "A tango couple in a sweeping embrace", "Aerial straps rise above the dancers", "A dancer lifts his partner in the spotlight", "The ensemble in a dramatic blue and pink stage scene", "Two characters wearing hats against a red theatre curtain", "An aerial performer suspended over the ensemble"] }, es: { play: "Reproducir el trailer oficial", trailer: "La Muerte del Ángel — Trailer oficial", close: "Cerrar", biography: "Leer biografía de", enlarge: "Ampliar foto de la galería", gallery: "Galería de Tango – La Muerte del Ángel, foto", previous: "Foto anterior", next: "Foto siguiente", alts: ["Una pareja de tango se abraza frente a la orquesta en vivo", "El elenco baila bajo luces rosadas", "Dos parejas bailan tango sobre el escenario", "Una pareja de tango en un abrazo extendido", "Los straps aéreos se elevan sobre los bailarines", "Un bailarín levanta a su pareja bajo el reflector", "El elenco en una escena con luces azules y rosadas", "Dos personajes con sombrero frente a un telón rojo", "Un artista aéreo suspendido sobre el elenco"] } };


export const mediaCopy = {
  ...baseMediaCopy,
  fr: {
    ...baseMediaCopy.en,
    play: "Lire la bande-annonce officielle",
    trailer: "La Muerte del Ángel — Bande-annonce officielle",
    close: "Fermer",
    biography: "Lire la biographie de",
    enlarge: "Agrandir la photo de la galerie",
    gallery: "Galerie de Tango – La Muerte del Ángel, photo",
    previous: "Photo précédente",
    next: "Photo suivante",
  },
};

export const artistGroupHeadingsFr: Record<string, string> = {
  Direction: "Direction artistique",
  Dancers: "Danseurs",
  Musicians: "Musiciens",
  "Creative team": "Équipe de création",
};

export const artistsCopyFr: typeof artistsCopyEs = {
  "leonardo-luizaga": { name: "Leonardo Luizaga", role: "Gabino", responsibilities: "Mise en scène, chorégraphie et costumes", credit: "Plus jeune danseur de « Tango Pasión », membre de la compagnie de Juan Carlos Copes et lauréat du prix du Meilleur danseur aux « Premios Carlos »." },
  "edgar-luizaga": { name: "Edgar Luizaga", role: "Charon", responsibilities: "Mise en scène et chorégraphie aérienne", credit: "Formé au ballet au « Teatro Colón » et aux disciplines aériennes à l'Académie Fratellini, à Paris." },
  "maia-roldan": { name: "Maia Roldán", role: "Amanda", responsibilities: "Chorégraphie", credit: "Danseuse de la tournée « Soy » de Lali Espósito et de Wild Tango à Londres ; prix de la Meilleure chorégraphie jeune public aux « Premios Hugo »." },
  "camila-ezequiel": { name: "Camila Alegre et Ezequiel López", role: "Chorégraphes associés", responsibilities: null, credit: "Champions du monde de « Tango Escenario » et membres du jury des championnats du monde et d'Europe de tango." },
  "evangelina-nelson": { name: "Evangelina Martínez et Nelson Leiva", role: "Griseta et Osvaldo", responsibilities: null, credit: "Vice-champions du monde de « Tango Escenario », dont la danse jette des ponts entre tango et folklore." },
  "soledad-mangia": { name: "Soledad Mangia", role: "Nocturna", responsibilities: null, credit: "Championne du « Festival Nacional de Cosquín » et partenaire de Julio Bocca." },
  "fabrizio-federica": { name: "Fabrizio Muñoz et Federica Tobares", role: "Ivone et El Niño Bien", responsibilities: null, credit: "Une nouvelle génération du tango, à l'affiche de « Rojo Tango » (Faena Hotel), du « Café de los Angelitos » et de « Señor Tango »." },
  "sofia-heber": { name: "Sofía Orlando et Heber Mallorquín", role: "Charro et Esthercita", responsibilities: null, credit: "Couple vedette de Buenos Ayres Wine en Corée du Sud et de la tournée européenne d'« El Sonido de mi Tierra », de Luis Pereyra." },
  "matias-rubino": { name: "Matías Rubino", role: "Direction musicale et bandonéon", responsibilities: null, credit: "Membre de l'« Orquesta Típica » de Rodolfo Mederos et des formations Otros Aires, Tanghetto et Narcotango." },
  "roberto-minondi": { name: "Roberto Minondi", role: "Chant et guitare (El Tano)", responsibilities: null, credit: "Cinq ans à l'« Esquina Carlos Gardel » ; chanteur de l'« Orquesta Típica Tanturi » et de « Romántica Milonguera »." },
  "sergio-milman": { name: "Sergio Milman", role: "Piano", responsibilities: null, credit: "Pendant douze ans, pianiste, arrangeur et directeur musical de l'« Orquesta Típica Percal »." },
  "luiza-anastasio": { name: "Luiza Anastásio", role: "Violon", responsibilities: null, credit: "Docteure en musique de l'Université fédérale du Minas Gerais, au Brésil." },
  "patricio-cotella": { name: "Patricio Cotella", role: "Contrebasse", responsibilities: null, credit: "Formé au sein de l'« Orquesta Escuela de Tango » dirigée par Emilio Balcarce." },
  "franco-zilocchi": { name: "Franco Zilocchi", role: "Batterie et production musicale", responsibilities: null, credit: "Ingénieur du son et producteur." },
  "ariel-ponce": { name: "Jorge Ariel « El Gato » Ponce", role: "Création lumière", responsibilities: null, credit: "Près de trente ans dans les théâtres de l'« Avenida Corrientes », avec des spectacles tels que « Stravaganza », Rent et Pretty Woman." },
  "lucia-ohyama": { name: "Lucía Ohyama", role: "Production", responsibilities: null, credit: "Production exécutive et direction de tournée." },
};

export const companyCopyFr = {
  title: "La compagnie",
  intro: "Chorégraphes, directeurs artistiques et fondateurs de Luizaga Brothers Production, Leonardo et Edgar Luizaga ont porté le tango argentin sur les scènes d'Europe, d'Asie et d'Amérique, à travers un langage qui mêle danse, théâtre et mouvement aérien.",
  originsHeading: "Les débuts",
  origins: "Nés à Zárate, en Argentine, Leonardo et Edgar commencent leur formation dès l'âge de cinq ans, au sein d'une famille de danseurs et de gymnastes. Formés à l'« Instituto Superior de Arte » du « Teatro Colón », ils pratiquent le tango, le ballet, le flamenco, la danse contemporaine et les arts du cirque. Tous deux entament leur carrière internationale à dix-sept ans.",
  approachHeading: "Leur regard",
  approach: "Leur travail prend racine dans le tango argentin, envisagé non comme une tradition figée mais comme un langage vivant et mouvant, qu'ils déconstruisent et recomposent en dialogue avec le cirque, le théâtre physique et la création visuelle. De cette rencontre naît un langage traversé de tensions : entre maîtrise et lâcher-prise, entre ancrage et élévation, entre intimité et monumentalité.",
  trajectoryHeading: "Parcours",
  togetherHeading: "Ensemble",
  regionsHeading: "Leurs scènes",
  showCta: "Découvrir le spectacle",
  showTo: "/fr/show",
  trajectories: [
    { name: "Leonardo Luizaga", achievements: [
      "Plus jeune danseur de la compagnie « Tango Pasión », choisi par Héctor Zaraspe, de la Juilliard School",
      "Membre de la compagnie de Juan Carlos Copes",
      "Danseur principal au « Malbec Tango House », New York",
      "Prix du Meilleur danseur aux « Premios Carlos » (Argentine)",
      "Représentant de l'Argentine à l'Expo Yeosu, en Corée",
      "Tournée dans plus de trente villes du Japon avec la Fondation Min-On",
      "Danseur principal dans « Stravaganza »",
    ] },
    { name: "Edgar Luizaga", achievements: [
      "Formation professionnelle en ballet à l'« Instituto Superior de Arte » du « Teatro Colón »",
      "Membre du « Ballet del Mercosur » et de la compagnie TangoX2 en Europe",
      "Spécialisation dans les disciplines aériennes à l'Académie Fratellini (Paris) et à « La Central » (Barcelone)",
      "Tournées dans les théâtres et festivals d'Europe et d'Asie avec Wild Tango et Break the Tango",
      "Artiste invité au Park Chinois, Londres",
      "Prestations dans America's Got Talent et Spain's Got Talent",
    ] },
  ],
  together: [
    "Création et chorégraphie de projets à New York, Londres, Shanghai et Dubaï pour des maisons telles que Marriott International, Bulgari et The Moon Wolf Co.",
    "Fondation de Luizaga Brothers Production",
  ],
  premierePrefix: "Création de «",
  premiereSuffix: "» en 2026",
  regions: [
    { name: "Europe", countries: ["Royaume-Uni", "Espagne", "France", "Italie"] },
    { name: "Asie", countries: ["Japon", "Chine", "Corée du Sud", "Émirats arabes unis"] },
    { name: "Amériques", countries: ["Argentine", "États-Unis"] },
  ],
};

export const showCopyFr = {
  title: "Tango – La Muerte del Ángel",
  line: "À Buenos Aires, la mort danse au rythme du tango.",
  workHeading: "L'œuvre",
  work: "Portée par le langage expressif du tango argentin, enrichie d'éléments du folklore et de danse aérienne sur sangles, cerceau et harnais, La Muerte del Ángel réinvente le mythe de Charon, le passeur des enfers, à travers la culture argentine. Une œuvre de danse-théâtre qui unit mythe, mouvement et émotion, avec un orchestre sur scène.",
  storyHeading: "L'histoire",
  story: [
    "Dans un quartier d'un Buenos Aires hors du temps, où chaque coin de rue respire le tango et l'air de la campagne, Gabino et Amanda vivent un amour simple et durable, né dans une milonga et scellé par la danse.",
    "Un après-midi, tandis que les voisins célèbrent l'anniversaire de Gabino, un orage éclate et, avec lui, surgit Charon. Attiré par l'âme d'Amanda, il remonte des enfers pour la réclamer. Elle ne résiste pas : dans un abandon serein, elle danse avec lui.",
    "Seule Nocturna, médium et amie de Gabino, perçoit sa présence. Privé de son aimée, Gabino entame sa propre descente, une errance à travers la nostalgie, la mémoire et un chagrin dont il ne parvient pas à se défaire.",
    "Lorsque les frontières entre la vie et la mort commencent à s'estomper, l'amour se révèle plus fort que la mort elle-même. Gabino choisit de suivre Amanda au-delà de ce monde, et Charon les guide, ensemble, vers une union qui dépasse les limites de l'humain.",
  ],
  charactersHeading: "Personnages",
  characters: [
    { name: "Gabino", performer: "Leonardo Luizaga" },
    { name: "Amanda", performer: "Maia Roldán" },
    { name: "Charon", performer: "Edgar Luizaga" },
    { name: "Nocturna", performer: "Soledad Mangia" },
    { name: "El Tano, le chanteur", performer: "Roberto Minondi" },
    { name: "Griseta et Osvaldo", performer: "Evangelina Martínez et Nelson Leiva" },
    { name: "Ivone et El Niño Bien", performer: "Federica Tobares et Fabrizio Muñoz" },
    { name: "Charro et Esthercita", performer: "Sofía Orlando et Heber Mallorquín" },
  ],
  trailerHeading: "Voir le spectacle",
  galleryHeading: "Galerie",
  creditsHeading: "Générique",
  credits: [
    { role: "Idée, mise en scène et production", name: "Leonardo Luizaga et Edgar Luizaga" },
    { role: "Chorégraphie", name: "Leonardo Luizaga, Edgar Luizaga et Maia Roldán" },
    { role: "Chorégraphes associés", name: "Camila Alegre et Ezequiel López" },
    { role: "Chorégraphie aérienne", name: "Edgar Luizaga" },
    { role: "Direction musicale", name: "Matías Rubino" },
    { role: "Production musicale", name: "Franco Zilocchi" },
    { role: "Costumes", name: "Leonardo Luizaga, assisté de Silvana Ursula" },
    { role: "Création lumière", name: "Jorge Ariel « El Gato » Ponce" },
    { role: "Techniciens aériens", name: "Flavio Lilli et Darío Diaco" },
    { role: "Assistante de production", name: "Lucía Ohyama" },
  ],
};
