

interface Experience {
  id: string | number;
  category: 'horseback' | 'hiking' | 'cycletours' | 'others';
  title: string;
  desc: string;
  mainImage: string;
  adventures: Adventure[];
}

interface Adventure {
  id: string | number;
  title: string;
  desc: string;
  imgs: string[];
  tips: string[];
}

let tips: string[] = ["Calzado cerrado", "Pantalones largos", "Botella de agua", "Repelente para mosquitos", "Protector solar"]
let horsebackAdventure: Adventure[] = [
  {
    id: 1,
    title: "Cabalgando a la montaña",
    desc: "Descubre <strong>Los Acuáticos</strong>, una <strong>comunidad de montaña</strong> en <strong>Viñales</strong> conocida por su <strong>fe en las propiedades curativas del agua</strong>. Sumérgete en sus <strong>tradiciones</strong>, comparte con los residentes y disfruta de su <strong>hospitalidad</strong>, mientras admiras las <strong>impresionantes vistas</strong> de los <strong>Valles de Viñales</strong> y <strong>Palmarito</strong>. Una experiencia única que combina <strong>naturaleza, cultura y tradición.</strong>",
    imgs: [],
    tips: tips
  },
  {
    id: 2,
    title: "Un paisaje fascinante",
    desc: "Explora el <strong>Valle del Palmarito</strong>, un paisaje impresionante donde el contraste entre <strong>tierras rojas y vegetación exuberante</strong> refleja la <strong>esencia rural cubana</strong>. Disfruta de <strong>vistas panorámicas</strong>, conoce las <strong>tradiciones campesinas</strong> y aprende sobre el <strong>cultivo del tabaco</strong> de la mano de <strong>agricultores locales.</strong>",
    imgs: [],
    tips: tips
  },
  {
    id: 3,
    title: "El sol poniente",
    desc: "Un <strong>paseo a caballo por Viñales</strong> permite recorrer  <strong>montañas y valles rodeados de naturaleza</strong> viva. En el camino,  <strong>agricultores locales </strong> comparten su trabajo en los <strong>cultivos de tabaco</strong>, mientras se disfruta de un  <strong>puro criollo</strong> y un  <strong>Saoco Viñalero</strong> al <strong>atardecer en el tranquilo Valle del Silencio</strong>. La jornada concluye con un <strong>baño refrescante</strong> en un <strong>lago</strong> cercano, mientras contemplan la <strong>puesta de sol.</strong>",
    imgs: [],
    tips: tips
  },
  {
    id: 4,
    title: "Valle de La Penitencia",
    desc: "Explora el <strong>Valle de La Penitencia</strong>, un pequeño pero impresionante destino con <strong>paisajes agrícolas</strong> y <strong>gran belleza natural</strong>. En esta excursión, disfrutarás de su <strong>riqueza agrícola</strong> y visitarás el <strong>Mural de la Prehistoria</strong>, una de las <strong>pinturas al fresco más grandes al aire libre</strong>, que representa la evolución geológica de <strong>Viñales.</strong>",
    imgs: [],
    tips: tips
  },
  {
    id: 5,
    title: "El más famoso",
    desc: "Descubra el impresionante <strong>Valle de Viñales</strong>, un destino de renombre mundial por su magnitud, <strong>belleza y riqueza cultural</strong>. En un recorrido de aproximadamente dos horas, podrá admirar sus <strong>paisajes únicos</strong> y sumergirse en la <strong>auténtica vida campesina</strong>, interactuando con los <strong>habitantes locales</strong> y conociendo sus <strong>tradiciones</strong>. Una experiencia enriquecedora que combina naturaleza,<strong>historia</strong> y la <strong>esencia cultural de Viñales.</strong>",
    imgs: [],
    tips: tips
  }
]

