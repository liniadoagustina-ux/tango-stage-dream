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
    { to: "/fr/show", label: "Le Spectacle" },
    { to: "/fr/company", label: "La Compagnie" },
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
    { to: "/es/show", label: "El Show" },
    { to: "/es/company", label: "La Compañía" },
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
    tagline: "Tango argentin, danse aérienne et théâtre physique.",
    explore: "Explorer",
    bookings: "Diffusion",
    rights: "Tous droits réservés.",
  },
  en: {
    tagline: "Argentine tango, aerial performance and physical theatre.",
    explore: "Explore",
    bookings: "Bookings",
    rights: "All rights reserved.",
  },
  es: {
    tagline: "Tango argentino, danza aérea y teatro físico.",
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
    titleA: "Where tango",
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
    showTitle: "La Muerte del Ángel",
    showText: "Le mythe de Charon, raconté à travers le tango, le folklore argentin et la danse aérienne, avec un orchestre sur scène.",
    showCta: "Découvrir le spectacle",
    showTo: "/fr/show",
    castHeading: "La Distribution",
    castLink: "Découvrir les artistes",
    castLinkTo: "/fr/artists",
    castRoles: ["Gabino", "Charon", "Chorégraphes associés", "Griseta et Osvaldo"],
  },
  en: {
    manifesto:
      "Tango is their starting point: taken apart and rebuilt with circus, physical theatre and visual design.",
    pillars: [
      { title: "Tango", text: "The couple, origin and heart of every scene." },
      { title: "Aerial", text: "Straps, hoop and harness: bodies suspended above the live orchestra." },
      { title: "Theatre", text: "A story told without words, from a neighbourhood celebration to the threshold of the underworld." },
    ],
    showTitle: "La Muerte del Ángel",
    showText: "The myth of Charon, told through tango, folklore, aerial dance and a live band.",
    showCta: "Discover the show",
    showTo: "/show",
    castHeading: "The Cast",
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
    showTitle: "La Muerte del Ángel",
    showText: "El mito de Caronte, narrado a través del tango, el folklore y la danza aérea, con orquesta en vivo.",
    showCta: "Conocé el show",
    showTo: "/es/show",
    castHeading: "El Elenco",
    castLink: "Conocé a los artistas",
    castLinkTo: "/es/artists",
    castRoles: ["Gabino", "Caronte", "Coreógrafos asociados", "Griseta y Osvaldo"],
  },
} as const;

export const showCopyEs = {"title": "La Muerte del Ángel", "line": "En Buenos Aires, la muerte baila al ritmo del tango.", "workHeading": "La Obra", "work": "Narrada a través del lenguaje expresivo del tango argentino, enriquecido con elementos del folklore y de la danza aérea en straps, aro y arnés, La Muerte del Ángel reimagina el mito de Caronte, el barquero del inframundo, desde la cultura argentina. Una obra de danza teatro que une mito, movimiento y emoción, con orquesta en vivo sobre el escenario.", "storyHeading": "La Historia", "story": ["En un barrio de una Buenos Aires atemporal, donde cada esquina respira tango y aire de campo, Gabino y Amanda viven un amor sencillo y duradero, nacido en una milonga y sellado en el baile.", "Una tarde, mientras los vecinos celebran el cumpleaños de Gabino, se desata una tormenta y, con ella, llega Caronte. Atraído por el alma de Amanda, emerge del inframundo para reclamarla. Ella no se resiste: con serena entrega, baila con él.", "Solo Nocturna, médium y amiga de Gabino, alcanza a percibir su presencia. Despojado de su amada, Gabino emprende su propio descenso, un recorrido por la nostalgia, la memoria y el desconsuelo del que no logra desprenderse.", "Cuando los límites entre la vida y la muerte comienzan a desdibujarse, el amor se revela más fuerte que la propia mortalidad. Gabino elige seguir a Amanda más allá de este mundo, y Caronte los guía, juntos, hacia una unión que trasciende lo humano."], "charactersHeading": "Personajes", "characters": [{"name": "Gabino", "performer": "Leonardo Luizaga"}, {"name": "Amanda", "performer": "Maia Roldán"}, {"name": "Caronte", "performer": "Edgar Luizaga"}, {"name": "Nocturna", "performer": "Soledad Mangia"}, {"name": "El Tano, el cantor", "performer": "Roberto Minondi"}, {"name": "Griseta y Osvaldo", "performer": "Evangelina Martínez y Nelson Leiva"}, {"name": "Ivone y El Niño Bien", "performer": "Federica Tobares y Fabrizio Muñoz"}, {"name": "Charro y Esthercita", "performer": "Sofía Orlando y Heber Mallorquín"}], "trailerHeading": "Mirá el Show", "galleryHeading": "Galería", "creditsHeading": "Créditos", "credits": [{"role": "Idea, dirección y producción general", "name": "Leonardo Luizaga y Edgar Luizaga"}, {"role": "Coreografía", "name": "Leonardo Luizaga, Edgar Luizaga y Maia Roldán"}, {"role": "Coreógrafos asociados", "name": "Camila Alegre y Ezequiel López"}, {"role": "Coreografía aérea", "name": "Edgar Luizaga"}, {"role": "Dirección musical", "name": "Matías Rubino"}, {"role": "Producción musical", "name": "Franco Zilocchi"}, {"role": "Diseño de vestuario", "name": "Leonardo Luizaga, con la asistencia de Silvana Ursula"}, {"role": "Diseño de iluminación", "name": "Jorge Ariel \"El Gato\" Ponce"}, {"role": "Técnicos aéreos", "name": "Flavio Lilli y Darío Diaco"}, {"role": "Asistencia de producción", "name": "Lucía Ohyama"}]};

export const companyCopyEs = {"title": "La Compañía", "intro": "Coreógrafos, directores artísticos y fundadores de Luizaga Brothers Production, Leonardo y Edgar Luizaga han llevado el tango argentino a escenarios de Europa, Asia y América, con un lenguaje que funde danza, teatro y movimiento aéreo.", "originsHeading": "Los Comienzos", "origins": "Nacidos en Zárate, Argentina, Leonardo y Edgar iniciaron su formación a los cinco años, en el seno de una familia de bailarines y gimnastas. Se formaron en el Instituto Superior de Arte del Teatro Colón y cultivaron el tango, el ballet, el flamenco, la danza contemporánea y las artes circenses. Ambos comenzaron su carrera internacional a los diecisiete años.", "approachHeading": "Su Mirada", "approach": "Su obra nace del tango argentino, entendido no como una tradición fija, sino como un lenguaje vivo y mutable, que deconstruyen y reconfiguran en diálogo con el circo, el teatro físico y el diseño visual. De ese cruce surge un lenguaje atravesado por la tensión: entre el control y la entrega, entre el suelo y la elevación, entre la intimidad y lo monumental.", "trajectoryHeading": "Trayectoria", "togetherHeading": "Juntos", "regionsHeading": "Sus Escenarios", "showCta": "Conocé el show", "showTo": "/es/show", "trajectories": [{"name": "Leonardo Luizaga", "achievements": ["Bailarín más joven de la compañía Tango Pasión, seleccionado por Héctor Zaraspe, de la Juilliard School", "Integrante de la compañía de Juan Carlos Copes", "Primer bailarín en Malbec Tango House, Nueva York", "Premio Carlos al Mejor Bailarín (Argentina)", "Representante de la Argentina en la Expo Yeosu, Corea", "Gira por más de treinta ciudades de Japón junto a la Fundación Min-On", "Primer bailarín en Stravaganza"]}, {"name": "Edgar Luizaga", "achievements": ["Formación profesional en ballet en el Instituto Superior de Arte del Teatro Colón", "Integrante del Ballet del Mercosur y de la compañía TangoX2 en Europa", "Especialización en disciplinas aéreas en L'Académie Fratellini (París) y La Central (Barcelona)", "Giras por teatros y festivales de Europa y Asia con Wild Tango y Break the Tango", "Artista invitado en Park Chinois, Londres", "Presentaciones en America's Got Talent y Spain's Got Talent"]}], "together": ["Creación y coreografía de proyectos en Nueva York, Londres, Shanghái y Dubái para firmas como Marriott International, Bulgari y The Moon Wolf Co.", "Fundación de Luizaga Brothers Production"], "premierePrefix": "Creación de", "premiereSuffix": ", su nueva producción", "regions": [{"name": "Europa", "countries": ["Reino Unido", "España", "Francia", "Italia"]}, {"name": "Asia", "countries": ["Japón", "China", "Corea del Sur", "Emiratos Árabes Unidos"]}, {"name": "América", "countries": ["Argentina", "Estados Unidos"]}]};

