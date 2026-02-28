interface pkgs {
    id: number | string,
    slug:string,
    title: string,
    desc: string,
    duration: string,
    price: number
    currency: 'USD'
    billingType: 'por persona'
    itinerary: string[]
    includes: { activities: string[], gastronomy: string[], transportation: string[] },
}
let packages: pkgs[] = [
    {
        id: 1,
        title: "Aventura Natural",
        desc: "Sumérgete en paisajes únicos, explora los mogotes, y disfruta de actividades al aire libre que te conectarán con  la esencia rural de Cuba. Ideal para parejas, grupos pequeños o viajeros solitarios.",
        duration: "2 noches / 3 días",
        price: 0,
        currency: "USD",
        billingType: "por persona",


        itinerary: [
            "Coctel de bienvenida con refrescantes jugos naturales o cócteles típicos. Tarde libre para relajarse en la terraza con vistas a los mogotes. Cena en restaurante con platos tradicionales cubanos.",
            "Desayuno en el restaurante. Excursión a Cayo Jutías: \"Una playa paradisíaca\". Regreso a la casa y cena en el restaurante.",
            "Senderismo: \"Amanecer increíble\". Desayuno en el restaurante. Experiencias y aventuras: \"Gran Caverna de Santo Tomás\". Cena en el restaurante con un menú especial.",
            "Desayuno de despedida en el restaurante con productos frescos locales. Salida hacia el próximo destino."
        ],
        includes: {
            activities: ["Senderismo", "Ciclotour por los alrededores (opcional)"],
            gastronomy: ["2 desayunos", "1 almuerzo", "2 cenas"],
            transportation: ["Traslados para todas las excursiones"]
        },
        slug: ""
    }, {
        id: 2,
        title: "Relax y Playa",
        desc: "Diseñado especialmente para familias con niños, este paquete combina actividades educativas y recreativas  que permitirán a todos disfrutar de una experiencia inolvidable en Viñales.",
        duration: "3 noches / 4 días",
        price: 0,
        currency: "USD",
        billingType: "por persona",
        itinerary: [
            "Coctel de bienvenida con refrescantes jugos naturales o cócteles típicos. Tarde libre para relajarse en la terraza con vistas a los mogotes. Cena en restaurante con platos tradicionales cubanos.",
            "Desayuno en el restaurante. Excursión a Cayo Jutías: \"Una playa paradisíaca\". Regreso a la casa y cena en el restaurante.",
            "Senderismo: \"Amanecer increíble\". Desayuno en el restaurante. Experiencias y aventuras: \"Gran Caverna de Santo Tomás\". Cena en el restaurante con un menú especial.",
            "Desayuno de despedida en el restaurante con productos frescos locales. Salida hacia el próximo destino."
        ],
        includes: {
            activities: ["Día completo en Cayo Jutías", "Caminata al amanecer", "Visita a una cueva"],
            gastronomy: ["3 desayunos", "2 almuerzo", "3 cenas"],
            transportation: ["Traslados a Cayo Jutías y excursiones locales"]
        },
        slug: ""
    }, {
        id: 3,
        title: "Viñales en Familia",
        desc: "Diseñado especialmente para familias con niños, este paquete combina actividades educativas y recreativas  que permitirán a todos disfrutar de una experiencia inolvidable en Viñales.",
        duration: "4 noches / 5 días",
        price: 0,
        currency: "USD",
        billingType: "por persona",
        itinerary: [
            "Llegada a la casa de hospedaje. Coctel de bienvenida con opciones para adultos y niños. Cena en familia en el restaurante.",
            "Desayuno en el restaurante \"Los Reyes\". Experiencia y aventuras: \"Tabaco inside\". Almuerzo en una finca ecológica durante la excursión. Cena en el restaurante \"Los Reyes\".",
            "Desayuno en el restaurante \"Los Reyes\". Viñales: historia, cultura y naturaleza. Almuerzo en el restaurante. Tarde libre para juegos o actividades recreativas. Cena temática para niños en el restaurante \"Los Reyes\".",
            "Desayuno en el restaurante \"Los Reyes\". Experiencias y aventuras: \"Un día intenso\". Día completo en la playa con transporte y almuerzo, y visita a la Gran Caverna de Santo Tomás. Cena en el restaurante \"Los Reyes\".",
            "Desayuno de despedida. Salida hacia el próximo destino."
        ],
        includes: {
            activities: ["Visita a una finca y plantaciones", "Excursión a una cueva", "Día completo en la playa"],
            gastronomy: ["4 desayunos", "3 almuerzo", "4 cenas"],
            transportation: ["Traslados para excursiones y día de playa"]
        },
        slug: ""
    }, {
        id: 4,
        title: "Romance en Viñales",
        desc: "Déjate envolver por la magia de Viñales con un viaje romántico entre paisajes espectaculares, cenas íntimas y momentos de relajación inolvidables.",
        duration: "2 noches / 3 días",
        price: 0,
        currency: "USD",
        billingType: "por persona",
        itinerary: [
            "Llegada a la casa de hospedaje. Cóctel de bienvenida con detalles románticos. Experiencias y aventuras: \"Viñales: historia, cultura y naturaleza\". Cena especial en el restaurante \"Los Reyes\" con ambiente íntimo.",
            "Senderismo: \"Amanecer increíble\". Desayuno en el restaurante \"Los Reyes\". Tarde libre o masajes opcionales. Cena bajo las estrellas en la terraza del restaurante.",
            "Desayuno en la terraza con vistas a los mogotes. Tiempo libre para pasear por el pueblo antes de la salida."
        ],
        includes: {
            activities: ["Senderismo por los lugares más emblemáticos de Viñales", "Cabalgata al amanecer"],
            gastronomy: ["2 desayunos", "1 almuerzo", "2 cenas"],
            transportation: ["Traslados para excursiones privadas"]
        },
        slug: ""
    }, {
        id: 5,
        title: "Naturaleza y Tradición",
        desc: "Vive una experiencia única en Viñales, donde la naturaleza y la tradición se fusionan en momentos de romance, aventura y relajación inolvidables.",
        duration: "2 noches / 3 días",
        price: 0,
        currency: "USD",
        billingType: "por persona",
        itinerary: [
            "Llegada a la casa de hospedaje. Cóctel de bienvenida con bebida refrescante local. Tarde libre o paseo por el pueblo. Cena en el restaurante \"Los Reyes\".",
            "Desayuno en el restaurante \"Los Reyes\". Cabalgata: \"La Penitencia\". Visita a una finca de tabaco con almuerzo incluido. Experiencias y aventuras: \"Disfrutando del ocaso\". Cena con música tradicional.",
            "Desayuno en el restaurante \"Los Reyes\". Tiempo libre para compras o visitar el Jardín Botánico. Salida hacia el próximo destino."
        ],
        includes: {
            activities: ["Senderismo por el Valle de La Penitencia", "Visita a una finca de tabaco"],
            gastronomy: ["2 desayunos", "1 almuerzo", "2 cenas"],
            transportation: ["Traslados para las excursiones incluidas"]
        },
        slug: ""
    },
    {
        id: 6,
        title: "Viñales 360",
        desc: "Una escapada intensa para vivir la esencia de Viñales en solo un día. Sumérgete en la historia, cultura y naturaleza del Valle de Viñales en esta experiencia compacta pero inolvidable. Descubre paisajes de ensueño, sitios emblemáticos y sabores auténticos en un recorrido que te conecta con lo mejor del occidente cubano.",
        duration: "3 noches / 4 días",
        price: 0,
        currency: "USD",
        billingType: "por persona",
        itinerary: [
            "Llegada a la casa de hospedaje. Cóctel de bienvenida. Cena en el restaurante \"Los Reyes\".",
            "Desayuno. Cabalgata: \"El más famoso\" por el Valle de Viñales. Almuerzo en el restaurante. Tarde libre. Cena con platos tradicionales.",
            "Desayuno. Ciclotour: \"Recorriendo Valles\". Almuerzo en ruta. Visita a la Gran Caverna de Santo Tomás. Cena con música en vivo.",
            "Desayuno. Mañana libre para actividades opcionales. Salida hacia el próximo destino."
        ],
        includes: {
            activities: ["Cabalgata por el Valle de Viñales", "Ciclotour por los alrededores", "Visita a la Cueva de Santo Tomás"],
            gastronomy: ["3 desayunos", "2 almuerzo", "3 cenas"],
            transportation: ["Traslados para las excursiones incluidas"]
        },
        slug: ""
    },
    {
        id: 7,
        title: "Viñales Exprés",
        desc: "Descubre la esencia de Viñales en un recorrido único entre valles, tradiciones y sabores auténticos, con actividades que te conectarán con su naturaleza y cultura.",
        duration: "1 noches / 2 días",
        price: 0,
        currency: "USD",
        billingType: "por persona",
        itinerary: [
            "Salida de La Habana a las 8:00 a.m. Bienvenida en Villa Los Reyes. Visita al mirador del Hotel Los Jazmines y al Mural de la Prehistoria. Caminata o cabalgata de 2 horas con degustaciones locales. Almuerzo en el restaurante. Tarde libre para explorar.",
            "Desayuno ligero opcional a las 7:00 a.m. Salida hacia el próximo destino."
        ],
        includes: {
            // TODO:Agregar lo que falta aca luego comprobamos
            activities: [],
            gastronomy: ["1 desayunos", "1 almuerzo"],
            transportation: ["Recogida en La Habana"]
        },
        slug: ""
    },
]