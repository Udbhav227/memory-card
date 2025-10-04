import rocket from "./assets/img/rocket.jpg";
import bulbasaur from "./assets/img/bulbasaur.png";
import charizard from "./assets/img/charizard.png";
import charmander from "./assets/img/charmander.png";
import gengar from "./assets/img/gengar.png";
import squirtle from "./assets/img/squirtle.png";
import pikachu from "./assets/img/pikachu.png";
import psyduck from "./assets/img/psyduck.png";
import jigglypuff from "./assets/img/jigglypuff.png";
import snorlax from "./assets/img/snorlax.png";

const characters = [
  {
    id: crypto.randomUUID(),
    name: "Bulbasaur",
    src: bulbasaur,
    clicked: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Charmander",
    src: charmander,
    clicked: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Squirtle",
    src: squirtle,
    clicked: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Pikachu",
    src: pikachu,
    clicked: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Psyduck",
    src: psyduck,
    clicked: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Gengar",
    src: gengar,
    clicked: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Team Rocket",
    src: rocket,
    clicked: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Charizard",
    src: charizard,
    clicked: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Jigglypuff",
    src: jigglypuff,
    clicked: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Snorlax",
    src: snorlax,
    clicked: false,
  },
];

export default characters;
