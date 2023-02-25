import CaesarSalad from "../../assets/caesar-salad.jpg";
import NicoiseSalad from "../../assets/nicoise-salad.jpg";
import BBq from "../../assets/bbq-potato-salad.jpg";
import WaldorfSalad from "../../assets/waldorf-salad.jpg";
import Apple from "../../assets/apple.png";
import Broklie from "../../assets/n.png";
import Nut from "../../assets/i.png";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Caesar Salad",
    description: "Finest veggies",
    price: 22.99,
    image: `${CaesarSalad}`,
  },
  {
    id: "m2",
    name: "Nicoise Salad",
    description: "Finest veggies",
    price: 16.5,
    image: `${NicoiseSalad}`,
  },
  {
    id: "m3",
    name: "BBQ Potato S",
    description: "Finest veggies",
    price: 12.99,
    image: `${BBq}`,
  },
  {
    id: "m4",
    name: "Waldorf Salad",
    description: "Finest veggies",
    price: 18.99,
    image: `${WaldorfSalad}`,
  },
  {
    id:"m5",
    name: "Apple-Sprout S",
    description: "Finest veggies",
    price: 20.13,
    image: `${Apple}`,
  },
  {
    id:"m6",
    name: "Broccoli Salad",
    description: "Finest veggies",
    price: 10.33,
    image: `${Broklie}`,
  },
  {
    id:"m7",
    name: "Nut Coleslaw",
    description: "Finest veggies",
    price: 25.50,
    image: `${Nut}`,
  }
];

export default DUMMY_MEALS;
