import { packages } from "./packages-data";


export const rooms = [
    {
      src: '/assets/images/rooms/room-01/slide-01.jpg',
      alt: 'rooms.images.room1Alt',
      name: 'rooms.images.room1Name',
      details: 'rooms.images.room1Details',
      path: '/services-facilities/facilities/room-01'
    },
    {
      src: '/assets/images/rooms/room-02/slide-01.jpg',
      alt: 'rooms.images.room2Alt',
      name: 'rooms.images.room2Name',
      details: 'rooms.images.room2Details',
      path: '/services-facilities/facilities/room-02'
    },
    {
      src: '/assets/images/rooms/room-03/slide-06.jpg',
      alt: 'rooms.images.room3Alt',
      name: 'rooms.images.room3Name',
      details: 'rooms.images.room3Details',
      path: '/services-facilities/facilities/room-03'
    },
    {
      src: '/assets/images/rooms/room-04/slide-03.jpg',
      alt: 'rooms.images.room4Alt',
      name: 'rooms.images.room4Name',
      details: 'rooms.images.room4Details',
      path: '/services-facilities/facilities/room-04'
    },
    {
      src: '/assets/images/rooms/room-05/slide-02.jpg',
      alt: 'rooms.images.room5Alt',
      name: 'rooms.images.room5Name',
      details: 'rooms.images.room5Details',
      path: '/services-facilities/facilities/room-05'
    }
  ];

export const room01Data = {
  header: {
    head: {
      title: 'roomsInfo.0.head.title',
      description: 'roomsInfo.0.head.description'
    },
    image: {
      src: '/assets/images/rooms/room-01/slide-03.jpg',
      alt: 'Habitación 1 - Villa Los Reyes',
    },
    objectPosition: '50% 40%',
  },

  gallery: {
    mainImage: {
      src: '/assets/images/rooms/room-01/slide-01.jpg',
      alt: 'Imagen principal de la habitación'
    },
    thumbImages: [
      { src: '/assets/images/rooms/room-01/slide-02.jpg', alt: 'Imagen adicional de la habitación' },
      { src: '/assets/images/rooms/room-01/slide-03.jpg', alt: 'Imagen adicional de la habitación' },
      { src: '/assets/images/rooms/room-01/slide-04.jpg', alt: 'Imagen adicional de la habitación' },
    ],
    title: 'roomsInfo.0.title',
    description: 'roomsInfo.0.description',
    featuresTitle: 'roomsInfo.0.featuresTitle',
    features: [
      'roomsInfo.0.features.0',
      'roomsInfo.0.features.1',
      'roomsInfo.0.features.2',
      'roomsInfo.0.features.3',
      'roomsInfo.0.features.4',
      'roomsInfo.0.features.5',
      'roomsInfo.0.features.6',
      'roomsInfo.0.features.7',
    ],
  },

  offer: packages[0]
};

export const room02Data = {
  header: {
    head: {
      title: 'roomsInfo.1.head.title',
      description: 'roomsInfo.1.head.description'
    },
    image: {
      src: '/assets/images/rooms/room-02/slide-03.jpg',
      alt: 'Habitación 2 - Villa Los Reyes',
    },
    objectPosition: '50% 40%',
  },

  gallery: {
    mainImage: {
      src: '/assets/images/rooms/room-02/slide-01.jpg',
      alt: 'Imagen principal de la habitación'
    },
    thumbImages: [
      { src: '/assets/images/rooms/room-02/slide-02.jpg', alt: 'Imagen adicional de la habitación' },
      { src: '/assets/images/rooms/room-02/slide-03.jpg', alt: 'Imagen adicional de la habitación' },
      { src: '/assets/images/rooms/room-02/slide-04.jpg', alt: 'Imagen adicional de la habitación' },
    ],
    title: 'roomsInfo.1.title',
    description: 'roomsInfo.1.description',
    featuresTitle: 'roomsInfo.1.featuresTitle',
    features: [
      'roomsInfo.1.features.0',
      'roomsInfo.1.features.1',
      'roomsInfo.1.features.2',
      'roomsInfo.1.features.3',
      'roomsInfo.1.features.4',
      'roomsInfo.1.features.5',
      'roomsInfo.1.features.6',
      'roomsInfo.1.features.7',
      'roomsInfo.1.features.8',
    ],
  },

  offer: packages[1]
};

