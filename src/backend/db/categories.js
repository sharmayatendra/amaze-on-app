import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Laptop",
    description:
      "Checkout the exciting range of laptops to stay updated with the latest technology",
    heading: "Exclusive sale",
    subHeading: "up to 20% off",
    img: "https://cdn.mos.cms.futurecdn.net/uWjEogFLUTBc8mSvagdiuP.jpg"
  },
  {
    _id: uuid(),
   categoryName: "Mobile",
    description:
      "Checkout the exciting range of mobile to stay updated with the latest technology",
    heading: "Exclusive sale",
    subHeading: "up to 20% off",
    img: "https://oasis.opstatics.com/content/dam/oasis/page/2021/operation/1217/homepage/mo/02-OnePlus-9.jpg"
  },
];
