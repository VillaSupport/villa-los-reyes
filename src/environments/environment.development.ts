export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDlMsDMuhRne9-X7DXvWvkmJHIuq4FBavc',
    authDomain: 'villa-los-reyes.firebaseapp.com',
    projectId: 'villa-los-reyes',
    storageBucket: 'villa-los-reyes.firebasestorage.app',
    messagingSenderId: '293261168347',
    appId: '1:293261168347:web:2b276d3f17830b38ee86fe',
  },
  googleScript: {
    base: 'https://script.google.com/macros',
    type: '/s/',
    key: 'AKfycbzG2GtOc3wGwqsuyQmyoLfo8lOWl4T4WrDX1nkiiVzoE7kb8ZXo7mlNaD8-DwbsJf8mQw',
    suffix: '/exec',
  },
  contactBusiness: {
    phones: [
      { label: '(+53) 48 793317', value: '+53 48 793317' },
      { label: '(+53) 5 2741734', value: '+53 5 2741734' },
    ],

    whatsapp: {
      number: '5352741734',
      defaultMessage: {
        es: '¡Hola!. Me gustaría recibir más información sobre las opciones de alojamiento y los servicios disponibles en Villa Los Reyes',
        en: 'Hello!. I would like to receive more information about the accommodation options and services available at Villa Los Reyes.',
        fr: "Bonjour ! J'aimerais recevoir plus d'informations sur les options d'hébergement et les services disponibles a Villa Los Reyes.",
      },
    },
    email: 'joanmanuel2008@yahoo.es',

    address: {
      label: 'Calle Salvador Cisneros #206-C, Viñales, Pinar del Río, Cuba',
      mapUrl: 'https://maps.app.goo.gl/ocppjEAutwcchVzGA',
    },

    social: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      messenger: 'https://m.me/',
    },
  },
};
