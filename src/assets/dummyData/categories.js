import art from "../images/art.png";
import collectibles from "../images/collectibles.png";
import photography from "../images/photography.png";
import utility from "../images/utility.png";
import virtual from "../images/virtual-worlds.png";

export const categories = [
  {
    name: "art",
    image: art,
    link: null,
    //dont use this method for to generate keys i use just to remove the err since this is dummy data
    id: Math.random().toString(32).slice(2, 20),
  },
  {
    name: "collectibles",
    image: collectibles,
    link: null,
    //dont use this method for to generate keys i use just to remove the err since this is dummy data
    id: Math.random().toString(32).slice(2, 20),
  },

  {
    name: "utility",
    image: utility,
    link: null,
    //dont use this method for to generate keys i use just to remove the err since this is dummy data
    id: Math.random().toString(32).slice(2, 20),
  },
  {
    name: "photography",
    image: photography,
    link: null,
    //dont use this method for to generate keys i use just to remove the err since this is dummy data
    id: Math.random().toString(32).slice(2, 20),
  },
  // {
  //   name: "virtual",
  //   image: virtual,
  //   link: null,
  //   //dont use this method for to generate keys i use just to remove the err since this is dummy data
  //   id: Math.random().toString(32).slice(2, 20),
  // },
];
