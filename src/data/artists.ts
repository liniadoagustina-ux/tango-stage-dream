import { images } from "@/data/images";
import p_matias_rubino from "@/assets/webp/matias-rubino-portrait.webp.asset.json";
import p_pablo_cotella from "@/assets/webp/pablo-cotella-portrait.webp.asset.json";
import p_edgar_luizaga from "@/assets/webp/edgar-luizaga-portrait.webp.asset.json";
import p_evangelina_martinez from "@/assets/webp/evangelina-martinez-portrait.webp.asset.json";
import p_federica_tobares from "@/assets/webp/federica-tobares-portrait.webp.asset.json";
import p_francisco_munoz from "@/assets/webp/francisco-munoz-portrait.webp.asset.json";
import p_heber_mallorquin from "@/assets/webp/heber-mallorquin-portrait.webp.asset.json";
import p_leonardo_luizaga from "@/assets/webp/leonardo-luizaga-portrait.webp.asset.json";
import p_maia_roldan from "@/assets/webp/maia-roldan-portrait.webp.asset.json";
import p_nelson_leiva from "@/assets/webp/nelson-leiva-portrait.webp.asset.json";
import p_sofia_orlando from "@/assets/webp/sofia-orlando-portrait.webp.asset.json";
import p_soledad_mangia from "@/assets/webp/soledad-mangia-portrait.webp.asset.json";
import arielPonceA from "@/assets/webp/ariel-ponce.webp.asset.json";
import edgarA from "@/assets/webp/edgar.webp.asset.json";
const edgar = edgarA.url;
import leonardoA from "@/assets/webp/leonardo-new.webp.asset.json";
import maiaA from "@/assets/webp/maia-roldan-new.webp.asset.json";
import luizaA from "@/assets/webp/luiza-anastasio-new.webp.asset.json";
const luiza = luizaA.url;
import camilaEzequielA from "@/assets/webp/camila-ezequiel-new.webp.asset.json";
import patricioA from "@/assets/webp/patricio-cotella-new.webp.asset.json";
const patricio = patricioA.url;
import evangelinaNelsonA from "@/assets/webp/evangelina-nelson-new.webp.asset.json";
import fabrizioFedericaA from "@/assets/webp/fabrizio-federica-new.webp.asset.json";
import sofiaHeberA from "@/assets/webp/sofia-heber-new.webp.asset.json";
import soledadMangiaA from "@/assets/webp/soledad-mangia-new.webp.asset.json";
import matiasRubinoA from "@/assets/webp/matias-rubino-new.webp.asset.json";
const matiasRubino = matiasRubinoA.url;
import sergioMilmanA from "@/assets/webp/sergio-milman-new.webp.asset.json";
const sergioMilman = sergioMilmanA.url;
import robertoMinondiA from "@/assets/webp/roberto-minondi-new.webp.asset.json";
const robertoMinondi = robertoMinondiA.url;
import francoZilocchiA from "@/assets/webp/franco-zilocchi-new.webp.asset.json";
const francoZilocchi = francoZilocchiA.url;
import luciaOhyamaA from "@/assets/webp/lucia-ohyama-new.webp.asset.json";
const luciaOhyama = luciaOhyamaA.url;
const leonardo = leonardoA.url;
const maia = maiaA.url;
const camilaEzequiel = camilaEzequielA.url;
const evangelinaNelson = evangelinaNelsonA.url;
const fabrizioFederica = fabrizioFedericaA.url;
const sofiaHeber = sofiaHeberA.url;
const soledadMangia = soledadMangiaA.url;

const arielPonce = arielPonceA.url;

export type Artist = {
  slug: string;
  name: string;
  role: string;
  discipline: string;
  character?: string;
  image: string;
  imageWidth?: number;
  imageHeight?: number;
  portraits?: string[];
  poetic: string;
  bio: string[];
};

