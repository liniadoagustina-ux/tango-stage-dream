import { artists } from './artists';

const presentation = [
  { heading: 'Direction', members: [
    { slug: 'leonardo-luizaga', role: 'Gabino', responsibilities: 'Direction, choreography, costumes', credit: "Youngest dancer of \"Tango Pasión\"; member of Juan Carlos Copes' company; Best Dancer at the \"Premios Carlos\"." },
    { slug: 'edgar-luizaga', role: 'Charon', responsibilities: 'Direction, aerial choreography', credit: "Trained in ballet at the \"Teatro Colón\" and in aerial arts at L'Académie Fratellini, Paris." },
  ] },
  { heading: 'Dancers', members: [
    { slug: 'maia-roldan', role: 'Amanda', responsibilities: 'Choreography', credit: "Dancer on Lali Espósito's \"Soy\" tour and in Wild Tango, London; Best Children's Choreography at the \"Premios Hugo\"." },
    { slug: 'camila-ezequiel', role: 'Co-choreographers', credit: "World Champions of \"Tango Escenario\" and judges at the World and European Tango Championships.", wide: true },
    { slug: 'evangelina-nelson', role: 'Griseta & Osvaldo', credit: "World Vice-Champions of \"Tango Escenario\", bridging tango and folklore.", wide: true },
    { slug: 'soledad-mangia', role: 'Nocturna', credit: "Champion of the \"Festival Nacional de Cosquín\" and dance partner of Julio Bocca." },
    { slug: 'fabrizio-federica', role: 'Ivone & El Niño Bien', credit: "A new generation of tango, featured at \"Rojo Tango\" (Faena Hotel), \"Café de los Angelitos\" and \"Señor Tango\".", wide: true },
    { slug: 'sofia-heber', role: 'Charro & Esthercita', credit: "Leading couple of Buenos Ayres Wine in South Korea and of the European tour of Luis Pereyra's \"El Sonido de mi Tierra\".", wide: true },
  ] },
  { heading: 'Musicians', members: [
    { slug: 'matias-rubino', role: 'Musical direction, bandoneon', credit: "Member of Rodolfo Mederos' \"Orquesta Típica\" and of Otros Aires, Tanghetto and Narcotango." },
    { slug: 'roberto-minondi', role: 'Voice and guitar (El Tano)', credit: "Five years at \"Esquina Carlos Gardel\"; singer of the \"Orquesta Típica Tanturi\" and \"Romántica Milonguera\"." },
    { slug: 'sergio-milman', role: 'Piano', credit: "For twelve years, pianist, arranger and musical director of the \"Orquesta Típica Percal\"." },
    { slug: 'luiza-anastasio', role: 'Violin', credit: 'Doctorate in Music, Federal University of Minas Gerais, Brazil.' },
    { slug: 'patricio-cotella', role: 'Double bass', credit: "Trained in the \"Orquesta Escuela de Tango\" led by Emilio Balcarce." },
    { slug: 'franco-zilocchi', role: 'Drums, music production', credit: 'Sound engineer and music producer.' },
  ] },
  { heading: 'Creative Team', members: [
    { slug: 'ariel-ponce', role: 'Lighting design', credit: "Nearly three decades in the theatres of \"Avenida Corrientes\", with shows such as \"Stravaganza\", Rent and Pretty Woman." },
    { slug: 'lucia-ohyama', role: 'Production', credit: 'Executive production and tour management.' },
  ] },
];

export const artistGroups = presentation.map(group => ({
  heading: group.heading,
  members: group.members.flatMap(member => {
    const artist = artists.find(artist => artist.slug === member.slug);
    return artist ? [{ ...artist, role: member.role, responsibilities: 'responsibilities' in member ? member.responsibilities : undefined, credit: member.credit, wide: 'wide' in member ? member.wide : false }] : [];
  }),
}));

export type PresentedArtist = (typeof artistGroups)[number]['members'][number];