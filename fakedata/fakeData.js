import CakesSVG from '../components/svgs/Cakes';
import PizzaSVG from '../components/svgs/Pizza';
import SaladSVG from '../components/svgs/Salad';
import SushiSVG from '../components/svgs/Sushi';
import DrinkSVG from '../components/svgs/Drink';

export const categories = [
  {
    category: 'Salads',
    icon: <SaladSVG size={22} fill={'#fff'} />,
  },
  {
    category: 'Sushi',
    icon: <SushiSVG size={22} fill={'#fff'} />,
  },
  {
    category: 'Pizza',
    icon: <PizzaSVG size={30} fill={'#fff'} />,
  },
  {
    category: 'Cakes',
    icon: <CakesSVG size={22} fill={'#fff'} />,
  },
  {
    category: 'Drinks',
    icon: <DrinkSVG size={22} fill={'#fff'} />,
  },
];

export const dishes = [
  {
    title: 'Pumpkin soup',
    extendedTitle: 'Pumpkin soup',
    backgroundImage: require('../assets/photos/pumpkin-soup.jpg'),
    duration: 25,
    description: 'Le Bernadin, Enzo, Simple',
    price: 7.2,
    rating: 4.8,
    ratingCount: 18,
    calories: 189,
    details:
      "Pumpkin soup is a usually 'bound' soup made from a purée of pumpkin. It is made by combining the meat of a blended pumpkin with broth or stock.",
    ingredients: [3, 4],
  },
  {
    title: 'Roasted salmon',
    extendedTitle: 'Roasted salmon with vegetables',
    backgroundImage: require('../assets/photos/roasted-salmon.jpg'),
    duration: 45,
    description: 'O’Charley’s, Kinza',
    price: 23.2,
    rating: 5.0,
    ratingCount: 6,
    calories: 325,
    details:
      "The salmon looks great on the plate because it's a whole steak. And bright vegetables, which you can choose yourself, will delight in color and complement the picture.",
    ingredients: [0, 1, 2, 3, 4],
  },
  {
    title: 'Special sushi',
    extendedTitle: "Chef's award-winning special sushi",
    backgroundImage: require('../assets/photos/sushi.jpg'),
    duration: 27,
    description: "Chef's Special",
    price: 50,
    rating: 5.0,
    ratingCount: 72,
    calories: 200,
    details:
      'Sushi is a traditional Japanese dish of prepared vinegared rice, usually with some sugar and salt, accompanying a variety of ingredients, such as seafood, often raw, and vegetables.',
    ingredients: [1, 2, 4],
  },
  {
    title: 'Fake dish',
    extendedTitle: "Chef's award-winning special sushi",
    backgroundImage: require('../assets/photos/fake.jpg'),
    duration: 12,
    description: "Chef's Special",
    price: 54,
    rating: 4.0,
    ratingCount: 72,
    calories: 200,
    details:
      'Sushi is a traditional Japanese dish of prepared vinegared rice, usually with some sugar and salt, accompanying a variety of ingredients, such as seafood, often raw, and vegetables.',
    ingredients: [1, 2, 4],
  },
  {
    title: 'Fake dish',
    extendedTitle: "Chef's award-winning special sushi",
    backgroundImage: require('../assets/photos/fake001.jpg'),
    duration: 13,
    description: "Chef's Special",
    price: 16,
    rating: 2.3,
    ratingCount: 72,
    calories: 200,
    details:
      'Sushi is a traditional Japanese dish of prepared vinegared rice, usually with some sugar and salt, accompanying a variety of ingredients, such as seafood, often raw, and vegetables.',
    ingredients: [1, 2, 4],
  },
];

export const ingredients = [
  {
    name: 'salmon',
    image: require('../assets/icons/salmon.png'),
  },
  {
    name: 'avacado',
    image: require('../assets/icons/avacado.png'),
  },
  {
    name: 'tomato',
    image: require('../assets/icons/tomato.png'),
  },
  {
    name: 'greens',
    image: require('../assets/icons/greens.png'),
  },
  {
    name: 'pepper',
    image: require('../assets/icons/pepper.png'),
  },
];
