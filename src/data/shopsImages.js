import amazon1x from '../images/shoplist/amazon1x.png';
import amazon2x from '../images/shoplist/amazon2x.png';
import apple1x from '../images/shoplist/apple1x.png';
import apple2x from '../images/shoplist/apple2x.png';
import bookshop1x from '../images/shoplist/bookshop1x.png';
import bookshop2x from '../images/shoplist/bookshop2x.png';

const bookShopsIcons = [
  {
    x1: new URL(amazon1x, import.meta.url),
    x2: new URL(amazon2x, import.meta.url),
    width: '62',
    height: '19',
  },
  {
    x1: new URL(apple1x, import.meta.url),
    x2: new URL(apple2x, import.meta.url),
    width: '33',
    height: '32',
  },
  {
    x1: new URL(bookshop1x, import.meta.url),
    x1: new URL(bookshop2x, import.meta.url),
    width: '38',
    height: '36',
  },
];

export { bookShopsIcons };