export const artists: Artist[] = [
  {
    slug: "leonardo-luizaga",
    name: "Leonardo Luizaga",
    role: "Co-Founder, Artistic Director",
    discipline: "Tango, Choreography, Direction",
    character: "Gabino",
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
    role: "Co-Founder, Artistic Director",
    discipline: "Tango, Aerial Performance, Direction",
    character: "Charon",
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
    discipline: "Tango Escenario, World Champions",
    character: "Co-choreographers",
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
    discipline: "Tango, Folklore",
    character: "Griseta & Osvaldo",
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
    slug: "fabrizio-federica",
    name: "Fabrizio Muñoz & Federica Tobares",
    role: "Principal Dancers",
    discipline: "Tango Escenario",
    image: fabrizioFederica,
    poetic:
      "A new generation of tango — refinement, versatility and a presence that belongs to the international stage.",
    bio: [
      "A distinguished Argentine tango couple representing a new generation of artists who bring refinement, versatility, and a compelling stage presence to the international tango scene. Based in Buenos Aires, their partnership is defined by a seamless fusion of technical precision, musical sensitivity, and emotional depth.",
      "With a strong foundation across multiple disciplines, both artists have trained extensively in Argentine tango, classical ballet, contemporary dance, jazz, and folklore. Their shared formation under renowned tango masters Vanesa Villalba and Facundo Piñero has shaped a sophisticated and dynamic style, rooted in tradition yet designed for the demands of contemporary stage performance.",
      "They have performed in some of Buenos Aires' most prestigious tango venues, including Rojo Tango Show at the Faena Hotel, Café de los Angelitos, and Señor Tango, where they have been featured in high-level productions for international audiences. These experiences have refined their stagecraft and strengthened their ability to connect with diverse audiences through powerful and nuanced performances.",
      "Individually, their careers span major productions and multidisciplinary projects. Federica has performed in acclaimed shows such as El Show Debe Continuar, directed by Hernán Piquín, as well as in large-scale productions including Servian El Circo and Circo Rodas. Her background as a dancer, actress, and model contributes to a strong theatrical presence and versatility on stage. Fabrizio has distinguished himself within the competitive tango circuit, reaching the semi-finals of the Buenos Aires Tango World Championship in 2025, demonstrating both technical excellence and artistic maturity. Both were chosen by Luizaga Brothers to be part of the tango spectacle La Muerte del Ángel.",
      "Together, they embody a refined and contemporary vision of tango escénico, combining elegance, strength, and expressive clarity. Their partnership is marked by precision, connection, and a shared artistic identity that elevates each performance into a compelling narrative experience.",
    ],
  },
  {
    slug: "sofia-heber",
    name: "Sofía Orlando & Heber Mallorquín",
    role: "Principal Dancers",
    discipline: "Tango, Folklore",
    image: sofiaHeber,
    poetic:
      "Classical line meets the dust of the Malambo — a couple who carry tradition into every stage they touch.",
    bio: [
      "Their artistic foundation is rooted in strong technical training. Sofía mastered her classical technique through ballet studies at the prestigious Teatro Colón, and Heber trained in traditional folk dances and Malambo, performing as a member of the Malambo fantasy group Los Bombos Supay — enriching the couple's aesthetic with a refined sense of line, control, and musicality.",
      "In 2013, they were selected as the leading couple for Buenos Ayres Wine in South Korea, an experience that led them to reside abroad for a year, sharing the essence of Argentine tango with new audiences. In 2014, they joined the prestigious production El Sonido de mi Tierra, directed by Luis Pereyra, touring Europe for five months and further consolidating their international presence.",
      "Their technical excellence and artistic maturity earned them recognition as finalists in the renowned Pelando Variación competition (2017–2018), where they achieved 3rd and 2nd place, affirming their position among the most distinguished tango couples of their generation.",
      "In 2019, they joined the company of Marcos Ayala, performing in high-level productions and completing two consecutive seasons aboard the cruise ships Silja Symphony and Serenade. They subsequently toured internationally across the Baltic countries, Russia, and China, expanding their global reach.",
      "Throughout their career, they have performed in countries including Russia, Germany, Austria, Switzerland, Sweden, the Czech Republic, the Netherlands, Finland, and Qatar. Their performances have graced prestigious venues such as the Mariinsky Theatre in St Petersburg and the Coliseo Theatre in Buenos Aires.",
      "Since 2023, they have been part of the renowned dinner show Michelangelo Tango, continuing a career defined by elegance, passion, and an unwavering commitment to their art. Most recently, they have been invited by the Luizaga Brothers to join their new production, further affirming their standing on the international stage.",
    ],
  },
  {
    slug: "maia-roldan",
    name: "Maia Roldán",
    role: "Dancer, Choreographer",
    discipline: "Contemporary, Musical Theatre, Tango",
    image: maia,
    poetic:
      "A versatile body that speaks tango, theatre and contemporary in the same breath.",
    bio: [
      "Argentine dancer and choreographer, widely recognised for her versatility and strong presence across musical theatre, television, and international productions. She has received numerous awards and scholarships throughout her career, including a scholarship to the Summer Dance Intensive at Point Park University (Pittsburgh, USA), awarded by Gustavo Zajac, and further training through Fundación Julio Bocca in Buenos Aires.",
      "She also continued her studies in New York at Broadway Dance Center under the International Student Visa Program, training with renowned choreographer Ashley Dawson. In ballroom dance, she achieved First Prize at the World Promotions Sheraton competition (2011–2012) alongside Alexis Mariani. In 2018, she was awarded a Premios Hugo for Best Children's Choreography for Aladín... será genial, co-created with Rosario Asencio.",
      "As a performer, Maia has built an extensive career across stage, television, and international tours. She has worked in major Argentine television productions such as Susana Giménez and ShowMatch – Bailando por un Sueño (2018–2019). She toured nationally and internationally with Lali Espósito in the Soy Tour (2016–2019), and performed in leading stage productions including Disney – Una Navidad Inolvidable, directed by Ariel del Mastro; Pan – The Musical (Dance Captain); and Stravaganza, directed by Flavio Mendoza.",
      "Her contemporary dance background includes work with CEM (Contemporary Dance Company) in productions such as Pies pa' Volar, Rayuela, and Estados del Tiempo, as well as performances with Choque Urbano at Teatro Konex and on national tour (2011–2013).",
      "Internationally, she has performed as a dancer and assistant in Wild Tango with the Germán Cornejo Company in London (2022–2023), and in Papillon, a dinner show in Dubai directed by Layla Kardan. She has also toured extensively with Freedom by Los Potros Malambo, performing across Russia, Armenia, Belarus, Kazakhstan, Kyrgyzstan, Moldova, and Italy under the direction of Isaac & Javier Gardela.",
      "Maia has established herself as a prominent choreographer. Her work includes American Idiot – The Musical, Simona en Vivo at Luna Park Stadium, and Aladín... será genial at Teatro Gran Rex. She has also choreographed internationally with Burnet (Turkey and Egypt, 2021–2022) and contributed to Wild Tango with the Germán Cornejo Company. More recently, she has been involved in Papá por Siempre at Teatro Liceo (2026).",
    ],
  },
  {
    slug: "soledad-mangia",
    name: "Soledad Mangia",
    role: "Dancer, Choreographer",
    discipline: "Folklore, Classical, Contemporary",
    image: soledadMangia,
    poetic:
      "A champion of Cosquín whose body crosses ballet, folklore and the modern stage with the same gravity.",
    bio: [
      "Argentine choreographer and dancer. Champion of the prestigious National Cosquín Festival, recognised for her excellence in Argentine folklore and her refined versatility across multiple dance disciplines. She became a dance partner of the internationally renowned American Ballet dancer Julio Bocca, further establishing her reputation on the global stage.",
      "She has developed a strong international profile, having been selected to participate in PROTÉGÉS III – International Ballet Academy Festival in Washington, D.C., where she trained and performed alongside artists from world-renowned companies such as the Bolshoi Ballet, Tokyo Ballet, and the Royal Danish Ballet.",
      "Her artistic training includes studies at the Ballet de San Martín in Buenos Aires, where she built a solid classical foundation. She later continued her studies at Point Park University in Pittsburgh (USA), under the direction of Susan Stowe, specialising in classical ballet, modern dance, jazz, and tap. She further expanded her artistic development in New York with the Jennifer Muller Company, working under the guidance of its founder and artistic director, Jennifer Muller.",
      "In 2018, she joined the Tango Seducción Tour, directed by Gustavo Russo, and performed with the National Folkloric Ballet at both the Cosquín Festival and the Chamamé Festival in Corrientes. That same year, she participated in ARGENTUM for the G20 Summit, directed by Ricky Pashkus, and worked as a supporting dancer for Julio Bocca. She also performed in Un Instante with C.E.M (Compañía en Movimiento), under the direction of Analía González. She was a member of Choque Urbano (2011), and took part in landmark productions such as the reopening of Teatro Colón directed by Carlos Veiga.",
      "Dancer of Ballet Argentino (Fundación Julio Bocca), under the direction of Julio Bocca and Ricky Pashkus. From 2005 to 2009, she was a member of Ballet Neoclásico de Buenos Aires, directed by Guido De Benedetti, and also performed with Pies Desnudos Company (2009–2010), Ballet Compacto (2007), and in the opening of ShowMatch (2008), hosted by Marcelo Tinelli.",
      "Soledad has built a distinguished trajectory as a choreographer and creative collaborator. In 2023 she co-choreographed Comunidad for the National Folkloric Ballet, in collaboration with Gustavo Carrizo and Eduardo Virasoro. Her work also includes Assistant Choreographer for Club 57 Live (Nickelodeon) and Topa, El Viajero (2019), as well as contributions to Waitress (Camarera) alongside Nina Iraolagoitia. She assisted Analía González in Después del Sol at the Contemporary Ballet of Teatro San Martín (2012), and presented her own work at the Young Choreographers Cycle (Under 25) at Centro Cultural Rojas (2009).",
    ],
  },
  {
    slug: "matias-rubino",
    name: "Matías Rubino",
    role: "Music Director, Bandoneonist",
    discipline: "Tango Orchestra",
    image: matiasRubino,
    poetic:
      "Bandoneon as compass — he draws orchestras toward the contemporary heart of tango.",
    bio: [
      "Began his studies at the Conservatorio Superior de Música Manuel de Falla. He later delved into tango under the guidance of maestro Rodolfo Mederos, with whom he studied not only bandoneon but also tango arranging and orchestration. Afterwards, he took lessons with Julio Pane and Carlos Lazzari.",
      "He has performed in several renowned tango venues, including El Viejo Almacén (where he served as musical director), Legendario Buenos Aires, Hotel Faena, Piazzolla Tango, Esquina Carlos Gardel, Esquina Homero Manzi, and Señor Tango. In 2006, he took part in the show El tango y la sombra alongside Noelia Moncada and Esteban Riera, staged at Teatro Maipo.",
      "He was a member of Rodolfo Mederos' Orquesta Típica. He also participated in electronic tango groups such as Narcotango, Tanghetto and Otros Aires, with whom he toured across Europe and Latin America and recorded several albums. He joined the company Tango a Tierra, with which he toured South Africa in April 2007. In October of the same year, he performed at the New York Tango Festival with the company Tango Emotion. From April 2007 to April 2010, he was the lead bandoneonist in the show Café de los Angelitos.",
      "In December 2009, he was invited as a soloist to perform Astor Piazzolla's Tres Tangos Sinfónicos with the University of Lanús Orchestra conducted by maestro Daniel Bozzani. Since 2010, he has participated in various tango ensembles and companies, touring throughout Europe, Asia, and the Americas.",
      "He directs his own ensemble, the Matías Rubino Sextet, performing his own compositions. In 2016 he released the sextet's first album, Otros Tiempos (Vinilo Records), followed in 2018 by Engranaje (Club del Disco). He recorded the album De tango en tango with Daniel Gómez (CNR label) and formed the duo Barozzi-Rubino with Darío Barozzi, releasing the album Contacto (PAI label). He took part in the show Stravaganza Tango at Teatro Broadway and in the production Manzi, la vida en orsai at Teatro Tabarís. In January 2017, he joined the European tour of the tango and folklore company of Luis Pereyra and Nicole Nau as bandoneonist and musical director, performing in prestigious venues such as the Folies Bergère in Paris.",
      "In 2018, he was recognised as a Distinguished Personality of Culture as a member of the tango fusion group Colonizados Tango Son, and was also declared of Cultural Interest for his participation in Otros Aires. In 2019, as a soloist with the Buenos Aires Symphonic Band, he premiered Jorge Retamoza's Concerto for Saxophone and Bandoneon at the CCK. That same year, at the same venue, he was invited to perform as soloist in Astor Piazzolla's Suite Troileana alongside the Camerata Argentina de Guitarras conducted by maestro Martín Marino. In 2021, he released his second album with Daniel Gómez, entitled Lo que vendrá. He is currently a member of the quartets of Jorge Retamoza and Daniel Melingo.",
    ],
  },
  {
    slug: "sergio-milman",
    name: "Sergio Milman",
    role: "Pianist, Arranger",
    discipline: "Tango, Composition",
    image: sergioMilman,
    poetic:
      "His piano breathes between the bandoneon and the silence — the architecture under every embrace.",
    bio: [
      "Pianist for the Coro Estable of the J. P. Esnaola School and, for twelve years, pianist, arranger, composer and musical director of the Percal Tango Orchestra. With this ensemble he recorded three albums — Caseros, Mirá Qué Lío Santo and Ocho Por Ocho, the latter declared of Cultural Interest by the Buenos Aires Legislature — and performed at the Buenos Aires Tango Festival and on national and international tours, including the Festival de Artes de Sinaloa in Mexico.",
      "He has also been pianist, arranger and musical director in the theatre production Simón by Isaac Chocrón, directed by Marcelo Mangone, presented at the Festival de Teatro de Occidente and CELARG in Caracas, Venezuela. As a chamber musician, he has performed in duo with violinist Sergio Fresco in various concert halls in Santiago de Chile.",
      "Since 2018, Milman has formed the tango duo Milman–Fernández with singer Oscar Fernández, with whom he released the album Camino under the Buenos Aires City Cultural Sponsorship Programme (Mecenazgo Cultural). Since 2021, he has been pianist with La Gran Gobbi Tango Orchestra directed by Matías Rubino, and pianist of the Contrareloj Tango Quintet, also under Rubino's direction, with performances at the Buenos Aires Tango Festival and a European tour in 2025 in cities of France, Switzerland and Italy.",
      "He has performed in several of Buenos Aires' most emblematic tango venues, such as Esquina Homero Manzi, Complejo Tango, Aura Tango and Taconeando. In 2022, he founded the trio Flor De Lío alongside double bassist Lionel Mórtola and bandoneonist Florencia Amengual, performing his own compositions and arrangements. He is also pianist, keyboardist and bandoneonist in Waysouth, a jazz fusion group led by guitarist and composer Dino Durand, and serves as keyboardist in Germán Cornejo's Dance Company for the show Tango After Dark, scheduled at the Dubai Opera Theatre (UAE) in April 2025. As a bandoneonist, he performs in the duo Desmanes with guitarist Valentín Ponieman.",
      "As an arranger and session musician, he collaborates with numerous tango singers and ensembles. His recent recording and arranging work includes All That Tango (with Gloria Cepeda, 2015), Desvelo (with María Nicolás, 2019), and Corazón de Oro (with Noelia José, 2021).",
      "Alongside his performing career, Sergio Milman maintains an active teaching profile as a piano and music theory instructor, working with students of all ages in Argentina and abroad. He regularly offers specialised workshops and masterclasses in tango performance, composition and arrangement, both in-person and online, reaching international audiences.",
    ],
  },
  {
    slug: "roberto-minondi",
    name: "Roberto Minondi",
    role: "Singer",
    discipline: "Tango, Voice",
    image: robertoMinondi,
    poetic:
      "A voice that holds the elegance of the old guard and the urgency of today — the living spirit of Argentine song.",
    bio: [
      "Born in Bernal, Buenos Aires Province, on 7 November 1981, Roberto Minondi is an accomplished Argentine singer whose career has been deeply rooted in tango and popular music traditions. He began his artistic journey in 2001, performing in folk gatherings and festivals throughout the Province of Buenos Aires. His talent soon drew the attention of the Department of Culture of Avellaneda, which invited him to join its official artistic ensemble. During this period he performed in Teatro Colonial and Teatro Roma, sharing the stage with iconic figures including Raúl Lavié, Guillermo Fernández, Jairo, Ernesto Baffa, and Argentino Luna.",
      "For five years, Minondi was part of the celebrated tango show Esquina Carlos Gardel, and later joined Solo Tango – The Show alongside María Graña, performing both in Argentina and abroad. He has also appeared regularly at the legendary Café Tortoni and Tango Porteño, two of Buenos Aires' most emblematic tango venues.",
      "Roberto Minondi is currently the lead singer of several prestigious tango orchestras, including Romántica Milonguera, Tango Bardo, Orquesta Típica Tanturi, and Orquesta Villa Crespo. With these ensembles, he has toured extensively across Europe, Asia, the United States, and Latin America, performing in countries such as Turkey, Brazil, Chile, Mexico, Japan, Australia, and New Zealand.",
      "He has collaborated with numerous distinguished artists and ensembles, among them the Quinteto Gastón Harisquiry, the Julián Hermida Quintet, and the company Tango a Tierra, with which he toured internationally between 2008 and 2012, performing in Chile, Brazil, Russia, Ukraine, Hong Kong, and South Africa. He was also featured in a tango special for TV Pública alongside El Chino Laborde.",
      "He has appeared at many of Argentina's most prestigious cultural venues and festivals, including the Centro Cultural Torquato Tasso, Centro Cultural Borges, Almagro Tango Club, Esquina Homero Manzi, and the Buenos Aires Tango Festival, where he has performed with the orchestras Típica Tanturi, Barro y Pampa, and Almagro.",
      "He also explores more intimate formats, forming part of the Minondi, Guiraldes & Cane guitar trio and the quartet Siete y Medio, continuing to expand the expressive possibilities of tango and Argentine song. His discography includes albums with Orquesta Romántica Milonguera, Orquesta Típica Tanturi, and Quinteto Gastón Harisquiry, as well as international recordings such as Solo Tango – The Show: Live in Russia (2005, with Octeto Erica Di Salvo). In 2006, he released his solo album Promesas Reflejadas, directed by Julián Hermida, followed by Transparencias with Orquesta Alto Tango.",
      "With a voice that combines elegance, emotional depth, and a profound understanding of the tango tradition, Roberto Minondi has established himself as one of the most versatile and respected singers of his generation — a true representative of the living spirit of Argentine music.",
    ],
  },
  {
    slug: "luiza-anastasio",
    name: "Luiza Anastásio",
    role: "Violinist",
    discipline: "Strings, Tango Music",
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
  {
    slug: "franco-zilocchi",
    name: "Franco Zilocchi",
    role: "Music Producer, Drummer",
    discipline: "Production, Drums, Composition",
    image: francoZilocchi,
    poetic:
      "Where acoustic and electronic collide — he sculpts the contemporary pulse of the Luizaga sound.",
    bio: [
      "Born on May 9, 1998, in Buenos Aires. He began playing drums at an early age and started formal music studies at seven, focusing on classical guitar and general musicianship. Between ages 8 and 17, he performed with the Mega Orquesta of the Buenos Aires Ministry of Education, an orchestral programme for young musicians that appeared at venues such as Teatro Colón, the Buenos Aires Legislature, and the Iguazú en Concierto international festival. From the age of 12, he also pursued private drum studies with various teachers.",
      "In 2022, he earned a degree in sound engineering, recording, and music production from CEARTEC, and further developed his skills in mixing and mastering at Martillo Estudio. Since 2019, he has worked as a music producer and mixing engineer for local artists across genres including funk, pop, hip hop, rock, tango, and folklore, while also providing orchestral arrangements and compositions for international clients.",
      "He is the founder and co-director of Shadow People, an orchestral rock collective involving more than 40 musicians and vocalists, with which he released the studio album Oblivion. The project has performed at venues such as La Trastienda, Teatro El Cubo, and Marquee Buenos Aires, and has accumulated over 450,000 views on YouTube, receiving recognition from INAMU, as well as attention from artists such as Bring Me the Horizon and Motionless in White.",
      "He is also the founder and co-director of Zorzal, an alternative rock/pop project that blends rock with electronic music and Argentine folklore, with four singles released to date and a full-length album in development. In parallel, he founded and co-directs Rudi Club, a tango–hip hop quintet developed alongside musicians from the Buenos Aires tango scene, exploring the integration of traditional tango language with contemporary urban styles.",
      "Across these projects, he works as drummer, composer, producer, and arranger. He has worked in technical production at Romaphonic Recording Studio, contributing to recording sessions for artists such as The Strokes, Pedro Aznar, and Nico Sorín. His background includes orchestral arrangement, MIDI mockup production, synthesis, and electroacoustic composition, applied across both studio and live environments. In parallel, he works as a private music and drum teacher.",
      "In 2025, he was invited by Luizaga Brothers to take on music production and perform as drummer in their live show, contributing to the development of a contemporary tango sound through the integration of acoustic and electronic elements.",
    ],
  },
  {
    slug: "lucia-ohyama",
    name: "Lucía Ohyama",
    role: "Executive Producer",
    discipline: "Production, Curation",
    image: luciaOhyama,
    poetic:
      "The invisible hand behind the scene — turning vision into a living, touring reality.",
    bio: [
      "Accomplished stage producer with extensive experience in the audiovisual field, specialising in tango and live arts projects. Her work revolves around creative development, comprehensive production management, and the international projection of cultural initiatives, blending traditional elements with contemporary artistic languages.",
      "Trained as a dancer from an early age, Lucía possesses a holistic artistic vision that permeates every phase of production. This background enables her to approach projects with sensitivity to the work itself, the performers, and the scenic construction, seamlessly integrating aesthetic principles with efficient management.",
      "Throughout her career she has contributed to large-scale productions in theatres and interdisciplinary projects, taking on key roles such as production coordination, stage management, executive production, and tour management. Her leadership, multidisciplinary team management, and problem-solving abilities have earned her recognition in high-pressure environments, ensuring that projects are delivered with precision and artistic integrity.",
      "Lucía is also an integral part of Luizaga Brothers Productions, where she serves as the executive producer, accompanying the full process of the brothers. In this capacity, she plays a pivotal role in overseeing production logistics, managing artistic curation, and ensuring the smooth execution of the company's various international initiatives.",
      "Currently, in addition to furthering her development as a dancer and producer, Lucía Ohyama is the creator of Tango en Vivo, an international digital platform dedicated to the global dissemination and connection of tango. She is also the co-creator of Duelo Criollo, an innovative scenic game with a unique identity of its own.",
      "Her profile combines expertise in integral production, artistic curation, logistical planning, tour management, and digital content creation, with a strong adaptability to dynamic and evolving environments. Lucía's work seeks to craft innovative scenic experiences that push the boundaries of tango and live arts, while fostering global cultural exchange.",
    ],
  },
  {
    slug: "ariel-ponce",
    name: "Jorge Ariel “El Gato” Ponce",
    role: "Lighting Director & Lighting Designer",
    discipline: "Lighting, Design",
    image: arielPonce,
    poetic:
      "He writes with light — shaping space, atmosphere and emotion on every stage.",
    bio: [
      "Born in Buenos Aires, Argentina, on 10 November 1976, Jorge Ariel Ponce is an Argentine Lighting Director and Lighting Designer with a career spanning nearly three decades across theatre, musical theatre, live entertainment, concerts and large-scale productions.",
      "He began his professional career in April 1999, in the iconic theatres of Buenos Aires’ Avenida Corrientes, working alongside renowned producer Don Alejandro Romay. Since then, he has developed an extensive career as Lighting Director, Lighting Designer and Illuminator, contributing to a wide range of theatrical and entertainment productions.",
      "His credits include Cuando Frank Conoció a Carlitos, Atte. Tus Vecinos, Persistencia (Más allá del Tiempo), Stravaganza, Edipo y Yocasta, Ficcionario, Camila, Nuestra Historia de Amor, Baby Boom en el Paraíso, Next to Normal, Perdon por ser tan puta, Pretty Woman, Rent, El Principito, Los dias perfectos by Leonardo Sbaraglia, Cabaret, 3001 by ElenaRoger, Soy Rada, Serendipia, Taboo, Navidad, Circo “Anima”, and the world acclaimed spectacle “Tanguera”, among many others.",
      "His experience also extends to major artists and live events, including Fabiana Cantilo in La Fiesta del Sol, REBORD at Movistar Arena and Lollapalooza Festival, as well as Serendipia in its theatrical and Netflix versions and La Cúpula of Flavio Mendoza on 2026.",
      "Ponce approaches lighting as an essential artistic and dramaturgical language, using light to shape space, atmosphere, rhythm and emotion while integrating seamlessly with direction, performance, music and scenography.",
      "His nearly 30-year career has earned recognition through nominations for the Estrella de Mar Awards, Carlos Awards and ACE Awards, as well as two Hugo Award .",
      "From the theatres of Avenida Corrientes to major musicals, festivals and arena productions, Ariel “El Gato” Ponce brings to every project a distinctive combination of artistic vision, technical expertise and extensive production experience, making him a versatile creative professional for international theatre and live performance.",
    ],
  },
];

for (const artist of artists) {
  const image = Object.values(images).find((item) => item.url === artist.image);
  artist.imageWidth = image?.width;
  artist.imageHeight = image?.height;
}

// Uniform 4:5 portraits (960x1200) per person, in the order the names appear.
const portraits: Record<string, string[]> = {
  "leonardo-luizaga": [p_leonardo_luizaga.url],
  "edgar-luizaga": [p_edgar_luizaga.url],
  "maia-roldan": [p_maia_roldan.url],
  "soledad-mangia": [p_soledad_mangia.url],
  "evangelina-nelson": [p_evangelina_martinez.url, p_nelson_leiva.url],
  "fabrizio-federica": [p_francisco_munoz.url, p_federica_tobares.url],
  "matias-rubino": [p_matias_rubino.url],
  "patricio-cotella": [p_pablo_cotella.url],
  "sofia-heber": [p_sofia_orlando.url, p_heber_mallorquin.url],
};
for (const artist of artists) artist.portraits = portraits[artist.slug] ?? [artist.image];
