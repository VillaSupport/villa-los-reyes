import { Position } from "../components/shared/interfaces/app-interfaces";

interface HeaderData {
  head: {
    title: string;
    description: string;
  };
  image: {
    src: string;
    alt: string;
  };
  objectPosition: Position;
}

export const headerAdventureNature: HeaderData = {
  head: {
    title: 'packageHeader.title',
    description: 'packageHeader.description',
  },
  image: {
    src: '/assets/images/adventures/slide-horse-riding-02.jpg',
    alt: 'packages.packageOne.title'
  },
  objectPosition: 'center center'
};

export const headerRelaxAndBeach: HeaderData = {
  head: {
    title: 'packageHeader.title',
    description: 'packageHeader.description',
  },
  image: {
    src: '/assets/images/adventures/slide-beach-02.jpg',
    alt: 'packages.packageTwo.title'
  },
  objectPosition: 'center center'
};

export const headerVinalesFamily: HeaderData = {
  head: {
    title: 'packageHeader.title',
    description: 'packageHeader.description',
  },
  image: {
    src: '/assets/images/adventures/slide-sunset.jpg',
    alt: 'packages.packageThree.title'
  },
  objectPosition: 'center center'
};

export const headerRomanceInVinales: HeaderData = {
  head: {
    title: 'packageHeader.title',
    description: 'packageHeader.description',
  },
  image: {
    src: '/assets/images/adventures/slide-romance.jpg',
    alt: 'packages.packageFour.title'
  },
  objectPosition: 'center center'
};

export const headerNatureAndTradition: HeaderData = {
  head: {
    title: 'packageHeader.title',
    description: 'packageHeader.description',
  },
  image: {
    src: '/assets/images/adventures/slide-tobacco-farmer.jpg',
    alt: 'packages.packageFive.title'
  },
  objectPosition: 'center center'
};

export const headerVinales360: HeaderData = {
  head: {
    title: 'packageHeader.title',
    description: 'packageHeader.description',
  },
  image: {
    src: '/assets/images/adventures/slide-vinales-360.jpg',
    alt: 'packages.packageSix.title'
  },
  objectPosition: 'center center'
};

export const headerVinalesExpress: HeaderData = {
  head: {
    title: 'packageHeader.title',
    description: 'packageHeader.description',
  },
  image: {
    src: '/assets/images/adventures/slide-vinales-express.jpg',
    alt: 'packages.packageSeven.title'
  },
  objectPosition: 'center center'
};


export const aventuraNatural = {
  title: 'aventuraNatural.title',
  description: 'aventuraNatural.description',
  itinerary: [
    'aventuraNatural.itinerary.0',
    'aventuraNatural.itinerary.1',
    'aventuraNatural.itinerary.2',
    'aventuraNatural.itinerary.3',
  ],
  includes: {
    lodging: 'aventuraNatural.includes.lodging',
    duration: 'aventuraNatural.includes.duration',
    activities: [
      'aventuraNatural.includes.activities.0',
      'aventuraNatural.includes.activities.1',
    ],
    gastronomy: [
      'aventuraNatural.includes.gastronomy.0',
      'aventuraNatural.includes.gastronomy.1',
      'aventuraNatural.includes.gastronomy.2',
    ],
    transportation: [
      'aventuraNatural.includes.transportation.0',
    ],
  },
  pricing: {
    unit: 'aventuraNatural.pricing.unit'
  }
};

export const relaxYPlaya = {
  title: 'relaxYPlaya.title',
  description: 'relaxYPlaya.description',
  itinerary: [
    'relaxYPlaya.itinerary.0',
    'relaxYPlaya.itinerary.1',
    'relaxYPlaya.itinerary.2',
    'relaxYPlaya.itinerary.3'
  ],
  includes: {
    lodging: 'relaxYPlaya.includes.lodging',
    duration: 'relaxYPlaya.includes.duration',
    activities: [
      'relaxYPlaya.includes.activities.0',
      'relaxYPlaya.includes.activities.1',
      'relaxYPlaya.includes.activities.2'
    ],
    gastronomy: [
      'relaxYPlaya.includes.gastronomy.0',
      'relaxYPlaya.includes.gastronomy.1',
      'relaxYPlaya.includes.gastronomy.2'
    ],
    transportation: [
      'relaxYPlaya.includes.transportation.0'
    ]
  },
  pricing: {
    unit: 'relaxYPlaya.pricing.unit'
  }
};