let hikingAdventure: Adventure[] = [
  {
    id: 1,
    title: "Del infierno al paraíso",
    desc: "La experiencia comienza saliendo del bullicio de la ciudad, donde el ruido, el tráfico y la prisa marcan el ritmo diario, una especie de infierno moderno. Poco a poco, el camino se abre paso hacia el <strong>Valle de Viñales</strong>, donde el <strong>silencio</strong>, el <strong>verde intenso</strong> y el <strong>aire limpio</strong> transforman el entorno en un <strong>paraíso auténtico</strong>. A pie, se recorren <strong>senderos</strong> que conducen a un <strong>mirador con vistas a Viñales y Palmarito</strong>. En el trayecto, se visita la <strong>comunidad de Los Acuáticos</strong>, donde los habitantes comparten sus <strong>tradiciones y modo de vida</strong>. La jornada concluye con un <strong>regreso en coche de caballos</strong>, cerrando un viaje que va, literalmente, <strong>del caos urbano a la paz del valle.</strong>",
    imgs: [],
    tips: []
  },
  {
    id: 2,
    title: "Amanecer increíble",
    desc: "Madrugue para vivir un <strong>amanecer inolvidable en el Valle de Viñales</strong>, ascendiendo a la cumbre del <strong>Parque Nacional</strong> para admirar el <strong>sol naciente</strong> sobre los <strong>mogotes y la rica biodiversidad cubana</strong>. En el trayecto, tendrá la oportunidad de visitar la singular <strong>comunidad de Los Acuáticos</strong>, conocida por sus creencias tradicionales ligadas al <strong>poder curativo del agua</strong> y su modo de vida en <strong>armonía con la naturaleza</strong>. Disfrute de un <strong>café artesanal con lugareños</strong> antes de <strong>descender hasta el Mural de la Prehistoria</strong>, donde finalizará esta experiencia única en contacto con el <strong>entorno natural.</strong>",
    imgs: [],
    tips: []
  }, {
    id: 3,
    title: "Disfrutando del ocaso",
    desc: "Disfruta el <strong>Valle del Silencio</strong>, descubre el <strong>proceso del tabaco desde la plantación hasta la confección de puros criollos.</strong> Finaliza la experiencia <strong>relajándote en una casa campesina</strong>, disfrutando de un <strong>Mojito Criollo</strong> y un <strong>puro natural</strong> mientras contemplas la <strong>puesta de sol.</strong>",
    imgs: [],
    tips: []
  }, {
    id: 4,
    title: "Un verdadero hiking",
    desc: "Descubre <strong>Viñales</strong> en un tour ideal para los amantes del <strong>ejercicio al aire libre</strong>, ascendiendo por un antiguo <strong>bosque de galerías</strong> y descendiendo hacia el <strong>Valle del Palmarito</strong>. Disfruta de <strong>vistas impresionantes</strong>, interactúa con <strong>pobladores locales</strong> y aprende sobre el <strong>cultivo del tabaco.</strong>",
    imgs: [],
    tips: []
  }, {
    id: 5,
    title: "Antigüedad y naturaleza",
    desc: "Explora el <strong>antiguo cañón fluvial del Valle de Viñales</strong> en una <strong>caminata</strong> de tres horas, un <strong>refugio de biodiversidad y agricultura ecológica</strong>. Observa <strong>aves endémicas</strong> como el <strong>tocororo y el carpintero verde</strong> mientras disfrutas de <strong>vistas impresionantes de montañas y campos</strong>. Una <strong>experiencia única</strong> para <strong>amantes de la naturaleza y la aventura.</strong>",
    imgs: [],
    tips: []
  },
  {
    id: 6,
    title: "100% ecología",
    desc: "Disfrute de un recorrido exclusivo por una <strong>finca privada dedicada a la agricultura ecológica</strong>, donde <strong>degustará frutas y jugos naturales</strong> mientras <strong>aprende sobre las tradiciones y cultivos locales.</strong> Los recidentes locales, compartirán detalles sobre las <strong>prácticas sostenibles</strong> de la finca, y la visita culminará con un <strong>recorrido a la Cueva de la Vaca</strong>, ofreciendo vistas impresionantes del <strong>entorno natural.</strong>",
    imgs: [],
    tips: []
  },
  {
    id: 7,
    title: "Tabaco inside",
    desc: "Descubre la <strong>tradición del cultivo del tabaco</strong> con la experiencia \"TABACO IN SIDE\", explorando sus <strong>raíces aborígenes y su legado campesino</strong>. Durante la temporada de cultivo (noviembre a marzo), recorrerás <strong>plantaciones</strong>, participarás en el <strong>proceso de despalillo</strong> y aprenderás la <strong>elaboración artesanal de puros criollos</strong> de la mano de <strong>guías locales.</strong> Una experiencia auténtica que te conectará con la <strong>historia y cultura del tabaco en Cuba.</strong>",
    imgs: [],
    tips: []
  },
  {
    id: 8,
    title: "Viñales: day trip",
    desc: "",
    imgs: [],
    tips: []
  },
  {
    id: 9,
    title: "Historia, cultura y naturaleza",
    desc: "",
    imgs: [],
    tips: []
  }


]