export const room03Data = {
  header: {
    head: {
      title: 'roomsInfo.2.head.title',
      description: 'roomsInfo.2.head.description'
    },
    image: {
      src: '/assets/images/rooms/room-03/slide-05.jpg',
      alt: 'Habitación 3 - Villa Los Reyes',
    },
    objectPosition: 'center',
  },

  gallery: {
    mainImage: {
      src: '/assets/images/rooms/room-03/slide-01.jpg',
      alt: 'Imagen principal de la habitación'
    },
    thumbImages: [
      { src: '/assets/images/rooms/room-03/slide-02.jpg', alt: 'Imagen adicional de la habitación' },
      { src: '/assets/images/rooms/room-03/slide-03.jpg', alt: 'Imagen adicional de la habitación' },
      { src: '/assets/images/rooms/room-03/slide-04.jpg', alt: 'Imagen adicional de la habitación' },
    ],
    title: 'roomsInfo.2.title',
    description: 'roomsInfo.2.description',
    featuresTitle: 'roomsInfo.2.featuresTitle',
    features: [
      'roomsInfo.2.features.0',
      'roomsInfo.2.features.1',
      'roomsInfo.2.features.2',
      'roomsInfo.2.features.3',
      'roomsInfo.2.features.4',
      'roomsInfo.2.features.5',
      'roomsInfo.2.features.6',
      'roomsInfo.2.features.7',
    ],
  },

  offer: packages[2]
};

export const room04Data = {
  header: {
    head: {
      title: 'roomsInfo.3.head.title',
      description: 'roomsInfo.3.head.description'
    },
    image: {
      src: '/assets/images/rooms/room-04/slide-01.jpg',
      alt: 'Habitación Familiar - Villa Los Reyes',
    },
    objectPosition: 'center',
  },

  gallery: {
    mainImage: {
      src: '/assets/images/rooms/room-04/slide-01.jpg',
      alt: 'Imagen principal de la habitación'
    },
    thumbImages: [
      { src: '/assets/images/rooms/room-04/slide-02.jpg', alt: 'Imagen adicional de la habitación' },
      { src: '/assets/images/rooms/room-04/slide-03.jpg', alt: 'Imagen adicional de la habitación' },
      { src: '/assets/images/rooms/room-04/slide-04.jpg', alt: 'Imagen adicional de la habitación' },
    ],
    title: 'roomsInfo.3.title',
    description: 'roomsInfo.3.description',
    featuresTitle: 'roomsInfo.3.featuresTitle',
    features: [
      'roomsInfo.3.features.0',
      'roomsInfo.3.features.1',
      'roomsInfo.3.features.2',
      'roomsInfo.3.features.3',
      'roomsInfo.3.features.4',
    ],
    panelWidth: '600px',
    hasHostBg: false,
  },

  offer: packages[3]
};

export const room05Data = {
  header: {
    head: {
      title: 'roomsInfo.4.head.title',
      description: 'roomsInfo.4.head.description'
    },
    image: {
      src: '/assets/images/rooms/room-05/slide-05.jpg',
      alt: 'Suite - Villa Los Reyes',
    },
    objectPosition: 'center',
  },

  gallery: {
    mainImage: {
      src: '/assets/images/rooms/room-05/slide-01.jpg',
      alt: 'Imagen principal de la habitación'
    },
    thumbImages: [
      { src: '/assets/images/rooms/room-05/slide-02.jpg', alt: 'Imagen adicional de la habitación' },
      { src: '/assets/images/rooms/room-05/slide-03.jpg', alt: 'Imagen adicional de la habitación' },
      { src: '/assets/images/rooms/room-05/slide-04.jpg', alt: 'Imagen adicional de la habitación' },
    ],
    title: 'roomsInfo.4.title',
    description: 'roomsInfo.4.description',
    featuresTitle: 'roomsInfo.4.featuresTitle',
    features: [
      'roomsInfo.4.features.0',
      'roomsInfo.4.features.1',
      'roomsInfo.4.features.2',
      'roomsInfo.4.features.3',
      'roomsInfo.4.features.4',
      'roomsInfo.4.features.5',
      'roomsInfo.4.features.6',
      'roomsInfo.4.features.7',
    ],
    panelWidth: '600px',
    hasHostBg: false,
  },

  offer: packages[4]
};


