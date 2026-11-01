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

export const showCopyEs = {"title": "Tango – La Muerte del Ángel", "line": "En Buenos Aires, la muerte baila al ritmo del tango.", "workHeading": "La obra", "work": "Narrada a través del lenguaje expresivo del tango argentino, enriquecido con elementos del folklore y de la danza aérea en straps, aro y arnés, La Muerte del Ángel reimagina el mito de Caronte, el barquero del inframundo, desde la cultura argentina. Una obra de danza teatro que une mito, movimiento y emoción, con orquesta en vivo sobre el escenario.", "storyHeading": "La historia", "story": ["En un barrio de una Buenos Aires atemporal, donde cada esquina respira tango y aire de campo, Gabino y Amanda viven un amor sencillo y duradero, nacido en una milonga y sellado en el abrazo del baile.", "Una tarde, mientras los vecinos celebran el cumpleaños de Gabino, se desata una tormenta y, con ella, llega Caronte. Atraído por el alma de Amanda, emerge del inframundo para reclamarla. Ella no se resiste: con serena entrega, baila con él.", "Solo Nocturna, médium y amiga de Gabino, alcanza a percibir su presencia. Despojado de su amada, Gabino emprende su propio descenso, un recorrido por la nostalgia, la memoria y el desconsuelo del que no logra desprenderse.", "Cuando los límites entre la vida y la muerte comienzan a desdibujarse, el amor se revela más fuerte que la propia mortalidad. Gabino elige seguir a Amanda más allá de este mundo, y Caronte los guía, juntos, hacia una unión que trasciende lo humano."], "charactersHeading": "Personajes", "characters": [{"name": "Gabino", "performer": "Leonardo Luizaga"}, {"name": "Amanda", "performer": "Maia Roldán"}, {"name": "Caronte", "performer": "Edgar Luizaga"}, {"name": "Nocturna", "performer": "Soledad Mangia"}, {"name": "El Tano, el cantor", "performer": "Roberto Minondi"}, {"name": "Griseta y Osvaldo", "performer": "Evangelina Martínez y Nelson Leiva"}, {"name": "Ivone y El Niño Bien", "performer": "Federica Tobares y Fabrizio Muñoz"}, {"name": "Charro y Esthercita", "performer": "Sofía Orlando y Heber Mallorquín"}], "trailerHeading": "Mirá el show", "galleryHeading": "Galería", "creditsHeading": "Créditos", "credits": [{"role": "Idea, dirección y producción general", "name": "Leonardo Luizaga y Edgar Luizaga"}, {"role": "Coreografía", "name": "Leonardo Luizaga, Edgar Luizaga y Maia Roldán"}, {"role": "Coreógrafos asociados", "name": "Camila Alegre y Ezequiel López"}, {"role": "Coreografía aérea", "name": "Edgar Luizaga"}, {"role": "Dirección musical", "name": "Matías Rubino"}, {"role": "Producción musical", "name": "Franco Zilocchi"}, {"role": "Diseño de vestuario", "name": "Leonardo Luizaga, con la asistencia de Silvana Ursula"}, {"role": "Diseño de iluminación", "name": "Jorge Ariel \"El Gato\" Ponce"}, {"role": "Técnicos aéreos", "name": "Flavio Lilli y Darío Diaco"}, {"role": "Asistencia de producción", "name": "Lucía Ohyama"}]};

