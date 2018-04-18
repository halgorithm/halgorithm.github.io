import freeze from 'deep-freeze';

const exampleData = freeze({
  exampleGame: {
    id: 'exampleGame',
    title: 'Jumpster Jones',
    url: 'https://halgorithm.github.io/example-game/',
    date: new Date(),
    tags: ['platformer'],
    description: "An example game I made because I'm great",
    image:
      'http://www.mobygames.com/images/shots/l/218703-super-mario-world-snes-screenshot-title-screen.png',
    extraImages: [
      'http://www.juicygamereviews.com/uploads/3/0/5/0/30501048/48649.png?730',
      'https://r.mprd.se/media/images/35737-Super_Mario_All-Stars_+_Super_Mario_World_(Europe)-3.jpg'
    ],
    playText: 'Check out this cool game'
  },
  exampleGame2: {
    id: 'exampleGame2',
    title: 'Damp Spirits',
    url: 'https://halgorithm.github.io/example-game/',
    date: new Date(),
    tags: ['co_op'],
    description: "Another example game I made because I'm great",
    image: 'https://i.ytimg.com/vi/C_BLl9nu8Es/maxresdefault.jpg',
    extraImages: [
      'https://cdn.vox-cdn.com/thumbor/yx5syTUG6h-g4E-odlGPTC8qsYY=/148x0:1768x1080/1200x800/filters:focal(148x0:1768x1080)/cdn.vox-cdn.com/uploads/chorus_image/image/46485808/dark_souls_3.0.0.jpg',
      'https://2static.fjcdn.com/pictures/My+dark+souls+3+screenshots_c463c8_5905031.jpg',
      'http://www.mobygames.com/images/shots/l/884625-dark-souls-iii-the-ringed-city-windows-screenshot-inside-a.jpg'
    ],
    playText: ''
  },
  exampleGame3: {
    id: 'exampleGame3',
    title: 'Jam Game 1',
    url: 'https://halgorithm.github.io/example-game/',
    date: new Date(),
    tags: ['jam'],
    description: "Another example game I made because I'm great",
    image:
      'https://static.giantbomb.com/uploads/scale_small/9/93770/2364832-snes_supermariorpg_2.jpg',
    extraImages: [],
    playText: ''
  },
  exampleGame4: {
    id: 'exampleGame4',
    title: 'Some other game',
    url: 'https://halgorithm.github.io/example-game/',
    date: new Date(),
    tags: [],
    description: "Another example game I made because I'm great",
    image:
      'https://static.giantbomb.com/uploads/scale_small/9/93770/2364832-snes_supermariorpg_2.jpg',
    extraImages: [],
    playText: ''
  },
  exampleGame5: {
    id: 'exampleGame5',
    title: 'Co-op Jam Game',
    url: 'https://halgorithm.github.io/example-game/',
    date: new Date(),
    tags: ['co_op', 'jam'],
    description: "Another example game I made because I'm great",
    image:
      'https://static.giantbomb.com/uploads/scale_small/9/93770/2364832-snes_supermariorpg_2.jpg',
    extraImages: [],
    playText: ''
  },
  exampleGame6: {
    id: 'exampleGame6',
    title: 'Jumpster Jones: The Sequel',
    url: 'https://halgorithm.github.io/example-game/',
    date: new Date(),
    tags: ['platformer'],
    description: "Another example game I made because I'm great",
    image:
      'https://static.giantbomb.com/uploads/scale_small/9/93770/2364832-snes_supermariorpg_2.jpg',
    extraImages: [],
    playText: ''
  },
  exampleGame7: {
    id: 'exampleGame7',
    title: 'Platformer Jam Game',
    url: 'https://halgorithm.github.io/example-game/',
    date: new Date(),
    tags: ['jam', 'platformer'],
    description: "Another example game I made because I'm great",
    image:
      'https://static.giantbomb.com/uploads/scale_small/9/93770/2364832-snes_supermariorpg_2.jpg',
    extraImages: [],
    playText: ''
  }
});

const data = freeze({
  exampleGame7: {
    id: 'exampleGame7',
    title: 'Platformer Jam Game',
    url: 'https://halgorithm.github.io/example-game/',
    date: new Date(),
    tags: ['jam', 'platformer'],
    description: "Another example game I made because I'm great",
    image:
      'https://static.giantbomb.com/uploads/scale_small/9/93770/2364832-snes_supermariorpg_2.jpg',
    extraImages: [
      'https://cdn.vox-cdn.com/thumbor/yx5syTUG6h-g4E-odlGPTC8qsYY=/148x0:1768x1080/1200x800/filters:focal(148x0:1768x1080)/cdn.vox-cdn.com/uploads/chorus_image/image/46485808/dark_souls_3.0.0.jpg',
      'https://2static.fjcdn.com/pictures/My+dark+souls+3+screenshots_c463c8_5905031.jpg',
      'http://www.mobygames.com/images/shots/l/884625-dark-souls-iii-the-ringed-city-windows-screenshot-inside-a.jpg'
    ],
    playText: ''
  }
});

export default exampleData;
