let users = [
  {
    mobile: "0173514630",
    password: "random",
  },
  {
    mobile: "0173514655",
    password: "JackPassword",
  },
];

const privateProducts = [
  {
    id: 1,
    title: "Black Coffee",
    img: "https://i.ibb.co/gTgRfNz/coffee.jpg",
    stock: 75,
    price: 350,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aspernatur sequi quasi assumenda placeat natus fuga odio a eius tempore obcaecati facilis, magni itaque! Blanditiis praesentium dolore sit, numquam fuga ratione suscipit, rem id corrupti, necessitatibus quasi recusandae! Officia ut debitis fugit sed maxime provident, quisquam illo numquam in nam?",
    rating: 4.5,
  },
  {
    id: 2,
    title: "( GG ) Leather Loafers Men Fashion Casual Solid Moccasin For Men",
    img: "https://i.ibb.co/yXtCn5k/loafer.jpg",
    stock: 37,
    price: 1350,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aspernatur sequi quasi assumenda placeat natus fuga odio a eius tempore obcaecati facilis, magni itaque! Blanditiis praesentium dolore sit, numquam fuga ratione suscipit, rem id corrupti, necessitatibus quasi recusandae! Officia ut debitis fugit sed maxime provident, quisquam illo numquam in nam?",
    rating: 4.0,
  },
  {
    id: 3,
    title: "Long Lasting Black Artificial Leather Belt For Men",
    img: "https://i.ibb.co/34XXCHH/leather-Belt.jpg",
    stock: 73,
    price: 850,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aspernatur sequi quasi assumenda placeat natus fuga odio a eius tempore obcaecati facilis, magni itaque! Blanditiis praesentium dolore sit, numquam fuga ratione suscipit, rem id corrupti, necessitatibus quasi recusandae! Officia ut debitis fugit sed maxime provident, quisquam illo numquam in nam?",
    rating: 4.2,
  },
  {
    id: 4,
    title: "Lenovo HE05x Sports Magnetic Wireless Earphones - **Black**",
    img: "https://i.ibb.co/bQ34sDw/headphones.jpg",
    stock: 100,
    price: 270,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aspernatur sequi quasi assumenda placeat natus fuga odio a eius tempore obcaecati facilis, magni itaque! Blanditiis praesentium dolore sit, numquam fuga ratione suscipit, rem id corrupti, necessitatibus quasi recusandae! Officia ut debitis fugit sed maxime provident, quisquam illo numquam in nam?",
    rating: 5,
  },
  {
    id: 5,
    title: "Pure Leather Wallet For Men",
    img: "https://i.ibb.co/3s8jVYc/wallet.jpg",
    stock: 80,
    price: 400,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aspernatur sequi quasi assumenda placeat natus fuga odio a eius tempore obcaecati facilis, magni itaque! Blanditiis praesentium dolore sit, numquam fuga ratione suscipit, rem id corrupti, necessitatibus quasi recusandae! Officia ut debitis fugit sed maxime provident, quisquam illo numquam in nam?",
    rating: 4.8,
  },
  {
    id: 6,
    title: "Anti-theft Travel Bag Male USB Charging Chest Bag ",
    img: "https://i.ibb.co/RNbVZDW/bag.jpg",
    stock: 80,
    price: 400,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aspernatur sequi quasi assumenda placeat natus fuga odio a eius tempore obcaecati facilis, magni itaque! Blanditiis praesentium dolore sit, numquam fuga ratione suscipit, rem id corrupti, necessitatibus quasi recusandae! Officia ut debitis fugit sed maxime provident, quisquam illo numquam in nam?",
    rating: 4.8,
  },
  {
    id: 7,
    title: "M3 Mini Metal Portable Wireless Bluetooth Speaker",
    img: "https://i.ibb.co/9ssTJ7R/speaker.jpg",
    stock: 80,
    price: 350,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aspernatur sequi quasi assumenda placeat natus fuga odio a eius tempore obcaecati facilis, magni itaque! Blanditiis praesentium dolore sit, numquam fuga ratione suscipit, rem id corrupti, necessitatibus quasi recusandae! Officia ut debitis fugit sed maxime provident, quisquam illo numquam in nam?",
    rating: 4.0,
  },
  {
    id: 8,
    title:
      "Men's Braided Leather Bracelet With Stainless Steel Magnetic Closure",
    img: "https://i.ibb.co/hZ6c81p/bracelet.jpg",
    stock: 280,
    price: 170,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aspernatur sequi quasi assumenda placeat natus fuga odio a eius tempore obcaecati facilis, magni itaque! Blanditiis praesentium dolore sit, numquam fuga ratione suscipit, rem id corrupti, necessitatibus quasi recusandae! Officia ut debitis fugit sed maxime provident, quisquam illo numquam in nam?",
    rating: 4.0,
  },
  {
    id: 9,
    title: "Apple_AirPods Pro (2nd generation) Active Noise Cancelling,",
    img: "https://i.ibb.co/JnmR3kT/airpods.jpg",
    stock: 80,
    price: 1500,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aspernatur sequi quasi assumenda placeat natus fuga odio a eius tempore obcaecati facilis, magni itaque! Blanditiis praesentium dolore sit, numquam fuga ratione suscipit, rem id corrupti, necessitatibus quasi recusandae! Officia ut debitis fugit sed maxime provident, quisquam illo numquam in nam?",
    rating: 4.0,
  },
  {
    id: 10,
    title: "Red Strawberry Imported Global Seeds -30 pcs Seeds",
    img: "https://i.ibb.co/WVJvKJ6/strawberry.jpg",
    stock: 80,
    price: 40,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aspernatur sequi quasi assumenda placeat natus fuga odio a eius tempore obcaecati facilis, magni itaque! Blanditiis praesentium dolore sit, numquam fuga ratione suscipit, rem id corrupti, necessitatibus quasi recusandae! Officia ut debitis fugit sed maxime provident, quisquam illo numquam in nam?",
    rating: 4.0,
  },
  {
    id: 11,
    title: "PSG 2021-2022 Football Soccer T-Shirt Jersey Paris",
    img: "https://www.flickr.com/photos/198047924@N02/52797604722/in/dateposted-public/lightbox/",
    stock: 180,
    price: 240,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aspernatur sequi quasi assumenda placeat natus fuga odio a eius tempore obcaecati facilis, magni itaque! Blanditiis praesentium dolore sit, numquam fuga ratione suscipit, rem id corrupti, necessitatibus quasi recusandae! Officia ut debitis fugit sed maxime provident, quisquam illo numquam in nam?",
    rating: 4.0,
  },
];

const publicPosts = [
  {
    title: "Post 3",
    content: "Post 3 is private",
  },
];

module.exports = { users, publicPosts, privateProducts };
