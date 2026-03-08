const rawPrices = [0, 0, 0, 0, 0, 0, 0];
const packagesPath = ["/packages/adventure-nature",
  "/packages/relax-and-beach",
  "/packages/vinales-family",
  "/packages/romance-in-vinales",
  "/packages/nature-and-tradition",
  "/packages/vinales-360",
  "/packages/vinales-express",]


function formatPrice(price: number) {
  return price === 0 ? "0.00" : price % 1 === 0 ? price.toString() : price.toFixed(2);
}

export const packages = [
  {
    background: '/assets/images/adventures/slide-horse-riding-02.jpg',
    title: 'packages.packageOne.title',
    subtitle: 'packages.packageOne.subtitle',
    duration: 'packages.packageOne.duration',
    description: 'packages.packageOne.description',
    price: formatPrice(rawPrices[0]),
    currency: "USD",
    perUnit: 'packages.packageOne.perUnit',
    textLink: 'packages.packageOne.linkText',
    path: packagesPath[0],
  },

  {
    background: '/assets/images/adventures/slide-beach-02.jpg',
    title: 'packages.packageTwo.title',
    subtitle: 'packages.packageOne.subtitle',
    duration: 'packages.packageTwo.duration',
    description: 'packages.packageTwo.description',
    price: formatPrice(rawPrices[1]),
    currency: "USD",
    perUnit: 'packages.packageTwo.perUnit',
    textLink: 'packages.packageTwo.linkText',
    path: packagesPath[1],
    transform: 'scale(1.28)',
    transformOrigin: '0% 50%',
  },
  {
    background: '/assets/images/adventures/slide-romance.jpg',
    title: 'packages.packageThree.title',
    subtitle: 'packages.packageOne.subtitle',
    duration: 'packages.packageThree.duration',
    description: 'packages.packageThree.description',
    price: formatPrice(rawPrices[2]),
    currency: "USD",
    perUnit: 'packages.packageThree.perUnit',
    textLink: 'packages.packageThree.linkText',
    path: packagesPath[2],
  },
  {
    background: '/assets/images/adventures/slide-tobacco-farmer.jpg',
    title: 'packages.packageFour.title',
    subtitle: 'packages.packageOne.subtitle',
    duration: 'packages.packageFour.duration',
    description: 'packages.packageFour.description',
    price: formatPrice(rawPrices[3]),
    currency: "USD",
    perUnit: 'packages.packageFour.perUnit',
    textLink: 'packages.packageFour.linkText',
    path: packagesPath[3],
  },
  {
    background: '/assets/images/adventures/slide-vinales-360.jpg',
    title: 'packages.packageFive.title',
    subtitle: 'packages.packageFive.subtitle',
    duration: 'packages.packageFive.duration',
    description: 'packages.packageFive.description',
    price: formatPrice(rawPrices[4]),
    currency: "USD",
    perUnit: 'packages.packageFive.perUnit',
    textLink: 'packages.packageFive.linkText',
    path: packagesPath[4],
  },

  {
    background: '/assets/images/adventures/slide-sunset.jpg',
    title: 'packages.packageSix.title',
    subtitle: 'packages.packageSix.subtitle',
    duration: 'packages.packageSix.duration',
    description: 'packages.packageSix.description',
    price: formatPrice(rawPrices[5]),
    currency: "USD",
    perUnit: 'packages.packageSix.perUnit',
    textLink: 'packages.packageSix.linkText',
    path: packagesPath[5],
  }
];



    