export const companyCopyEs = {"title": "La compañía", "intro": "Coreógrafos, directores artísticos y fundadores de Luizaga Brothers Production, Leonardo y Edgar Luizaga han llevado el tango argentino a escenarios de Europa, Asia y América, con un lenguaje que funde danza, teatro y movimiento aéreo.", "originsHeading": "Los comienzos", "origins": "Nacidos en Zárate, Argentina, Leonardo y Edgar iniciaron su formación a los cinco años, en el seno de una familia de bailarines y gimnastas. Se formaron en el Instituto Superior de Arte del Teatro Colón y cultivaron el tango, el ballet, el flamenco, la danza contemporánea y las artes circenses. Ambos comenzaron su carrera internacional a los diecisiete años.", "approachHeading": "Su mirada", "approach": "Su obra nace del tango argentino, entendido no como una tradición fija, sino como un lenguaje vivo y mutable, que deconstruyen y reconfiguran en diálogo con el circo, el teatro físico y el diseño visual. De ese cruce surge un lenguaje atravesado por la tensión: entre el control y la entrega, entre el suelo y la elevación, entre la intimidad y lo monumental.", "trajectoryHeading": "Trayectoria", "togetherHeading": "Juntos", "regionsHeading": "Sus escenarios", "showCta": "Conocé el show", "showTo": "/es/show", "trajectories": [{"name": "Leonardo Luizaga", "achievements": ["Bailarín más joven de la compañía Tango Pasión, seleccionado por Héctor Zaraspe, de la Juilliard School", "Integrante de la compañía de Juan Carlos Copes", "Primer bailarín en Malbec Tango House, Nueva York", "Premio Carlos al Mejor Bailarín (Argentina)", "Representante de la Argentina en la Expo Yeosu, Corea", "Gira por más de treinta ciudades de Japón junto a la Fundación Min-On", "Primer bailarín en Stravaganza"]}, {"name": "Edgar Luizaga", "achievements": ["Formación profesional en ballet en el Instituto Superior de Arte del Teatro Colón", "Integrante del Ballet del Mercosur y de la compañía TangoX2 en Europa", "Especialización en disciplinas aéreas en L'Académie Fratellini (París) y La Central (Barcelona)", "Giras por teatros y festivales de Europa y Asia con Wild Tango y Break the Tango", "Artista invitado en Park Chinois, Londres", "Presentaciones en America's Got Talent y Spain's Got Talent"]}], "together": ["Creación y coreografía de proyectos en Nueva York, Londres, Shanghái y Dubái para firmas como Marriott International, Bulgari y The Moon Wolf Co.", "Fundación de Luizaga Brothers Production"], "premierePrefix": "Estreno de", "premiereSuffix": "en 2026", "regions": [{"name": "Europa", "countries": ["Reino Unido", "España", "Francia", "Italia"]}, {"name": "Asia", "countries": ["Japón", "China", "Corea del Sur", "Emiratos Árabes Unidos"]}, {"name": "América", "countries": ["Argentina", "Estados Unidos"]}]};