export const artistsCopyEs: Record<string, { name: string; role: string; responsibilities: string | null; credit: string }> = {"leonardo-luizaga": {"name": "Leonardo Luizaga", "role": "Gabino", "responsibilities": "Dirección general, coreografía y vestuario", "credit": "Bailarín más joven de Tango Pasión, integrante de la compañía de Juan Carlos Copes y Premio Carlos al Mejor Bailarín."}, "edgar-luizaga": {"name": "Edgar Luizaga", "role": "Caronte", "responsibilities": "Dirección general y coreografía aérea", "credit": "Formado en ballet en el Teatro Colón y en disciplinas aéreas en L'Académie Fratellini de París."}, "maia-roldan": {"name": "Maia Roldán", "role": "Amanda", "responsibilities": "Coreografía", "credit": "Bailarina de la gira Soy de Lali Espósito y de Wild Tango en Londres; Premio Hugo a la Mejor Coreografía Infantil."}, "camila-ezequiel": {"name": "Camila Alegre y Ezequiel López", "role": "Coreógrafos asociados", "responsibilities": null, "credit": "Campeones mundiales de Tango Escenario y jurados del Campeonato Mundial y del Campeonato Europeo de Tango."}, "evangelina-nelson": {"name": "Evangelina Martínez y Nelson Leiva", "role": "Griseta y Osvaldo", "responsibilities": null, "credit": "Subcampeones mundiales de Tango Escenario, con una danza que tiende puentes entre el tango y el folklore."}, "soledad-mangia": {"name": "Soledad Mangia", "role": "Nocturna", "responsibilities": null, "credit": "Campeona del Festival Nacional de Cosquín y partenaire de Julio Bocca."}, "fabrizio-federica": {"name": "Fabrizio Muñoz y Federica Tobares", "role": "Ivone y El Niño Bien", "responsibilities": null, "credit": "Una nueva generación del tango, con presentaciones en Rojo Tango (Faena Hotel), Café de los Angelitos y Señor Tango."}, "sofia-heber": {"name": "Sofía Orlando y Heber Mallorquín", "role": "Charro y Esthercita", "responsibilities": null, "credit": "Pareja protagonista de Buenos Ayres Wine en Corea del Sur y de la gira europea de El Sonido de mi Tierra, de Luis Pereyra."}, "matias-rubino": {"name": "Matías Rubino", "role": "Dirección musical y bandoneón", "responsibilities": null, "credit": "Integrante de la Orquesta Típica de Rodolfo Mederos y de Otros Aires, Tanghetto y Narcotango."}, "roberto-minondi": {"name": "Roberto Minondi", "role": "Voz y guitarra (El Tano)", "responsibilities": null, "credit": "Cinco años en Esquina Carlos Gardel; cantor de la Orquesta Típica Tanturi y de Romántica Milonguera."}, "sergio-milman": {"name": "Sergio Milman", "role": "Piano", "responsibilities": null, "credit": "Durante doce años, pianista, arreglador y director musical de la Orquesta Típica Percal."}, "luiza-anastasio": {"name": "Luiza Anastásio", "role": "Violín", "responsibilities": null, "credit": "Doctora en Música por la Universidad Federal de Minas Gerais, Brasil."}, "patricio-cotella": {"name": "Patricio Cotella", "role": "Contrabajo", "responsibilities": null, "credit": "Formado en la Orquesta Escuela de Tango dirigida por Emilio Balcarce."}, "franco-zilocchi": {"name": "Franco Zilocchi", "role": "Batería y producción musical", "responsibilities": null, "credit": "Ingeniero de sonido y productor musical."}, "ariel-ponce": {"name": "Jorge Ariel \"El Gato\" Ponce", "role": "Diseño de iluminación", "responsibilities": null, "credit": "Casi tres décadas en los teatros de la avenida Corrientes, con títulos como Stravaganza, Rent y Pretty Woman."}, "lucia-ohyama": {"name": "Lucía Ohyama", "role": "Producción", "responsibilities": null, "credit": "Producción ejecutiva y dirección de gira."}};

export const artistGroupHeadingsEs: Record<string, string> = {"Direction": "Dirección", "Dancers": "Bailarines", "Musicians": "Músicos", "Creative Team": "Equipo Creativo"};

const baseMediaCopy = { en: { play: "Play the official trailer", trailer: "La Muerte del Ángel — Official Trailer", close: "Close", biography: "Read biography of", enlarge: "Enlarge gallery photo", gallery: "La Muerte del Ángel gallery, photo", previous: "Previous gallery photo", next: "Next gallery photo", alts: ["A tango couple embraces with the live band behind them", "The ensemble dances beneath pink stage lights", "Two couples perform tango on stage", "A tango couple in a sweeping embrace", "Aerial straps rise above the dancers", "A dancer lifts his partner in the spotlight", "The ensemble in a dramatic blue and pink stage scene", "Two characters wearing hats against a red theatre curtain", "An aerial performer suspended over the ensemble"] }, es: { play: "Reproducir el trailer oficial", trailer: "La Muerte del Ángel — Trailer Oficial", close: "Cerrar", biography: "Leer biografía de", enlarge: "Ampliar foto de la galería", gallery: "Galería de La Muerte del Ángel, foto", previous: "Foto anterior", next: "Foto siguiente", alts: ["Una pareja de tango se abraza frente a la orquesta en vivo", "El elenco baila bajo luces rosadas", "Dos parejas bailan tango sobre el escenario", "Una pareja de tango en un abrazo extendido", "Los straps aéreos se elevan sobre los bailarines", "Un bailarín levanta a su pareja bajo el reflector", "El elenco en una escena con luces azules y rosadas", "Dos personajes con sombrero frente a un telón rojo", "Un artista aéreo suspendido sobre el elenco"] } };


export const mediaCopy = {
  ...baseMediaCopy,
  fr: {
    ...baseMediaCopy.en,
    play: "Lire la bande-annonce officielle",
    trailer: "La Muerte del Ángel — Bande-Annonce Officielle",
    close: "Fermer",
    biography: "Lire la biographie de",
    enlarge: "Agrandir la photo de la galerie",
    gallery: "Galerie de La Muerte del Ángel, photo",
    previous: "Photo précédente",
    next: "Photo suivante",
  },
};

export const artistGroupHeadingsFr: Record<string, string> = {
  Direction: "Direction Artistique",
  Dancers: "Danseurs",
  Musicians: "Musiciens",
  "Creative Team": "Équipe de Création",
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
  title: "La Compagnie",
  intro: "Chorégraphes, directeurs artistiques et fondateurs de Luizaga Brothers Production, Leonardo et Edgar Luizaga ont porté le tango argentin sur les scènes d'Europe, d'Asie et d'Amérique, à travers un langage qui mêle danse, théâtre et mouvement aérien.",
  originsHeading: "Les Débuts",
  origins: "Nés à Zárate, en Argentine, Leonardo et Edgar commencent leur formation dès l'âge de cinq ans, au sein d'une famille de danseurs et de gymnastes. Formés à l'« Instituto Superior de Arte » du « Teatro Colón », ils pratiquent le tango, le ballet, le flamenco, la danse contemporaine et les arts du cirque. Tous deux entament leur carrière internationale à dix-sept ans.",
  approachHeading: "Leur Regard",
  approach: "Leur travail prend racine dans le tango argentin, envisagé non comme une tradition figée mais comme un langage vivant et mouvant, qu'ils déconstruisent et recomposent en dialogue avec le cirque, le théâtre physique et la création visuelle. De cette rencontre naît un langage traversé de tensions : entre maîtrise et lâcher-prise, entre ancrage et élévation, entre intimité et monumentalité.",
  trajectoryHeading: "Parcours",
  togetherHeading: "Ensemble",
  regionsHeading: "Leurs Scènes",
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
  premierePrefix: "Conception de «",
  premiereSuffix: " », leur nouveau spectacle",
  regions: [
    { name: "Europe", countries: ["Royaume-Uni", "Espagne", "France", "Italie"] },
    { name: "Asie", countries: ["Japon", "Chine", "Corée du Sud", "Émirats arabes unis"] },
    { name: "Amériques", countries: ["Argentine", "États-Unis"] },
  ],
};

