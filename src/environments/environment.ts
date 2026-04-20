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
    key: 'AKfycbzu8icwv5iLm3aPq6o3TDfAo-SlxB3gVwg8vMXZOYrwuxpTV59R3xbpYmW_TNsRt3Vlyg',
    suffix: '/exec',
  },

  contactBusiness: {
    phones: [
      { label: '(+53) 48 793317', value: '+53 48 793317' },
      { label: '(+53) 5 2741734', value: '+53 5 2741734' },
    ],

    whatsapp: {
      number: '5352741734',
      defaultMessage:
        '¡Hola!. Me gustaría recibir más información sobre las opciones de alojamiento y los servicios disponibles en Villa Los Reyes',
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
