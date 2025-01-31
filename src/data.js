const getRandomImage = () =>
  `https://picsum.photos/800/600?random=${Math.floor(Math.random() * 100)}`

export const items = [
  {
    image: getRandomImage(),
    link: getRandomImage(),
    title: 'Image 1',
  },
  {
    image: 'https://picsum.photos/800/600?random=2',
    link: getRandomImage(),
    title: 'Image 2',
  },
  {
    image: getRandomImage(),
    link: getRandomImage(),
    title: 'Image 3',
  },
  {
    image: getRandomImage(),
    link: getRandomImage(),
    title: 'Image 4',
  },
]

export const moreItems = [
  {
    image: getRandomImage(),
    link: getRandomImage(),
    title: 'Image 1',
  },
  {
    image: 'https://picsum.photos/800/600?random=2',
    link: getRandomImage(),
    title: 'Image 2',
  },
  {
    image: getRandomImage(),
    link: getRandomImage(),
    title: 'Image 3',
  },
  {
    image: getRandomImage(),
    link: getRandomImage(),
    title: 'Image 4',
  },
  {
    image: 'https://picsum.photos/800/600?random=2',
    link: getRandomImage(),
    title: 'Image 5',
  },
  {
    image: getRandomImage(),
    link: getRandomImage(),
    title: 'Image 6',
  },
  {
    image: getRandomImage(),
    link: getRandomImage(),
    title: 'Image 7',
  },
]