export const showCopyFr = {
  title: "La Muerte del Ángel",
  line: "À Buenos Aires, la mort danse au rythme du tango.",
  workHeading: "L'Œuvre",
  work: "Portée par le langage expressif du tango argentin, enrichie d'éléments du folklore et de danse aérienne sur sangles, cerceau et harnais, La Muerte del Ángel réinvente le mythe de Charon, le passeur des enfers, à travers la culture argentine. Une œuvre de danse-théâtre qui unit mythe, mouvement et émotion, avec un orchestre sur scène.",
  storyHeading: "L'Histoire",
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
  trailerHeading: "Voir le Spectacle",
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

// Supplied Spanish full biographies; artists not listed retain their original biography.
export const artistBiographiesEs: Record<string, string[]> = {
  "leonardo-luizaga": [
    "Coreógrafo, intérprete y fuerza creativa del tango contemporáneo en la escena internacional. Fue el bailarín más joven convocado por la legendaria compañía Tango Pasión, elegido personalmente por Héctor Zaraspe, de la Juilliard School.",
    "Premio Carlos al Mejor Bailarín. Fue artista principal de la compañía de Juan Carlos Copes, de Malbec Tango House (Nueva York), Stravaganza Tango, Estampas Porteñas e Immortal Tango, en giras que lo llevaron de Tokio a Londres.",
    "Formado en tango, ballet, jazz, danza contemporánea y straps aéreos, domina además el diseño de vestuario, la iluminación y la dramaturgia. Un creador de mundos inmersivos, de intensa carga emocional."
  ],
  "edgar-luizaga": [
    "Cocreador y productor general de Luizaga Brothers. Se formó en el Instituto Superior de Arte del Teatro Colón con los maestros Mario Galizzi y Leandro Regueiro. Comenzó a los cinco años con la gimnasia artística; luego llegaron el ballet y, más tarde, el tango.",
    "Debutó en Piazzolla Tango, integró la compañía TangoX2 en Europa y el Ballet del Mercosur. Perfeccionó su lenguaje aéreo en el Circo Criollo, en L'Académie Fratellini de París y en La Central de Barcelona.",
    "Participó en Wild Tango, Break the Tango, America's Got Talent, Spain's Got Talent, Park Chinois (Londres), Lío Ibiza y en producciones internacionales para firmas como Marriott, Bulgari y The Moon Wolf Co."
  ],
  "maia-roldan": [
    "Bailarina y coreógrafa argentina, reconocida por su versatilidad y su presencia escénica en el teatro musical, la televisión y las producciones internacionales. A lo largo de su carrera recibió numerosos premios y becas, entre ellas una beca para el Summer Dance Intensive de la Point Park University (Pittsburgh, Estados Unidos), otorgada por Gustavo Zajac, y continuó su formación en la Fundación Julio Bocca, en Buenos Aires.",
    "Prosiguió sus estudios en Nueva York, en el Broadway Dance Center, junto a la reconocida coreógrafa Ashley Dawson. En baile de salón obtuvo el primer premio del certamen World Promotions Sheraton (2011–2012) junto a Alexis Mariani. En 2018 recibió el Premio Hugo a la Mejor Coreografía Infantil por Aladín… será genial, creada junto a Rosario Asencio.",
    "Como intérprete construyó una extensa trayectoria en teatro, televisión y giras internacionales. Trabajó en grandes producciones de la televisión argentina, como Susana Giménez y ShowMatch – Bailando por un Sueño (2018–2019); acompañó a Lali Espósito en la gira Soy (2016–2019) y formó parte de Disney – Una Navidad Inolvidable, dirigida por Ariel del Mastro; Pan – El Musical, como capitana de baile; y Stravaganza, dirigida por Flavio Mendoza.",
    "En la danza contemporánea trabajó con la compañía CEM en obras como Pies pa' Volar, Rayuela y Estados del Tiempo, y con Choque Urbano en el Teatro Konex y en gira nacional (2011–2013).",
    "En el plano internacional fue bailarina y asistente en Wild Tango, de la compañía de Germán Cornejo, en Londres (2022–2023), y en Papillon, cena show en Dubái dirigida por Layla Kardan. Recorrió además Rusia, Armenia, Bielorrusia, Kazajistán, Kirguistán, Moldavia e Italia con Freedom, de Los Potros Malambo, bajo la dirección de Isaac y Javier Gardela.",
    "Como coreógrafa firmó American Idiot – El Musical, Simona en Vivo en el Luna Park y Aladín… será genial en el Teatro Gran Rex; coreografió para Burnet en Turquía y Egipto (2021–2022) y colaboró en Wild Tango con la compañía de Germán Cornejo. Recientemente participó en Papá por Siempre, en el Teatro Liceo (2026)."
  ],
  "camila-ezequiel": [
    "Campeones mundiales de Tango Escenario y jurados del Campeonato Mundial y del Campeonato Europeo de Tango. Integraron las compañías Tango Legends, Tanguera, Tango Fire, Break the Tango y Tango After Dark (Peacock Theatre, Londres).",
    "Se presentaron en las casas de tango más prestigiosas de Buenos Aires, como Café de los Angelitos, Tango Porteño y Piazzolla Tango, y participaron en la película Un Tango Más, junto a María Nieves y Juan Carlos Copes.",
    "Forman parte del equipo coreográfico de La Muerte del Ángel, la nueva producción de Luizaga Brothers."
  ],
  "evangelina-nelson": [
    "Subcampeones mundiales de Tango Escenario, reconocidos internacionalmente por su arte y su presencia escénica. Su danza tiende puentes entre el tango tradicional y las influencias contemporáneas y folklóricas.",
    "Participaron en Michelangelo Tango Show, Madero Tango Iguazú, El Viejo Almacén, Tango Dynasty y Tango 01, y realizaron giras internacionales con Malevo y el CRXCE Ballet.",
    "En 2025 fueron convocados por Luizaga Brothers para integrar su nueva producción."
  ],
  "soledad-mangia": [
    "Coreógrafa y bailarina argentina. Campeona del prestigioso Festival Nacional de Cosquín, reconocida por su excelencia en el folklore argentino y por su refinada versatilidad en múltiples disciplinas. Fue partenaire de Julio Bocca, lo que consolidó su prestigio en la escena internacional.",
    "Fue seleccionada para participar en PROTÉGÉS III – International Ballet Academy Festival, en Washington D. C., donde se formó y bailó junto a artistas de compañías de renombre mundial como el Ballet Bolshói, el Tokyo Ballet y el Royal Danish Ballet.",
    "Construyó una sólida base clásica en el Ballet de San Martín, en Buenos Aires, y continuó sus estudios en la Point Park University de Pittsburgh (Estados Unidos), bajo la dirección de Susan Stowe, con especialización en ballet clásico, danza moderna, jazz y tap. Amplió su formación en Nueva York con la Jennifer Muller Company, guiada por su fundadora y directora artística.",
    "En 2018 se sumó a la gira Tango Seducción, dirigida por Gustavo Russo, y bailó con el Ballet Folklórico Nacional en los festivales de Cosquín y del Chamamé, en Corrientes. Ese mismo año participó en ARGENTUM para la Cumbre del G20, dirigida por Ricky Pashkus, y acompañó a Julio Bocca como bailarina. Bailó también en Un Instante, de la Compañía en Movimiento (C.E.M.), dirigida por Analía González; integró Choque Urbano (2011) y participó en producciones emblemáticas como la reapertura del Teatro Colón, dirigida por Carlos Veiga.",
    "Fue bailarina del Ballet Argentino (Fundación Julio Bocca), bajo la dirección de Julio Bocca y Ricky Pashkus. Entre 2005 y 2009 integró el Ballet Neoclásico de Buenos Aires, dirigido por Guido De Benedetti, y bailó con la compañía Pies Desnudos (2009–2010), el Ballet Compacto (2007) y en la apertura de ShowMatch (2008), conducido por Marcelo Tinelli.",
    "Como coreógrafa y colaboradora creativa desarrolló una destacada trayectoria. En 2023 cocreó la coreografía de Comunidad para el Ballet Folklórico Nacional, junto a Gustavo Carrizo y Eduardo Virasoro. Fue asistente de coreografía en Club 57 Live (Nickelodeon) y Topa, El Viajero (2019), y colaboró en Waitress (Camarera) junto a Nina Iraolagoitia. Asistió a Analía González en Después del Sol, en el Ballet Contemporáneo del Teatro San Martín (2012), y presentó obra propia en el Ciclo de Jóvenes Coreógrafos (Sub 25) del Centro Cultural Rojas (2009)."
  ],
  "fabrizio-federica": [
    "Una distinguida pareja de tango argentino que representa a una nueva generación de artistas y aporta refinamiento, versatilidad y una presencia escénica cautivante a la escena internacional. Radicados en Buenos Aires, su dupla se define por una fusión natural de precisión técnica, sensibilidad musical y profundidad emocional.",
    "Ambos se formaron en tango argentino, ballet clásico, danza contemporánea, jazz y folklore. Su aprendizaje compartido junto a los maestros Vanesa Villalba y Facundo Piñero moldeó un estilo sofisticado y dinámico, arraigado en la tradición y concebido para las exigencias del escenario contemporáneo.",
    "Se presentaron en algunas de las casas de tango más prestigiosas de Buenos Aires, como Rojo Tango en el Faena Hotel, Café de los Angelitos y Señor Tango, en producciones de alto nivel para públicos internacionales.",
    "En lo individual, Federica participó en espectáculos como El Show Debe Continuar, dirigido por Hernán Piquín, y en producciones de gran escala como Servian El Circo y Circo Rodas; su experiencia como bailarina, actriz y modelo le aporta una fuerte presencia teatral. Fabrizio se destacó en el circuito competitivo del tango y llegó a las semifinales del Mundial de Tango de Buenos Aires en 2025. Ambos fueron elegidos por Luizaga Brothers para formar parte de La Muerte del Ángel.",
    "Juntos encarnan una visión refinada y contemporánea del tango escenario, que combina elegancia, fuerza y claridad expresiva."
  ],
  "sofia-heber": [
    "Su base artística se apoya en una sólida formación técnica. Sofía perfeccionó su técnica clásica en el ballet del Teatro Colón, y Heber se formó en danzas folklóricas tradicionales y malambo, como integrante del grupo Los Bombos Supay. Esa doble raíz aporta a la pareja un refinado sentido de la línea, el control y la musicalidad.",
    "En 2013 fueron elegidos como pareja protagonista de Buenos Ayres Wine en Corea del Sur, experiencia que los llevó a vivir un año en el exterior difundiendo la esencia del tango argentino. En 2014 se sumaron a El Sonido de mi Tierra, dirigido por Luis Pereyra, en una gira de cinco meses por Europa.",
    "Su excelencia técnica y su madurez artística les valieron el reconocimiento como finalistas del certamen Pelando Variación (2017–2018), donde obtuvieron el tercer y el segundo puesto.",
    "En 2019 se incorporaron a la compañía de Marcos Ayala, con la que realizaron dos temporadas consecutivas a bordo de los cruceros Silja Symphony y Serenade, y luego giras por los países bálticos, Rusia y China.",
    "A lo largo de su carrera se presentaron en Rusia, Alemania, Austria, Suiza, Suecia, República Checa, Países Bajos, Finlandia y Catar, en escenarios como el Teatro Mariinski de San Petersburgo y el Teatro Coliseo de Buenos Aires.",
    "Desde 2023 forman parte de la reconocida cena show Michelangelo Tango. Recientemente fueron convocados por Luizaga Brothers para integrar su nueva producción."
  ],
  "matias-rubino": [
    "Inició sus estudios en el Conservatorio Superior de Música Manuel de Falla. Luego se adentró en el tango con el maestro Rodolfo Mederos, con quien estudió bandoneón, arreglo y orquestación, y más tarde tomó clases con Julio Pane y Carlos Lazzari.",
    "Se presentó en casas de tango de renombre como El Viejo Almacén, donde fue director musical, Legendario Buenos Aires, Hotel Faena, Piazzolla Tango, Esquina Carlos Gardel, Esquina Homero Manzi y Señor Tango. En 2006 participó en El tango y la sombra, junto a Noelia Moncada y Esteban Riera, en el Teatro Maipo.",
    "Integró la Orquesta Típica de Rodolfo Mederos y grupos de tango electrónico como Narcotango, Tanghetto y Otros Aires, con los que realizó giras por Europa y Latinoamérica y grabó varios discos. Con la compañía Tango a Tierra recorrió Sudáfrica en 2007 y ese mismo año se presentó en el New York Tango Festival con Tango Emotion. Entre 2007 y 2010 fue el primer bandoneón del espectáculo de Café de los Angelitos.",
    "En 2009 fue invitado como solista para interpretar los Tres Tangos Sinfónicos de Astor Piazzolla con la Orquesta de la Universidad de Lanús, dirigida por Daniel Bozzani. Desde 2010 participa en diversos ensambles y compañías con giras por Europa, Asia y América.",
    "Dirige su propio Matías Rubino Sexteto, con composiciones propias: en 2016 editó Otros Tiempos (Vinilo Records) y en 2018 Engranaje (Club del Disco). Grabó De tango en tango con Daniel Gómez y formó el dúo Barozzi-Rubino con Darío Barozzi, con el disco Contacto. Participó en Stravaganza Tango en el Teatro Broadway y en Manzi, la vida en orsai en el Teatro Tabarís. En 2017 se sumó a la gira europea de la compañía de Luis Pereyra y Nicole Nau como bandoneonista y director musical, con presentaciones en escenarios como el Folies Bergère de París.",
    "En 2018 fue reconocido como Personalidad Destacada de la Cultura como integrante de Colonizados Tango Son, y su participación en Otros Aires fue declarada de Interés Cultural. En 2019, como solista de la Banda Sinfónica de Buenos Aires, estrenó en el CCK el Concierto para saxofón y bandoneón de Jorge Retamoza, y ese mismo año interpretó la Suite Troileana de Piazzolla junto a la Camerata Argentina de Guitarras, dirigida por Martín Marino. En 2021 editó Lo que vendrá, su segundo disco con Daniel Gómez. Actualmente integra los cuartetos de Jorge Retamoza y de Daniel Melingo."
  ],
  "roberto-minondi": [
    "Nacido en Bernal, provincia de Buenos Aires, Roberto Minondi es un cantor de sólida trayectoria en el tango y la música popular argentina. Comenzó en 2001, cantando en peñas y festivales bonaerenses. Su talento llamó la atención de la Dirección de Cultura de Avellaneda, que lo invitó a integrar su elenco oficial; en esa etapa se presentó en los teatros Colonial y Roma, junto a figuras como Raúl Lavié, Guillermo Fernández, Jairo, Ernesto Baffa y Argentino Luna.",
    "Durante cinco años formó parte del célebre espectáculo de Esquina Carlos Gardel y luego de Solo Tango – The Show, junto a María Graña, en la Argentina y en el exterior. También se presentó con regularidad en el legendario Café Tortoni y en Tango Porteño.",
    "Hoy es cantor de prestigiosas orquestas como Romántica Milonguera, Tango Bardo, la Orquesta Típica Tanturi y la Orquesta Villa Crespo, con las que recorrió Europa, Asia, Estados Unidos y Latinoamérica, en países como Turquía, Brasil, Chile, México, Japón, Australia y Nueva Zelanda.",
    "Colaboró con el Quinteto Gastón Harisquiry, el quinteto de Julián Hermida y la compañía Tango a Tierra, con la que realizó giras entre 2008 y 2012 por Chile, Brasil, Rusia, Ucrania, Hong Kong y Sudáfrica. Participó además en un especial de tango de la TV Pública junto al Chino Laborde.",
    "Se presentó en espacios y festivales emblemáticos como el Centro Cultural Torquato Tasso, el Centro Cultural Borges, Almagro Tango Club, Esquina Homero Manzi y el Festival de Tango de Buenos Aires.",
    "Explora también formatos más íntimos, como el trío de guitarras Minondi, Guiraldes & Cane y el cuarteto Siete y Medio. Su discografía incluye grabaciones con la Orquesta Romántica Milonguera, la Orquesta Típica Tanturi y el Quinteto Gastón Harisquiry, además de Solo Tango – The Show: Live in Russia (2005). En 2006 editó su disco solista Promesas Reflejadas, dirigido por Julián Hermida, y luego Transparencias, con la Orquesta Alto Tango.",
    "Con una voz que reúne elegancia, hondura emocional y un profundo conocimiento de la tradición, es uno de los cantores más versátiles y respetados de su generación."
  ],
  "sergio-milman": [
    "Pianista del Coro Estable de la Escuela J. P. Esnaola y, durante doce años, pianista, arreglador, compositor y director musical de la Orquesta Típica Percal, con la que grabó tres discos, Caseros, Mirá Qué Lío Santo y Ocho Por Ocho, este último declarado de Interés Cultural por la Legislatura porteña. Con ella se presentó en el Festival de Tango de Buenos Aires y en giras nacionales e internacionales, entre ellas el Festival de Artes de Sinaloa, en México.",
    "Fue pianista, arreglador y director musical de la obra Simón, de Isaac Chocrón, dirigida por Marcelo Mangone y presentada en Caracas, Venezuela. Como músico de cámara tocó a dúo con el violinista Sergio Fresco en distintas salas de Santiago de Chile.",
    "Desde 2018 integra el dúo Milman–Fernández con el cantor Oscar Fernández, con quien editó el disco Camino a través del programa de Mecenazgo Cultural de la Ciudad de Buenos Aires. Desde 2021 es pianista de la orquesta La Gran Gobbi y del Contrareloj Tango Quinteto, ambos dirigidos por Matías Rubino, con presentaciones en el Festival de Tango de Buenos Aires y una gira europea en 2025 por Francia, Suiza e Italia.",
    "Se presentó en espacios emblemáticos del tango porteño como Esquina Homero Manzi, Complejo Tango, Aura Tango y Taconeando. En 2022 fundó el trío Flor De Lío junto al contrabajista Lionel Mórtola y la bandoneonista Florencia Amengual. Es pianista, tecladista y bandoneonista de Waysouth, grupo de jazz fusión liderado por Dino Durand; tecladista de la compañía de Germán Cornejo en Tango After Dark, en la Ópera de Dubái (2025), y bandoneonista del dúo Desmanes junto al guitarrista Valentín Ponieman.",
    "Como arreglador y músico de sesión colabora con numerosos cantantes y agrupaciones; entre sus trabajos recientes figuran All That Tango (con Gloria Cepeda, 2015), Desvelo (con María Nicolás, 2019) y Corazón de Oro (con Noelia José, 2021). Desarrolla además una intensa labor docente, con talleres y clases magistrales de interpretación, composición y arreglo de tango, en la Argentina y en el exterior."
  ],
  "luiza-anastasio": [
    "Destacada violinista brasileña. Doctora en Música por la Universidad Federal de Minas Gerais y docente en esa universidad, en la Universidad Nacional de Lanús y en la Universidad de la República (Uruguay).",
    "Activa en la escena del tango porteño junto a maestros como Hugo Rivas, Víctor Lavallén, Ramiro Boero y Daniel Ruggiero.",
    "Se presentó en Brasil, Uruguay, Chile, Bolivia, Cuba, Perú, Francia y Alemania, con escenarios en Berlín, Múnich, Potsdam y París."
  ],
  "patricio-cotella": [
    "Egresado de la Escuela de Música Popular de Avellaneda. Integra desde 2008 la Orquesta Escuela de Tango Emilio Balcarce, donde además es profesor de contrabajo.",
    "Codirige el Sexteto Tangoxmetro en el Teatro Tango Porteño e integra la Orquesta Romántica Milonguera, los tríos y quintetos de Hernán Reinaudo, el cuarteto de la pianista Shino Onaga y el trío del guitarrista Adam Tully.",
    "Grabó y tocó con La Chicana y Daniel Melingo, dentro de la escena del tango canción contemporáneo."
  ],
  "franco-zilocchi": [
    "Nació en Buenos Aires en 1998. Comenzó a tocar la batería desde muy chico y a los siete años inició sus estudios formales de música. Entre los 8 y los 17 años integró la Mega Orquesta del Ministerio de Educación porteño, un programa orquestal para jóvenes músicos que se presentó en el Teatro Colón, la Legislatura de Buenos Aires y el festival internacional Iguazú en Concierto.",
    "En 2022 se graduó en ingeniería de sonido, grabación y producción musical en CEARTEC, y perfeccionó mezcla y masterización en Martillo Estudio. Desde 2019 trabaja como productor musical e ingeniero de mezcla para artistas de funk, pop, hip hop, rock, tango y folklore, y realiza arreglos orquestales y composiciones para clientes internacionales.",
    "Es fundador y codirector de Shadow People, un colectivo de rock orquestal de más de cuarenta músicos y cantantes, con el que editó el disco Oblivion y se presentó en La Trastienda, el Teatro El Cubo y Marquee Buenos Aires; el proyecto superó las 450.000 reproducciones en YouTube y fue reconocido por el INAMU. Fundó y codirige también Zorzal, un proyecto que cruza el rock con la música electrónica y el folklore argentino, y Rudi Club, un quinteto de tango y hip hop formado junto a músicos de la escena tanguera porteña.",
    "Trabajó en producción técnica en Romaphonic Recording Studio, en sesiones de artistas como The Strokes, Pedro Aznar y Nico Sorín. En 2025 fue convocado por Luizaga Brothers para la producción musical y la batería de su espectáculo, aportando un sonido de tango contemporáneo que integra lo acústico y lo electrónico."
  ],
  "ariel-ponce": [
    "Director y diseñador de iluminación nacido en Buenos Aires, con una trayectoria de casi tres décadas en teatro, comedia musical, espectáculos en vivo, conciertos y grandes producciones.",
    "Comenzó su carrera en 1999 en los teatros de la avenida Corrientes, junto al productor Alejandro Romay. Entre sus trabajos se cuentan Stravaganza, Edipo y Yocasta, Camila, Nuestra Historia de Amor, Next to Normal, Pretty Woman, Rent, El Principito, Los días perfectos, con Leonardo Sbaraglia, Cabaret, 3001, con Elena Roger, Soy Rada, Serendipia, Taboo, el circo Ánima y el aclamado espectáculo Tanguera, entre muchos otros.",
    "Su experiencia abarca también grandes artistas y eventos en vivo, como Fabiana Cantilo en La Fiesta del Sol, REBORD en el Movistar Arena y en Lollapalooza, Serendipia en sus versiones teatral y para Netflix, y La Cúpula, de Flavio Mendoza, en 2026.",
    "Concibe la iluminación como un lenguaje artístico y dramatúrgico: con la luz modela el espacio, la atmósfera, el ritmo y la emoción, en diálogo con la dirección, la interpretación, la música y la escenografía. Su carrera fue reconocida con nominaciones a los premios Estrella de Mar, Carlos y ACE, y con dos Premios Hugo."
  ],
  "lucia-ohyama": [
    "Productora escénica con amplia experiencia en el ámbito audiovisual, especializada en proyectos de tango y artes vivas. Su trabajo abarca el desarrollo creativo, la gestión integral de la producción y la proyección internacional de iniciativas culturales que conjugan la tradición con los lenguajes contemporáneos.",
    "Formada como bailarina desde temprana edad, tiene una mirada artística integral que atraviesa cada etapa de la producción y le permite abordar los proyectos con sensibilidad hacia la obra, los intérpretes y la construcción escénica.",
    "Participó en grandes producciones teatrales y proyectos interdisciplinarios como coordinadora de producción, regidora, productora ejecutiva y directora de gira, y su liderazgo y capacidad de resolución le valieron reconocimiento en contextos de alta exigencia.",
    "Es parte fundamental de Luizaga Brothers Production, donde se desempeña como productora ejecutiva y acompaña todo el proceso creativo de los hermanos: supervisa la logística, gestiona la curaduría artística y asegura el desarrollo de las iniciativas internacionales de la compañía.",
    "Es además creadora de Tango en Vivo, una plataforma digital internacional dedicada a la difusión del tango en el mundo, y cocreadora de Duelo Criollo, un innovador juego escénico con identidad propia."
  ]
};

// Only complete supplied translations replace original biographies.
export const artistBiographiesFr: Record<string, string[]> = {
  "leonardo-luizaga": [
    "Chorégraphe, interprète et force créatrice du tango contemporain sur la scène internationale. Il fut le plus jeune danseur jamais invité dans la légendaire compagnie « Tango Pasión », choisi personnellement par Héctor Zaraspe, de la Juilliard School.",
    "Lauréat du prix du Meilleur danseur aux « Premios Carlos ». Artiste principal de la compagnie de Juan Carlos Copes, du « Malbec Tango House » (New York), de « Stravaganza Tango », d'« Estampas Porteñas » et d'Immortal Tango, il a tourné de Tokyo à Londres.",
    "Formé au tango, au ballet, au jazz, à la danse contemporaine et aux sangles aériennes, il maîtrise aussi la création de costumes, la lumière et la dramaturgie. Un bâtisseur de mondes immersifs, d'une intense charge émotionnelle."
  ],
  "edgar-luizaga": [
    "Cocréateur et producteur général de Luizaga Brothers. Formé à l'« Instituto Superior de Arte » du « Teatro Colón » auprès des maîtres Mario Galizzi et Leandro Regueiro, il commence à cinq ans par la gymnastique artistique, avant le ballet puis le tango.",
    "Il débute au « Piazzolla Tango », rejoint la compagnie TangoX2 en Europe et le « Ballet del Mercosur ». Il affine son langage aérien au « Circo Criollo », à l'Académie Fratellini à Paris et à « La Central » à Barcelone.",
    "On l'a vu dans Wild Tango, Break the Tango, America's Got Talent, Spain's Got Talent, au Park Chinois (Londres), au « Lío Ibiza » et dans des productions internationales pour des maisons telles que Marriott, Bulgari et The Moon Wolf Co."
  ],
  "maia-roldan": [
    "Danseuse et chorégraphe argentine, reconnue pour sa polyvalence et sa présence scénique dans la comédie musicale, la télévision et les productions internationales. Au fil de sa carrière, elle a reçu de nombreux prix et bourses, dont une bourse pour le Summer Dance Intensive de la Point Park University (Pittsburgh, États-Unis), attribuée par Gustavo Zajac, et a poursuivi sa formation à la « Fundación Julio Bocca », à Buenos Aires.",
    "Elle a ensuite étudié à New York, au Broadway Dance Center, auprès de la chorégraphe Ashley Dawson. En danse de salon, elle a remporté le premier prix du concours World Promotions Sheraton (2011–2012) avec Alexis Mariani. En 2018, elle a reçu le prix de la Meilleure chorégraphie jeune public aux « Premios Hugo » pour « Aladín… será genial », créé avec Rosario Asencio.",
    "Interprète, elle a mené une riche carrière entre scène, télévision et tournées internationales : les grandes émissions argentines « Susana Giménez » et « ShowMatch – Bailando por un Sueño » (2018–2019), la tournée « Soy » de Lali Espósito (2016–2019), ainsi que « Disney – Una Navidad Inolvidable », mis en scène par Ariel del Mastro, « Pan – El Musical », comme capitaine de danse, et « Stravaganza », mis en scène par Flavio Mendoza.",
    "En danse contemporaine, elle a travaillé avec la compagnie CEM dans « Pies pa' Volar », « Rayuela » et « Estados del Tiempo », et avec « Choque Urbano » au « Teatro Konex » et en tournée nationale (2011–2013).",
    "À l'international, elle a été danseuse et assistante dans Wild Tango, de la compagnie de Germán Cornejo, à Londres (2022–2023), et dans Papillon, dîner-spectacle à Dubaï mis en scène par Layla Kardan. Elle a également tourné en Russie, en Arménie, en Biélorussie, au Kazakhstan, au Kirghizistan, en Moldavie et en Italie avec Freedom, de « Los Potros Malambo », sous la direction d'Isaac et Javier Gardela.",
    "Chorégraphe, elle signe American Idiot – The Musical, « Simona en Vivo » au « Luna Park » et « Aladín… será genial » au « Teatro Gran Rex » ; elle a chorégraphié pour Burnet en Turquie et en Égypte (2021–2022) et collaboré à Wild Tango avec la compagnie de Germán Cornejo. Récemment, elle a participé à « Papá por Siempre », au « Teatro Liceo » (2026)."
  ],
  "camila-ezequiel": [
    "Champions du monde de « Tango Escenario » et membres du jury des championnats du monde et d'Europe de tango. Ils ont fait partie des compagnies Tango Legends, « Tanguera », Tango Fire, Break the Tango et Tango After Dark (Peacock Theatre, Londres).",
    "Ils se sont produits dans les plus prestigieuses maisons de tango de Buenos Aires, comme le « Café de los Angelitos », « Tango Porteño » et le « Piazzolla Tango », et ont joué dans le film « Un Tango Más », aux côtés de María Nieves et Juan Carlos Copes.",
    "Ils font partie de l'équipe chorégraphique de La Muerte del Ángel, la nouvelle production de Luizaga Brothers."
  ],
  "evangelina-nelson": [
    "Vice-champions du monde de « Tango Escenario », reconnus internationalement pour leur art et leur présence scénique. Leur danse jette des ponts entre le tango traditionnel et les influences contemporaines et folkloriques.",
    "Ils ont participé à « Michelangelo Tango Show », « Madero Tango Iguazú », « El Viejo Almacén », Tango Dynasty et Tango 01, et ont tourné à l'international avec « Malevo » et le CRXCE Ballet.",
    "En 2025, Luizaga Brothers les a invités à rejoindre leur nouvelle production."
  ],
  "soledad-mangia": [
    "Chorégraphe et danseuse argentine, championne du prestigieux « Festival Nacional de Cosquín », reconnue pour l'excellence de son folklore argentin et sa grande polyvalence. Partenaire de Julio Bocca, elle a ainsi affirmé son nom sur la scène internationale.",
    "Sélectionnée pour PROTÉGÉS III – International Ballet Academy Festival, à Washington, elle s'y est formée et produite aux côtés d'artistes de compagnies de renommée mondiale comme le Ballet du Bolchoï, le Tokyo Ballet et le Royal Danish Ballet.",
    "Elle a acquis une solide base classique au « Ballet de San Martín », à Buenos Aires, puis a poursuivi ses études à la Point Park University de Pittsburgh (États-Unis), sous la direction de Susan Stowe, en ballet classique, danse moderne, jazz et claquettes. Elle a complété sa formation à New York au sein de la Jennifer Muller Company, auprès de sa fondatrice.",
    "En 2018, elle rejoint la tournée « Tango Seducción », dirigée par Gustavo Russo, et danse avec le « Ballet Folklórico Nacional » aux festivals de Cosquín et du chamamé, à Corrientes. La même année, elle participe à « ARGENTUM » pour le sommet du G20, mis en scène par Ricky Pashkus, et accompagne Julio Bocca comme danseuse. Elle a également dansé dans « Un Instante », de la « Compañía en Movimiento » (C.E.M.), dirigée par Analía González, fait partie de « Choque Urbano » (2011) et participé à des productions emblématiques comme la réouverture du « Teatro Colón », mise en scène par Carlos Veiga.",
    "Danseuse du « Ballet Argentino » (« Fundación Julio Bocca »), sous la direction de Julio Bocca et Ricky Pashkus, elle a été membre du « Ballet Neoclásico de Buenos Aires » de 2005 à 2009, dirigé par Guido De Benedetti, et a dansé avec la compagnie « Pies Desnudos » (2009–2010), le « Ballet Compacto » (2007) et dans l'ouverture de « ShowMatch » (2008), présenté par Marcelo Tinelli.",
    "Chorégraphe et collaboratrice artistique, elle a cosigné en 2023 la chorégraphie de « Comunidad » pour le « Ballet Folklórico Nacional », avec Gustavo Carrizo et Eduardo Virasoro. Elle a été assistante chorégraphe sur Club 57 Live (Nickelodeon) et « Topa, El Viajero » (2019), a collaboré à Waitress avec Nina Iraolagoitia, assisté Analía González pour « Después del Sol » au Ballet contemporain du « Teatro San Martín » (2012), et présenté sa propre pièce au cycle des Jeunes chorégraphes (moins de 25 ans) du « Centro Cultural Rojas » (2009)."
  ],
  "fabrizio-federica": [
    "Un couple de tango argentin distingué, représentant d'une nouvelle génération d'artistes qui apporte raffinement, polyvalence et une présence scénique saisissante à la scène internationale. Établis à Buenos Aires, ils allient avec naturel précision technique, sensibilité musicale et profondeur émotionnelle.",
    "Tous deux formés au tango argentin, au ballet classique, à la danse contemporaine, au jazz et au folklore, ils ont travaillé auprès des maîtres Vanesa Villalba et Facundo Piñero, qui ont façonné un style sophistiqué et dynamique, ancré dans la tradition et pensé pour les exigences de la scène contemporaine.",
    "Ils se sont produits dans quelques-unes des plus prestigieuses maisons de tango de Buenos Aires, comme « Rojo Tango » au Faena Hotel, le « Café de los Angelitos » et « Señor Tango », dans des productions de haut niveau destinées à un public international.",
    "Individuellement, Federica a joué dans « El Show Debe Continuar », mis en scène par Hernán Piquín, et dans de grandes productions comme « Servian El Circo » et « Circo Rodas » ; son parcours de danseuse, comédienne et mannequin lui confère une forte présence théâtrale. Fabrizio s'est distingué dans le circuit compétitif du tango, atteignant les demi-finales du Championnat du monde de tango de Buenos Aires en 2025. Tous deux ont été choisis par Luizaga Brothers pour La Muerte del Ángel.",
    "Ensemble, ils incarnent une vision raffinée et contemporaine du tango de scène, alliant élégance, force et clarté expressive."
  ],
  "sofia-heber": [
    "Leur art repose sur une solide formation technique. Sofía a perfectionné sa technique classique au ballet du « Teatro Colón », et Heber s'est formé aux danses folkloriques traditionnelles et au malambo, au sein du groupe « Los Bombos Supay ». Cette double racine donne au couple un sens raffiné de la ligne, de la maîtrise et de la musicalité.",
    "En 2013, ils ont été choisis comme couple vedette de Buenos Ayres Wine en Corée du Sud, une expérience qui les a menés à vivre un an à l'étranger pour y transmettre l'essence du tango argentin. En 2014, ils ont rejoint « El Sonido de mi Tierra », dirigé par Luis Pereyra, pour une tournée de cinq mois en Europe.",
    "Leur excellence technique et leur maturité artistique leur ont valu d'être finalistes du concours « Pelando Variación » (2017–2018), où ils ont obtenu la troisième puis la deuxième place.",
    "En 2019, ils ont rejoint la compagnie de Marcos Ayala, avec laquelle ils ont réalisé deux saisons consécutives à bord des navires Silja Symphony et Serenade, puis des tournées dans les pays baltes, en Russie et en Chine.",
    "Ils se sont produits en Russie, en Allemagne, en Autriche, en Suisse, en Suède, en République tchèque, aux Pays-Bas, en Finlande et au Qatar, sur des scènes comme le Théâtre Mariinsky de Saint-Pétersbourg et le « Teatro Coliseo » de Buenos Aires.",
    "Depuis 2023, ils font partie du célèbre dîner-spectacle « Michelangelo Tango ». Récemment, Luizaga Brothers les a invités à rejoindre leur nouvelle production."
  ],
  "matias-rubino": [
    "Il commence ses études au « Conservatorio Superior de Música Manuel de Falla », puis approfondit le tango auprès du maître Rodolfo Mederos, avec qui il étudie le bandonéon, l'arrangement et l'orchestration, avant de suivre l'enseignement de Julio Pane et Carlos Lazzari.",
    "Il s'est produit dans des maisons de tango renommées comme « El Viejo Almacén », dont il a été directeur musical, « Legendario Buenos Aires », l'Hôtel Faena, le « Piazzolla Tango », l'« Esquina Carlos Gardel », l'« Esquina Homero Manzi » et « Señor Tango ». En 2006, il participe à « El tango y la sombra », avec Noelia Moncada et Esteban Riera, au « Teatro Maipo ».",
    "Membre de l'« Orquesta Típica » de Rodolfo Mederos et de formations de tango électronique comme Narcotango, Tanghetto et « Otros Aires », il a tourné en Europe et en Amérique latine et enregistré plusieurs albums. Avec la compagnie « Tango a Tierra », il parcourt l'Afrique du Sud en 2007, puis se produit la même année au New York Tango Festival avec Tango Emotion. De 2007 à 2010, il est premier bandonéon du spectacle du « Café de los Angelitos ».",
    "En 2009, il est invité comme soliste pour interpréter les « Tres Tangos Sinfónicos » d'Astor Piazzolla avec l'Orchestre de l'Université de Lanús, dirigé par Daniel Bozzani. Depuis 2010, il participe à divers ensembles et compagnies en tournée en Europe, en Asie et dans les Amériques.",
    "Il dirige son propre sextuor, le Matías Rubino Sexteto, consacré à ses compositions : « Otros Tiempos » (2016) et « Engranaje » (2018). Il a enregistré « De tango en tango » avec Daniel Gómez et formé le duo Barozzi-Rubino avec Darío Barozzi, avec l'album « Contacto ». Il a participé à « Stravaganza Tango » au « Teatro Broadway » et à « Manzi, la vida en orsai » au « Teatro Tabarís ». En 2017, il rejoint la tournée européenne de la compagnie de Luis Pereyra et Nicole Nau comme bandonéoniste et directeur musical, avec des représentations dans des salles comme les Folies Bergère à Paris.",
    "En 2018, il est distingué comme Personnalité remarquable de la culture en tant que membre de « Colonizados Tango Son », et sa participation à « Otros Aires » est déclarée d'intérêt culturel. En 2019, soliste de la « Banda Sinfónica de Buenos Aires », il crée au CCK le Concerto pour saxophone et bandonéon de Jorge Retamoza, et interprète la même année la « Suite Troileana » de Piazzolla avec la « Camerata Argentina de Guitarras », dirigée par Martín Marino. En 2021, il publie « Lo que vendrá », son deuxième album avec Daniel Gómez. Il est aujourd'hui membre des quatuors de Jorge Retamoza et de Daniel Melingo."
  ],
  "roberto-minondi": [
    "Né à Bernal, dans la province de Buenos Aires, Roberto Minondi est un chanteur au parcours solide dans le tango et la musique populaire argentine. Il débute en 2001 dans les « peñas » et festivals de la province. Remarqué par la Direction de la culture d'Avellaneda, qui l'invite à rejoindre sa troupe officielle, il se produit aux théâtres Colonial et Roma aux côtés de figures comme Raúl Lavié, Guillermo Fernández, Jairo, Ernesto Baffa et Argentino Luna.",
    "Pendant cinq ans, il fait partie du célèbre spectacle de l'« Esquina Carlos Gardel », puis de Solo Tango – The Show avec María Graña, en Argentine et à l'étranger. Il se produit aussi régulièrement au légendaire « Café Tortoni » et à « Tango Porteño ».",
    "Il est aujourd'hui le chanteur de prestigieux orchestres comme « Romántica Milonguera », « Tango Bardo », l'« Orquesta Típica Tanturi » et l'« Orquesta Villa Crespo », avec lesquels il a parcouru l'Europe, l'Asie, les États-Unis et l'Amérique latine, de la Turquie au Japon, de l'Australie à la Nouvelle-Zélande.",
    "Il a collaboré avec le « Quinteto Gastón Harisquiry », le quintette de Julián Hermida et la compagnie « Tango a Tierra », avec laquelle il a tourné entre 2008 et 2012 au Chili, au Brésil, en Russie, en Ukraine, à Hong Kong et en Afrique du Sud. Il a également participé à une émission spéciale tango de la « TV Pública » aux côtés d'El Chino Laborde.",
    "Il s'est produit dans des lieux et festivals emblématiques comme le « Centro Cultural Torquato Tasso », le « Centro Cultural Borges », l'« Almagro Tango Club », l'« Esquina Homero Manzi » et le Festival de tango de Buenos Aires.",
    "Il explore aussi des formats plus intimes, avec le trio de guitares Minondi, Guiraldes & Cane et le quatuor « Siete y Medio ». Sa discographie comprend des enregistrements avec l'« Orquesta Romántica Milonguera », l'« Orquesta Típica Tanturi » et le « Quinteto Gastón Harisquiry », ainsi que Solo Tango – The Show: Live in Russia (2005). En 2006, il publie son album solo « Promesas Reflejadas », dirigé par Julián Hermida, puis « Transparencias » avec l'« Orquesta Alto Tango ».",
    "D'une voix qui unit élégance, profondeur émotionnelle et connaissance intime de la tradition, il s'impose comme l'un des chanteurs les plus polyvalents et respectés de sa génération."
  ],
  "sergio-milman": [
    "Pianiste du chœur de l'École J. P. Esnaola et, pendant douze ans, pianiste, arrangeur, compositeur et directeur musical de l'« Orquesta Típica Percal », avec laquelle il a enregistré trois albums, « Caseros », « Mirá Qué Lío Santo » et « Ocho Por Ocho », ce dernier déclaré d'intérêt culturel par la Législature de Buenos Aires. Avec elle, il s'est produit au Festival de tango de Buenos Aires et en tournée, notamment au « Festival de Artes de Sinaloa », au Mexique.",
    "Il a été pianiste, arrangeur et directeur musical de la pièce « Simón », d'Isaac Chocrón, mise en scène par Marcelo Mangone et présentée à Caracas, au Venezuela. En musique de chambre, il a joué en duo avec le violoniste Sergio Fresco dans plusieurs salles de Santiago du Chili.",
    "Depuis 2018, il forme le duo Milman–Fernández avec le chanteur Oscar Fernández, avec qui il a publié l'album « Camino ». Depuis 2021, il est pianiste de l'orchestre « La Gran Gobbi » et du « Contrareloj Tango Quinteto », tous deux dirigés par Matías Rubino, avec des concerts au Festival de tango de Buenos Aires et une tournée européenne en 2025 en France, en Suisse et en Italie.",
    "Il s'est produit dans des lieux emblématiques du tango de Buenos Aires comme l'« Esquina Homero Manzi », « Complejo Tango », « Aura Tango » et « Taconeando ». En 2022, il fonde le trio « Flor De Lío » avec le contrebassiste Lionel Mórtola et la bandonéoniste Florencia Amengual. Il est pianiste, claviériste et bandonéoniste de Waysouth, groupe de jazz fusion mené par Dino Durand, claviériste de la compagnie de Germán Cornejo pour Tango After Dark à l'Opéra de Dubaï (2025), et bandonéoniste du duo « Desmanes » avec le guitariste Valentín Ponieman.",
    "Arrangeur et musicien de studio, il collabore avec de nombreux chanteurs et ensembles de tango ; parmi ses travaux récents figurent All That Tango (avec Gloria Cepeda, 2015), « Desvelo » (avec María Nicolás, 2019) et « Corazón de Oro » (avec Noelia José, 2021). Il mène en parallèle une intense activité pédagogique, avec des ateliers et masterclasses d'interprétation, de composition et d'arrangement de tango, en Argentine et à l'étranger."
  ],
  "luiza-anastasio": [
    "Violoniste brésilienne de premier plan. Docteure en musique de l'Université fédérale du Minas Gerais, elle a enseigné dans cette université, à l'Université nationale de Lanús et à l'Université de la République (Uruguay).",
    "Active sur la scène du tango de Buenos Aires aux côtés de maîtres comme Hugo Rivas, Víctor Lavallén, Ramiro Boero et Daniel Ruggiero.",
    "Elle s'est produite au Brésil, en Uruguay, au Chili, en Bolivie, à Cuba, au Pérou, en France et en Allemagne, notamment à Berlin, Munich, Potsdam et Paris."
  ],
  "patricio-cotella": [
    "Diplômé de l'« Escuela de Música Popular de Avellaneda ». Membre depuis 2008 de l'« Orquesta Escuela de Tango Emilio Balcarce », où il enseigne également la contrebasse.",
    "Il codirige le « Sexteto Tangoxmetro » au « Teatro Tango Porteño » et joue au sein de l'« Orquesta Romántica Milonguera », des trios et quintettes de Hernán Reinaudo, du quatuor de la pianiste Shino Onaga et du trio du guitariste Adam Tully.",
    "Il a enregistré et joué avec « La Chicana » et Daniel Melingo, figures du tango-chanson contemporain."
  ],
  "franco-zilocchi": [
    "Né à Buenos Aires en 1998, il commence la batterie très jeune et entreprend des études musicales dès sept ans. De 8 à 17 ans, il joue au sein de la « Mega Orquesta » du ministère de l'Éducation de Buenos Aires, un programme orchestral pour jeunes musiciens qui s'est produit au « Teatro Colón », à la Législature de Buenos Aires et au festival international « Iguazú en Concierto ».",
    "Diplômé en 2022 en ingénierie du son, enregistrement et production musicale (CEARTEC), il se perfectionne en mixage et mastering au « Martillo Estudio ». Depuis 2019, il est producteur et ingénieur de mixage pour des artistes de funk, pop, hip-hop, rock, tango et folklore, et signe des arrangements orchestraux et des compositions pour des clients internationaux.",
    "Fondateur et codirecteur de Shadow People, un collectif de rock orchestral réunissant plus de quarante musiciens et chanteurs, il a publié l'album Oblivion et s'est produit à « La Trastienda », au « Teatro El Cubo » et au Marquee Buenos Aires ; le projet dépasse les 450 000 vues sur YouTube et a été distingué par l'INAMU. Il a également fondé et codirige « Zorzal », projet mêlant rock, musique électronique et folklore argentin, et Rudi Club, un quintette tango–hip-hop formé avec des musiciens de la scène tango de Buenos Aires.",
    "Il a travaillé en production technique au Romaphonic Recording Studio, sur des sessions d'artistes comme The Strokes, Pedro Aznar et Nico Sorín. En 2025, Luizaga Brothers l'invite à assurer la production musicale et la batterie de leur spectacle, pour un son de tango contemporain mêlant acoustique et électronique."
  ],
  "ariel-ponce": [
    "Directeur et concepteur lumière né à Buenos Aires, fort de près de trente ans de carrière dans le théâtre, la comédie musicale, le spectacle vivant, les concerts et les grandes productions.",
    "Il débute en 1999 dans les théâtres de l'« Avenida Corrientes », aux côtés du producteur Alejandro Romay. Parmi ses créations : « Stravaganza », « Edipo y Yocasta », « Camila, Nuestra Historia de Amor », Next to Normal, Pretty Woman, Rent, « El Principito », « Los días perfectos » avec Leonardo Sbaraglia, Cabaret, « 3001 » avec Elena Roger, « Soy Rada », « Serendipia », Taboo, le cirque « Ánima » et le spectacle acclamé « Tanguera », entre beaucoup d'autres.",
    "Son expérience s'étend aux grands artistes et événements live : Fabiana Cantilo pour « La Fiesta del Sol », REBORD au Movistar Arena et à Lollapalooza, « Serendipia » dans ses versions scénique et Netflix, et « La Cúpula » de Flavio Mendoza en 2026.",
    "Il conçoit la lumière comme un langage artistique et dramaturgique : elle sculpte l'espace, l'atmosphère, le rythme et l'émotion, en dialogue avec la mise en scène, l'interprétation, la musique et la scénographie. Son parcours a été salué par des nominations aux prix « Estrella de Mar », « Carlos » et ACE, ainsi que par deux « Premios Hugo »."
  ],
  "lucia-ohyama": [
    "Productrice de spectacle forte d'une large expérience dans l'audiovisuel, spécialisée dans les projets de tango et d'arts vivants. Son travail couvre le développement artistique, la gestion intégrale de production et le rayonnement international de projets culturels qui conjuguent tradition et langages contemporains.",
    "Danseuse de formation depuis l'enfance, elle porte un regard artistique global sur chaque étape de la production, avec une sensibilité particulière pour l'œuvre, les interprètes et la construction scénique.",
    "Elle a pris part à de grandes productions théâtrales et à des projets pluridisciplinaires en tant que coordinatrice de production, régisseuse, productrice exécutive et directrice de tournée ; son leadership et sa capacité à résoudre les difficultés sont reconnus dans les contextes les plus exigeants.",
    "Pilier de Luizaga Brothers Production, elle en est la productrice exécutive et accompagne l'ensemble du processus créatif des deux frères : logistique de production, curation artistique et développement des projets internationaux de la compagnie.",
    "Elle est aussi la créatrice de « Tango en Vivo », plateforme numérique internationale consacrée au rayonnement du tango dans le monde, et la cocréatrice de « Duelo Criollo », un jeu scénique innovant à l'identité singulière."
  ]
};