export const artistsCopyEs: Record<string, { name: string; role: string; responsibilities: string | null; credit: string }> = {"leonardo-luizaga": {"name": "Leonardo Luizaga", "role": "Gabino", "responsibilities": "Dirección general, coreografía y vestuario", "credit": "Bailarín más joven de Tango Pasión, integrante de la compañía de Juan Carlos Copes y Premio Carlos al Mejor Bailarín."}, "edgar-luizaga": {"name": "Edgar Luizaga", "role": "Caronte", "responsibilities": "Dirección general y coreografía aérea", "credit": "Formado en ballet en el Teatro Colón y en disciplinas aéreas en L'Académie Fratellini de París."}, "maia-roldan": {"name": "Maia Roldán", "role": "Amanda", "responsibilities": "Coreografía", "credit": "Bailarina de la gira Soy de Lali Espósito y de Wild Tango en Londres; Premio Hugo a la Mejor Coreografía Infantil."}, "camila-ezequiel": {"name": "Camila Alegre y Ezequiel López", "role": "Coreógrafos asociados", "responsibilities": null, "credit": "Campeones mundiales de Tango Escenario y jurados del Campeonato Mundial y del Campeonato Europeo de Tango."}, "evangelina-nelson": {"name": "Evangelina Martínez y Nelson Leiva", "role": "Griseta y Osvaldo", "responsibilities": null, "credit": "Subcampeones mundiales de Tango Escenario, con una danza que tiende puentes entre el tango y el folklore."}, "soledad-mangia": {"name": "Soledad Mangia", "role": "Nocturna", "responsibilities": null, "credit": "Campeona del Festival Nacional de Cosquín y partenaire de Julio Bocca."}, "fabrizio-federica": {"name": "Fabrizio Muñoz y Federica Tobares", "role": "Ivone y El Niño Bien", "responsibilities": null, "credit": "Una nueva generación del tango, con presentaciones en Rojo Tango (Faena Hotel), Café de los Angelitos y Señor Tango."}, "sofia-heber": {"name": "Sofía Orlando y Heber Mallorquín", "role": "Charro y Esthercita", "responsibilities": null, "credit": "Pareja protagonista de Buenos Ayres Wine en Corea del Sur y de la gira europea de El Sonido de mi Tierra, de Luis Pereyra."}, "matias-rubino": {"name": "Matías Rubino", "role": "Dirección musical y bandoneón", "responsibilities": null, "credit": "Integrante de la Orquesta Típica de Rodolfo Mederos y de Otros Aires, Tanghetto y Narcotango."}, "roberto-minondi": {"name": "Roberto Minondi", "role": "Voz y guitarra (El Tano)", "responsibilities": null, "credit": "Cinco años en Esquina Carlos Gardel; cantor de la Orquesta Típica Tanturi y de Romántica Milonguera."}, "sergio-milman": {"name": "Sergio Milman", "role": "Piano", "responsibilities": null, "credit": "Durante doce años, pianista, arreglador y director musical de la Orquesta Típica Percal."}, "luiza-anastasio": {"name": "Luiza Anastásio", "role": "Violín", "responsibilities": null, "credit": "Doctora en Música por la Universidad Federal de Minas Gerais, Brasil."}, "patricio-cotella": {"name": "Patricio Cotella", "role": "Contrabajo", "responsibilities": null, "credit": "Formado en la Orquesta Escuela de Tango dirigida por Emilio Balcarce."}, "franco-zilocchi": {"name": "Franco Zilocchi", "role": "Batería y producción musical", "responsibilities": null, "credit": "Ingeniero de sonido y productor musical."}, "ariel-ponce": {"name": "Jorge Ariel \"El Gato\" Ponce", "role": "Diseño de iluminación", "responsibilities": null, "credit": "Casi tres décadas en los teatros de la avenida Corrientes, con títulos como Stravaganza, Rent y Pretty Woman."}, "lucia-ohyama": {"name": "Lucía Ohyama", "role": "Producción", "responsibilities": null, "credit": "Producción ejecutiva y dirección de gira."}};

export const artistGroupHeadingsEs: Record<string, string> = {"Direction": "Dirección", "Dancers": "Bailarines", "Musicians": "Músicos", "Creative team": "Equipo creativo"};

export const mediaCopy = { en: { play: "Play the official trailer", trailer: "La Muerte del Ángel — Official Trailer", close: "Close", biography: "Read biography of", enlarge: "Enlarge gallery photo", gallery: "Tango – La Muerte del Ángel gallery, photo", previous: "Previous gallery photo", next: "Next gallery photo", alts: ["A tango couple embraces with the live band behind them", "The ensemble dances beneath pink stage lights", "Two couples perform tango on stage", "A tango couple in a sweeping embrace", "Aerial straps rise above the dancers", "A dancer lifts his partner in the spotlight", "The ensemble in a dramatic blue and pink stage scene", "Two characters wearing hats against a red theatre curtain", "An aerial performer suspended over the ensemble"] }, es: { play: "Reproducir el trailer oficial", trailer: "La Muerte del Ángel — Trailer oficial", close: "Cerrar", biography: "Leer biografía de", enlarge: "Ampliar foto de la galería", gallery: "Galería de Tango – La Muerte del Ángel, foto", previous: "Foto anterior", next: "Foto siguiente", alts: ["Una pareja de tango se abraza frente a la orquesta en vivo", "El elenco baila bajo luces rosadas", "Dos parejas bailan tango sobre el escenario", "Una pareja de tango en un abrazo extendido", "Los straps aéreos se elevan sobre los bailarines", "Un bailarín levanta a su pareja bajo el reflector", "El elenco en una escena con luces azules y rosadas", "Dos personajes con sombrero frente a un telón rojo", "Un artista aéreo suspendido sobre el elenco"] } };
