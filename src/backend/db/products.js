import { v4 as uuid } from "uuid";
/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Mobile | OnePlus",
    img: "https://oasis.opstatics.com/content/dam/oasis/page/2021/operation/1217/homepage/mo/02-OnePlus-9.jpg",
    model: "OnePlus-9",
    originalPrice: 28000,
    discountedPrice: 25200,
    rating: 4.9,
    discount: 10,
    categoryName: "mobile",
  },
  {
    _id: uuid(),
    title: "Mobile | Asus",
    img: "https://rog.asus.com/media/1563829664662.jpg",
    model: "Asus-Rog",
    originalPrice: 25000,
    discountedPrice: 22500,
    discount: 10,
    rating: 4.7,
    categoryName: "mobile"
  },
  {
    _id: uuid(),
    title: "Mobile | OnePlus",
    img: "https://www.cnet.com/a/img/DltWT4HUzvjbTgFtAPVsdCG68YE=/2021/03/22/b41fc357-647b-4219-a009-ce75faa99492/oneplus-9-pro-hoyle-promo-27.jpg",
    model: "OnePlus-9 Pro",
    originalPrice: 10000,
    discountedPrice: 9000,
    discount: 10,
    rating: 4.1,
    categoryName: "mobile"
  },
  {
    _id: uuid(),
    title: "Mobile | Samsung",
    img: "https://www.businessinsider.in/photo/81411871/best-samsung-mobile-phones-in-india.jpg?imgsize=176930",
    model: "Samsung S-6",
    originalPrice: 14000,
    discountedPrice: 12320,
    discount: 12,
    rating: 4.4,
    categoryName: "mobile"
  },
  {
    _id: uuid(),
    title: "Mobile | Samsung",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk_o9Dmn3g1Y1fEl5QvvkmDKZsXiR0dua8hg&usqp=CAU",
    model: "Samsung S-5",
    originalPrice: 18000,
    discountedPrice: 15300,
    discount: 15,
    rating: 4,
    categoryName: "mobile"
  },
  {
    _id: uuid(),
    title: "Mobile | Xiaomi",
    img: "https://fscl01.fonpit.de/userfiles/7446224/image/xiaomi-mi-note-10/xiaomi-mi-note-10-group2.jpg",
    model: "Mi Note-10",
    originalPrice: 20000,
    discountedPrice: 16000,
    discount: 20,
    rating: 3.6,
    categoryName: "mobile"
  },
  {
    _id: uuid(),
    title: "Mobile | Apple",
    img: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone12pro-pacific-blue_10132020_Full-Bleed-Image.jpg.large.jpg",
    model: "iPhone-12 pro",
    originalPrice: 21000,
    discountedPrice: 17220,
    discount: 18,
    rating: 3.8,
    categoryName: "mobile"
  },
  {
    _id: uuid(),
    title: "Mobile | Apple",
    img: "https://media.wired.com/photos/5e9f574ed42e6f0008f47b7a/master/w_2560%2Cc_limit/Gear-Top-Apple_new-iphone-se-white_04152020.jpg",
    model: "iPhone-SE",
    originalPrice: 30000,
    discountedPrice: 27000,
    discount: 10,
    rating: 1.9,
    categoryName: "mobile"
  },
  {
    _id: uuid(),
    title: "Laptop | Apple",
    img: "https://images.macrumors.com/t/9Sa68cMYP1DLwHamGeVb0dRPRMY=/2500x/article-new/2021/04/macbook-air-deals.jpg",
    model: "Macbook-Air",
    originalPrice: 17500,
    discountedPrice: 14700,
    discount: 16,
    rating: 2.5,
    categoryName: "laptop"
  },
  {
    _id: uuid(),
    title: "Laptop | hp",
    img: "https://www.reliancedigital.in/wp-content/uploads/2015/09/HP-Pavilion-14-v015tu.jpg",
    model: "hp-115",
    originalPrice: 8999,
    discountedPrice: 7649,
    discount: 15,
    rating: 3.5,
    categoryName: "laptop",
  },
  {
    _id: uuid(),
    title: "Laptop | Acer",
    img: "https://www.okayprice.in/wp-content/uploads/2020/07/acer-aspire-3-a315-42-close-okayprice.jpg",
    model: "Acer Aspire-5",
    originalPrice: 10000,
    discountedPrice: 9500,
    discount: 5,
    rating: 2.8,
    categoryName: "laptop"
  },
  {
    _id: uuid(),
    title: "Laptop | Asus",
    img: "https://i.gadgets360cdn.com/large/Asus_ROG_Strix_Scar_II_logo_ndtv_1560187834653.jpg?downsize=400:*",
    model: "Asus ROG",
    originalPrice: 42500,
    discountedPrice: 34850,
    discount: 18,
    rating: 4.9,
    categoryName: "laptop",
  }
];
