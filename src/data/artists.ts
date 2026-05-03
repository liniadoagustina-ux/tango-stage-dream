import edgar from "@/assets/artists/edgar.jpg";
import leonardo from "@/assets/artists/leonardo.jpg";
import maia from "@/assets/artists/maia.jpg";
import luiza from "@/assets/artists/luiza.jpg";
import camilaEzequiel from "@/assets/artists/camila-ezequiel.jpg";
import patricio from "@/assets/artists/patricio.jpg";
import evangelinaNelson from "@/assets/artists/evangelina-nelson.jpg";

export type Artist = {
  slug: string;
  name: string;
  role: string;
  discipline: string;
  image: string;
  poetic: string;
  bio: string[];
};

export const artists: Artist[] = [
  {
    slug: "leonardo-luizaga",
    name: "Leonardo Luizaga",
    role: "Co-Founder · Artistic Director",
    discipline: "Tango · Choreography · Direction",
    image: leonardo,
    poetic:
      "He carries the silence of the bandoneón in his bones — a dancer of intensity who turns embrace into architecture.",
    bio: [
      "Argentine choreographer, performer and creative force shaping contemporary tango on the world stage. The youngest dancer ever invited into the legendary Tango Pasión, hand-picked by Juilliard's Héctor Zaraspe.",
      "Awarded Best Dancer at the Premios Carlos. Principal artist of Juan Carlos Copes' company, Malbec Tango House (New York), Stravaganza Tango, Estampas Porteñas and Immortal Tango — touring continents from Tokyo to London.",
      "Trained in tango, ballet, jazz, contemporary and aerial straps; he also masters costume, lighting and dramaturgy. A visionary builder of immersive, emotionally charged worlds.",
    ],
  },
  {
    slug: "edgar-luizaga",
    name: "Edgar Luizaga",
    role: "Co-Founder · Artistic Director",
    discipline: "Tango · Aerial Performance · Direction",
    image: edgar,
    poetic:
      "Half dancer, half flight. He invented a vocabulary where the embrace lifts off the ground.",
    bio: [
      "Co-creator and general producer of Luizaga Brothers. Trained at the Instituto Superior de Arte of the Teatro Colón under Mario Galizzi and Leandro Regueiro. Began at five with artistic gymnastics, then ballet, then tango.",
      "Debuted at Piazzolla Tango, joined Tango X2 in Europe and Ballet del Mercosur. Refined his aerial language at Circo Criollo, L'Académie Fratellini in Paris and La Central in Barcelona.",
      "Featured in Wild Tango, Break the Tango, America's Got Talent, Spain's Got Talent, Park Chinois London, Lío Ibiza and global brand productions for Marriott, Bulgari and The Moon Wolf Co.",
    ],
  },
  {
    slug: "camila-ezequiel",
    name: "Camila Alegre & Ezequiel López",
    role: "Principal Dancers",
    discipline: "Tango Escenario · World Champions",
    image: camilaEzequiel,
    poetic:
      "World Champions of Tango Escenario — a couple who write entire stories in a single embrace.",
    bio: [
      "World Champions of Tango Escenario. Judges of the World and European Tango Championships. Members of Tango Legends, Tanguera, Tango Fire, Break the Tango and Tango After Dark (Peacock Theatre, London).",
      "Featured in Buenos Aires' most prestigious tango houses — Café de los Angelitos, Tango Porteño, Piazzolla Tango — and in the film Un Tango Más alongside María Nieves and Carlos Copes.",
      "Choreographic team of the Luizaga Brothers production La Muerte del Ángel.",
    ],
  },
  {
    slug: "evangelina-nelson",
    name: "Evangelina Martínez & Nelson Leiva",
    role: "Principal Dancers",
    discipline: "Tango · Folklore",
    image: evangelinaNelson,
    poetic:
      "World Vice-Champions whose dance bridges the dust of the pampas with the velvet of the theatre.",
    bio: [
      "World Vice-Champions in Tango Escenario, internationally recognised for their artistry and stage presence. Their work bridges traditional Argentine tango with contemporary and folkloric influences.",
      "Featured in Michelangelo Tango Show, Madero Tango Iguazú, El Viejo Almacén, Tango Dynasty and Tango 01. International touring with Malevo and CRXCE Ballet.",
      "Invited in 2025 by the Luizaga Brothers to join their new stage production.",
    ],
  },
  {
    slug: "maia-roldan",
    name: "Maia Roldán",
    role: "Dancer · Choreographer",
    discipline: "Contemporary · Musical Theatre · Tango",
    image: maia,
    poetic:
      "A versatile body that speaks tango, theatre and contemporary in the same breath.",
    bio: [
      "Argentine dancer and choreographer recognised for her versatility across musical theatre, television and international productions. Trained at Broadway Dance Center (NYC) and Fundación Julio Bocca.",
      "Awarded the Premios Hugo for Best Children's Choreography. Toured the Soy Tour with Lali Espósito; performed in Disney – Una Navidad Inolvidable, Pan – The Musical and Stravaganza.",
      "Internationally featured in Wild Tango (London), Papillon (Dubai) and Freedom by Los Potros Malambo across Russia, Armenia, Belarus, Kazakhstan, Moldova and Italy.",
    ],
  },
  {
    slug: "luiza-anastasio",
    name: "Luiza Anastásio",
    role: "Violinist",
    discipline: "Strings · Tango Music",
    image: luiza,
    poetic:
      "Her violin is a second voice in the room — sometimes whispering, sometimes setting the air on fire.",
    bio: [
      "Distinguished Brazilian violinist. Doctorate in Music from the Federal University of Minas Gerais. Professor at UFMG, the National University of Lanús and the University of the Republic (Uruguay).",
      "Active in the Buenos Aires tango scene with masters Hugo Rivas, Víctor Lavallén, Ramiro Boero and Daniel Ruggiero.",
      "Performed across Brazil, Uruguay, Chile, Bolivia, Cuba, Peru, France and Germany — including Berlin, Munich, Potsdam and Paris.",
    ],
  },
  {
    slug: "patricio-cotella",
    name: "Patricio Cotella",
    role: "Double Bassist",
    discipline: "Tango Orchestra",
    image: patricio,
    poetic:
      "The heartbeat under everything — the slow, dark pulse that lets tango breathe.",
    bio: [
      "Graduate of the Avellaneda School of Popular Music. Member of the Orquesta Escuela de Tango Emilio Balcarce since 2008, where he also serves as Double Bass Professor.",
      "Co-directs Sexteto Tangoxmetro at Teatro Tango Porteño. Member of La Orquesta Romántica Milonguera, the trios and quintets of Hernán Reinaudo, the quartet of pianist Shino Onaga and the trio of guitarist Adam Tully.",
      "Recorded and performed with La Chicana and Daniel Melingo within the contemporary tango canción scene.",
    ],
  },
];
