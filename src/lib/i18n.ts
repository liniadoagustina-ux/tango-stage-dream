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
      { title: "Tango", text: "The couple, origin and heart of every scene." },
      { title: "Aerial", text: "Straps, hoop and harness: bodies suspended above the live orchestra." },
      { title: "Theatre", text: "A story told without words, from a neighbourhood celebration to the threshold of the underworld." },
    ],
    showTitle: "Tango – La Muerte del Ángel",
    showText: "The myth of Charon, told through tango, folklore, aerial dance and a live band.",
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

export const companyCopyEs = {"title": "La compañía", "intro": "Coreógrafos, directores artísticos y fundadores de Luizaga Brothers Production, Leonardo y Edgar Luizaga han llevado el tango argentino a escenarios de Europa, Asia y América, con un lenguaje que funde danza, teatro y movimiento aéreo.", "originsHeading": "Los comienzos", "origins": "Nacidos en Zárate, Argentina, Leonardo y Edgar iniciaron su formación a los cinco años, en el seno de una familia de bailarines y gimnastas. Se formaron en el Instituto Superior de Arte del Teatro Colón y cultivaron el tango, el ballet, el flamenco, la danza contemporánea y las artes circenses. Ambos comenzaron su carrera internacional a los diecisiete años.", "approachHeading": "Su mirada", "approach": "Su obra nace del tango argentino, entendido no como una tradición fija, sino como un lenguaje vivo y mutable, que deconstruyen y reconfiguran en diálogo con el circo, el teatro físico y el diseño visual. De ese cruce surge un lenguaje atravesado por la tensión: entre el control y la entrega, entre el suelo y la elevación, entre la intimidad y lo monumental.", "trajectoryHeading": "Trayectoria", "togetherHeading": "Juntos", "regionsHeading": "Sus escenarios", "showCta": "Conocé el show", "showTo": "/es/show", "trajectories": [{"name": "Leonardo Luizaga", "achievements": ["Bailarín más joven de la compañía Tango Pasión, seleccionado por Héctor Zaraspe, de la Juilliard School", "Integrante de la compañía de Juan Carlos Copes", "Primer bailarín en Malbec Tango House, Nueva York", "Premio Carlos al Mejor Bailarín (Argentina)", "Representante de la Argentina en la Expo Yeosu, Corea", "Gira por más de treinta ciudades de Japón junto a la Fundación Min-On", "Primer bailarín en Stravaganza"]}, {"name": "Edgar Luizaga", "achievements": ["Formación profesional en ballet en el Instituto Superior de Arte del Teatro Colón", "Integrante del Ballet del Mercosur y de la compañía TangoX2 en Europa", "Especialización en disciplinas aéreas en L'Académie Fratellini (París) y La Central (Barcelona)", "Giras por teatros y festivales de Europa y Asia con Wild Tango y Break the Tango", "Artista invitado en Park Chinois, Londres", "Presentaciones en America's Got Talent y Spain's Got Talent"]}], "together": ["Creación y coreografía de proyectos en Nueva York, Londres, Shanghái y Dubái para firmas como Marriott International, Bulgari y The Moon Wolf Co.", "Fundación de Luizaga Brothers Production"], "premierePrefix": "Creación de", "premiereSuffix": ", su nueva producción", "regions": [{"name": "Europa", "countries": ["Reino Unido", "España", "Francia", "Italia"]}, {"name": "Asia", "countries": ["Japón", "China", "Corea del Sur", "Emiratos Árabes Unidos"]}, {"name": "América", "countries": ["Argentina", "Estados Unidos"]}]};

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
  premierePrefix: "Conception de «",
  premiereSuffix: " », leur nouveau spectacle",
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
  ]
};