let cycletoursAdventure: Adventure[] = [{
  id: 1,
  title: "El Calvario",
  desc: "Explora la belleza de <strong>Viñales</strong> con la excursión “<strong>El Calvario</strong>”, un <strong>recorrido lleno de paisajes impresionantes</strong>, desde <strong>valles intramontanos</strong> hasta <strong>cultivos de café y tabaco</strong>. Visita el <strong>Mural de la Prehistoria</strong> y finaliza con un <strong>refrescante baño en el río El Calvario</strong>. Ideal <strong>para amantes del ciclismo</strong> y la naturaleza, esta experiencia combina <strong>aventura, ejercicio e inmersión cultural.</strong>",
  imgs: [],
  tips: []
}, {
  id: 2,
  title: "El Resbaloso",
  desc: "Embárcate en una <strong>experiencia única</strong> que combina <strong>deporte, cultura e historia en Viñales.</strong> Explora el <strong>Palenque de los Cimarrones</strong> para conocer la rica <strong>cultura afrocubana</strong>, navega por el <strong>río subterráneo de la Cueva del Indio</strong> y disfruta de un baño refrescante en el <strong>Río Resbaloso</strong>, rodeado de naturaleza. Culmina tu aventura con una visita a la primera <strong>Cooperativa de Producción Agropecuaria fundada por Fidel Castro</strong>, donde conocerás la <strong>historia agrícola de Cuba.</strong> Una excursión ideal para quienes buscan una mezcla de <strong>actividad física y enriquecimiento cultural.</strong>",
  imgs: [],
  tips: []
},
{
  id: 3,
  title: "Recorriendo valles",
  desc: "Disfruta de una excursión de tres horas por el <strong>Valle de la Penitencia</strong>, explorando <strong>mogotes, valles intramontanos y el Mural de la Prehistoria</strong>. Haz una <strong>parada en un mirador natural</strong> y finaliza el recorrido en el <strong>Valle de Viñales</strong>, visitando <strong>secaderos de tabaco</strong> y una <strong>plantación de café</strong>. Una experiencia ideal para los <strong>amantes del ciclismo y la naturaleza.</strong>",
  imgs: [],
  tips: []
}, {
  id: 4,
  title: "Agricultura ecológica",
  desc: "Explora el fascinante <strong>ecosistema de las Pizarras del Sur</strong> en un recorrido de tres horas, que te llevará a un <strong>lago</strong> para un refrescante chapuzón y luego a la <strong>Finca Agroecológica El Paraíso</strong>, donde aprenderás sobre la <strong>agricultura ecológica en Cuba</strong>. Ideal para quienes buscan <strong>naturaleza, aventura y aprendizaje</strong>, esta excursión ofrece una experiencia completa y única en el corazón de las <strong>Pizarras del Sur.</strong>",
  imgs: [],
  tips: []
}, {
  id: 5,
  title: "Visita al lago",
  desc: "Descubre el encanto de las <strong>Pizarras del Sur</strong>, un <strong>paisaje fascinante y poco conocido.</strong> El recorrido te llevará a través de estas formaciones hasta un <strong>lago</strong>, donde podrás disfrutar de un refrescante chapuzón, y luego descenderás al <strong>Valle de Viñales</strong>, un lugar lleno de <strong>verdor, cultura y tradiciones campesinas.</strong> Esta excursión ofrece una experiencia única, combinando <strong>naturaleza y cultura</strong> para una jornada inolvidable en <strong>Viñales.</strong>",
  imgs: [],
  tips: []
}
]
let othersAdventure: Adventure[] = [{
  id: 1,
  title: "Una playa paradisíaca",
  desc: "<strong>Cayo Jutías</strong>, uno de los destinos más hermosos de Cuba con <strong>acceso directo en carro</strong>, se destaca por sus <strong>arenas blancas y aguas cristalinas</strong> bañadas por el <strong>sol caribeño</strong>. Además de relajarte en sus <strong>paradisíacas playas</strong>, puedes <strong>disfrutar de actividades</strong> como <strong>snorkeling y buceo</strong>, explorando los vibrantes <strong>arrecifes de coral y la vida marina.</strong> Un lugar ideal para quienes buscan <strong>belleza natural y aventura acuática.</strong>",
  imgs: [],
  tips: []
}, {
  id: 2,
  title: "Un día intenso",
  desc: "<strong>Cayo Jutías</strong>, accesible en<strong> coche</strong>, es una de las <strong>playas más espectaculares de Cuba</strong>, con <strong>arenas blancas y aguas cristalinas</strong> bañadas por el sol caribeño. Además de relajarte en sus <strong>paradisíacas playas</strong>, puedes disfrutar de actividades como <strong>snorkeling y buceo</strong>, y explorar el <strong>Mural de la Prehistoria</strong> y el <strong>Canopy El Fortín</strong>. La excursión también incluye una <strong>visita a la Gran Caverna de Santo Tomás</strong>,<strong> uno de los sistemas cavernarios más grandes de América Latina y el Caribe</strong>, ofreciendo una combinación perfecta de<strong> belleza natural, aventura y exploración cultural.</strong>",
  imgs: [],
  tips: []
},
{
  id: 3,
  title: "Gran Caverna de Santo Tomás",
  desc: "Descubre la majestuosa <strong>Gran Caverna de Santo Tomás</strong>, uno de los <strong>sistemas cavernarios más impresionantes de Cuba</strong> y <strong>entre los 10 más grandes de América Latina y el Caribe.</strong> Con aproximadamente <strong>45 km de galerías</strong> en <strong>siete niveles</strong>, ofrece una <strong>experiencia única</strong> para los amantes de la <strong>naturaleza y la espeleología</strong>, con <strong>formaciones rocosas<strong> como <strong>estalactitas, estalagmitas y columnas.</strong> Equipados con cascos y linternas, los excursionistas explorarán este fascinante <strong>mundo subterráneo</strong> rodeado de exuberante vegetación, viviendo una aventura inolvidable en esta <strong>maravilla del carso cubano.</strong>",
  imgs: [],
  tips: []
}, {
  id: 4,
  title: "Para todas las edades",
  desc: "Ofrecemos un inolvidable <strong>paseo en coche tirado por caballos</strong>, <strong>ideal para personas mayores, con discapacidades y niños</strong>, que permite disfrutar del impresionante paisaje de los <strong>valles de Viñales</strong>, famosos por su <strong>belleza natural y rica cultura campesina.</strong> Durante el recorrido, tendrás la oportunidad de interactuar con los lugareños, conocer sus tradiciones y sumergirte en la milenaria <strong>cultura tabacalera</strong> de la región, todo desde la comodidad y tranquilidad de un <strong>coche tirado por caballos</strong>, diseñado para tu <strong>máximo confort y disfrute.</strong>",
  imgs: [],
  tips: []
}, {
  id: 5,
  title: "Viñales: day trip",
  desc: "Aprovecha al máximo tu visita a <strong>Viñales</strong> con nuestra excursión de un día, un paquete todo incluido que combina naturaleza y cultura. Recorre en <strong>coche americano</strong> el <strong>Valle de San Vicente</strong>, <strong>visita la Cueva del Indio y el Palenque de los Cimarrones</strong>, disfruta de vistas desde <strong>Los Jazmines</strong> y explora el <strong>Mural de la Prehistoria</strong>. Luego, camina por el <strong>Valle de La Penitencia</strong>, conoce las <strong>plantaciones de tabaco</strong> y regresa en un <strong>coche tirado por caballos.</strong> La experiencia incluye un <strong>almuerzo en Los Reyes</strong> y un <strong>recorrido a caballo por el Valle del Palmarito</strong>, con <strong>opciones alternativas</strong> como <strong>bicicleta o visita a la Cueva de la Vaca.</strong>",
  imgs: [],
  tips: []
},
{
  id: 6,
  title: "Historia, cultura y naturaleza",
  desc: "Descubra la historia, cultura y naturaleza de <strong>Viñales</strong> en una excursión completa que incluye la <strong>Cueva del Indio, el Palenque de los Cimarrones y el despalillo de tabaco</strong>, donde aprenderá sobre la <strong>elaboración del puro cubano.</strong> Admire el <strong>Mural de la Prehistoria</strong>, disfrute de vistas panorámicas desde los <strong>valles Palmarito y La Penitencia</strong>, y desde la terraza del <strong>Hotel Los Jazmines.</strong> La experiencia se completa con una <strong>visita a un campesino tabacalero</strong> y un recorrido por el <strong>centro histórico de Viñales.</strong>",
  imgs: [],
  tips: []
}
]
let experiences: Experience[] = [

  {
    id: 1,
    category: "horseback",
    title: "Cabalgata en Viñales: naturaleza, cultura y tradición en cada paso",
    desc: "Recorrer <strong>Viñales a caballo</strong> es una <strong>experiencia inmersiva</strong> que revela la esencia del <strong>paisaje cubano</strong>. Entre mogotes imponentes y verdes campos de tabaco, el recorrido permite descubrir fincas tradicionales donde se cultivan tabaco y café de forma artesanal. Esta actividad, accesible para todos los niveles, fomenta el turismo sostenible, fortaleciendo el vínculo con las comunidades locales y preservando el entorno natural.",
    mainImage: "",
    adventures: horsebackAdventure,
  },
  {
    id: 2,
    category: "hiking",
    title: "Senderismo en Viñales: entre montañas, valles y tradiciones vivas",
    desc: "Adentrarse en los senderos de Viñales es descubrir un entorno vibrante donde la biodiversidad, el aire limpio y los paisajes montañosos marcan el ritmo de la caminata. Las rutas atraviesan valles fértiles y miradores naturales, mientras la interacción con campesinos del lugar revela costumbres agrícolas transmitidas por generaciones. Una experiencia enriquecedora que une aventura, cultura y respeto por el entorno.",
    mainImage: "",
    adventures: hikingAdventure,
  },
  {
    id: 3,
    category: "cycletours",
    title: "Viñales sobre ruedas: una travesía entre naturaleza y tradición",
    desc: "Recorrer Viñales en bicicleta es una forma dinámica y auténtica de conectar con sus paisajes emblemáticos. Los caminos serpentean entre mogotes, fincas de tabaco y escenarios rurales llenos de vida, permitiendo una inmersión total en el entorno. El contacto con campesinos y sus saberes tradicionales añade un valor cultural a esta experiencia activa, donde el movimiento se convierte en una forma de descubrir.",
    mainImage: "",
    adventures: cycletoursAdventure,
  }, {
    id: 4,
    category: "others",
    title: "Más allá del valle: experiencias únicas en Viñales",
    desc: "Viñales sorprende con una diversidad de propuestas que van mucho más allá de sus paisajes montañosos. A pocos kilómetros, Cayo Jutías invita al descanso entre aguas turquesas y arenas blancas, perfectas para nadar, bucear o simplemente desconectar. En tierra firme, las fincas agroecológicas abren sus puertas al visitante con prácticas sostenibles y sabores auténticos. Un destino que combina naturaleza, sabor local y momentos de auténtica serenidad.",
    mainImage: "",
    adventures: othersAdventure
  }
]

// export interface GalleryData {
//   mainImage: GalleryImage;
//   thumbImages?: GalleryImage[];
//   title: string;
//   description: string;
//   link?: { text: string; url: string };
//   features?: string[];
//   featuresTitle?: string;
//   panelWidth?: string;
//   reverse?: boolean;
//   color: HexColor;
//   hasHostBg: boolean;
// }