export const vinalesEnFamilia = {
  title: 'vinalesEnFamilia.title',
  description: 'vinalesEnFamilia.description',
  itinerary: [
    'vinalesEnFamilia.itinerary.0',
    'vinalesEnFamilia.itinerary.1',
    'vinalesEnFamilia.itinerary.2',
    'vinalesEnFamilia.itinerary.3',
    'vinalesEnFamilia.itinerary.4'
  ],
  includes: {
    lodging: 'vinalesEnFamilia.includes.lodging',
    duration: 'vinalesEnFamilia.includes.duration',
    activities: [
      'vinalesEnFamilia.includes.activities.0',
      'vinalesEnFamilia.includes.activities.1',
      'vinalesEnFamilia.includes.activities.2'
    ],
    gastronomy: [
      'vinalesEnFamilia.includes.gastronomy.0',
      'vinalesEnFamilia.includes.gastronomy.1',
      'vinalesEnFamilia.includes.gastronomy.2'
    ],
    transportation: [
      'vinalesEnFamilia.includes.transportation.0'
    ]
  },
  pricing: {
    unit: 'vinalesEnFamilia.pricing.unit'
  }
};

export const romanceEnVinales = {
  title: 'romanceEnVinales.title',
  description: 'romanceEnVinales.description',
  itinerary: [
    'romanceEnVinales.itinerary.0',
    'romanceEnVinales.itinerary.1',
    'romanceEnVinales.itinerary.2'
  ],
  includes: {
    lodging: 'romanceEnVinales.includes.lodging',
    duration: 'romanceEnVinales.includes.duration',
    activities: [
      'romanceEnVinales.includes.activities.0',
      'romanceEnVinales.includes.activities.1'
    ],
    gastronomy: [
      'romanceEnVinales.includes.gastronomy.0',
      'romanceEnVinales.includes.gastronomy.1',
      'romanceEnVinales.includes.gastronomy.2'
    ],
    transportation: [
      'romanceEnVinales.includes.transportation.0'
    ]
  },
  pricing: {
    unit: 'romanceEnVinales.pricing.unit'
  }
};

export const naturalezaYTradicion = {
  title: 'naturalezaYTradicion.title',
  description: 'naturalezaYTradicion.description',
  itinerary: [
    'naturalezaYTradicion.itinerary.0',
    'naturalezaYTradicion.itinerary.1',
    'naturalezaYTradicion.itinerary.2'
  ],
  includes: {
    lodging: 'naturalezaYTradicion.includes.lodging',
    duration: 'naturalezaYTradicion.includes.duration',
    activities: [
      'naturalezaYTradicion.includes.activities.0',
      'naturalezaYTradicion.includes.activities.1'
    ],
    gastronomy: [
      'naturalezaYTradicion.includes.gastronomy.0',
      'naturalezaYTradicion.includes.gastronomy.1',
      'naturalezaYTradicion.includes.gastronomy.2'
    ],
    transportation: [
      'naturalezaYTradicion.includes.transportation.0'
    ]
  },
  pricing: {
    unit: 'naturalezaYTradicion.pricing.unit'
  }
};
export const vinales360 = {
  title: 'vinales360.title',
  description: 'vinales360.description',
  itinerary: [
    'vinales360.itinerary.0',
    'vinales360.itinerary.1',
    'vinales360.itinerary.2',
    'vinales360.itinerary.3'
  ],
  includes: {
    lodging: 'vinales360.includes.lodging',
    duration: 'vinales360.includes.duration',
    activities: [
      'vinales360.includes.activities.0',
      'vinales360.includes.activities.1',
      'vinales360.includes.activities.2'
    ],
    gastronomy: [
      'vinales360.includes.gastronomy.0',
      'vinales360.includes.gastronomy.1',
      'vinales360.includes.gastronomy.2'
    ],
    transportation: [
      'vinales360.includes.transportation.0'
    ]
  },
  pricing: {
    unit: 'vinales360.pricing.unit'
  }
};
export const vinalesExpress = {
  title: 'vinalesExpress.title',
  description: 'vinalesExpress.description',
  itinerary: [
    'vinalesExpress.itinerary.0',
    'vinalesExpress.itinerary.1'
  ],
  includes: {
    lodging: 'vinalesExpress.includes.lodging',
    duration: 'vinalesExpress.includes.duration',
    activities: [
      'vinalesExpress.includes.activities.0'
    ],
    gastronomy: [
      'vinalesExpress.includes.gastronomy.0',
      'vinalesExpress.includes.gastronomy.1'
    ],
    transportation: [
      'vinalesExpress.includes.transportation.0'
    ]
  },
  pricing: {
    unit: 'vinalesExpress.pricing.unit'
  }
};
