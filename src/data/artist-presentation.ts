import { artists } from './artists';

const presentation = [
  { heading: 'Direction', members: [
    { slug: 'leonardo-luizaga', role: 'Gabino', responsibilities: 'Direction, choreography, costumes', credit: 'Youngest dancer of Tango Pasión; Juan Carlos Copes company; Best Dancer, Premios Carlos.' },
    { slug: 'edgar-luizaga', role: 'Charon', responsibilities: 'Direction, aerial choreography', credit: "Ballet at the Teatro Colón; aerial training at L'Académie Fratellini, Paris." },
  ] },
  { heading: 'Dancers', members: [
    { slug: 'maia-roldan', role: 'Amanda', responsibilities: 'Choreography', credit: "Lali Espósito's Soy Tour; Wild Tango, London; Premios Hugo for choreography." },
    { slug: 'camila-ezequiel', role: 'Co-choreographers', credit: 'World Champions of Tango Escenario; judges at the World and European Tango Championships.' },
    { slug: 'evangelina-nelson', role: 'Griseta & Osvaldo', credit: 'World Vice-Champions of Tango Escenario.' },
    { slug: 'soledad-mangia', role: 'Nocturna', credit: 'Champion of the Cosquín Festival; dance partner of Julio Bocca.' },
    { slug: 'fabrizio-federica', role: 'Ivone & El Niño Bien', credit: 'Rojo Tango (Faena Hotel), Café de los Angelitos, Señor Tango.' },
    { slug: 'sofia-heber', role: 'Charro & Esthercita', credit: 'Toured Europe with El Sonido de mi Tierra by Luis Pereyra.' },
  ] },
  { heading: 'Musicians', members: [
    { slug: 'matias-rubino', role: 'Musical direction, bandoneon', credit: "Rodolfo Mederos' Orquesta Típica; Otros Aires, Tanghetto, Narcotango." },
    { slug: 'roberto-minondi', role: 'Voice and guitar (El Tano)', credit: 'Esquina Carlos Gardel; lead singer of Orquesta Típica Tanturi.' },
    { slug: 'sergio-milman', role: 'Piano', credit: 'Twelve years as musical director of the Percal Tango Orchestra.' },
    { slug: 'luiza-anastasio', role: 'Violin', credit: 'Doctorate in Music, Federal University of Minas Gerais, Brazil.' },
    { slug: 'patricio-cotella', role: 'Double bass', credit: 'Orquesta Escuela de Tango under Emilio Balcarce.' },
    { slug: 'franco-zilocchi', role: 'Drums, music production', credit: 'Sound engineer and music producer.' },
  ] },
  { heading: 'Creative team', members: [
    { slug: 'ariel-ponce', role: 'Lighting design', credit: 'Nearly 30 years on Avenida Corrientes: Stravaganza, Rent, Pretty Woman.' },
    { slug: 'lucia-ohyama', role: 'Production', credit: 'Executive production and tour management.' },
  ] },
];

export const artistGroups = presentation.map(group => ({
  heading: group.heading,
  members: group.members.flatMap(member => {
    const artist = artists.find(artist => artist.slug === member.slug);
    return artist ? [{ ...artist, role: member.role, responsibilities: 'responsibilities' in member ? member.responsibilities : undefined, credit: member.credit }] : [];
  }),
}));

export type PresentedArtist = (typeof artistGroups)[number]['members'][number];