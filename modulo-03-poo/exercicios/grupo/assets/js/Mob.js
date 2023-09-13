import { Map } from "./Map.js";
import { Entity } from "./Entity.js";

export class Mob extends Entity {
  static #firstNames = [
    "Seraphina",
    "Alistair",
    "Gideon",
    "Isolde",
    "Thaddeus",
    "Evangeline",
    "Leander",
    "Rosalind",
    "Percival",
    "Elowen",
    "Lucian",
    "Seraphim",
    "Ophelia",
    "Atticus",
    "Theodora",
    "Tristan",
    "Evadne",
    "Caspian",
    "Callista",
    "Alaric",
  ];
  static #secondNames = [
    "Ravenscroft",
    "Blackwood",
    "Hawthorne",
    "Ashbourne",
    "Whitethorn",
    "Ironheart",
    "Silverlake",
    "Stormbringer",
    "Starfall",
    "Moonshadow",
    "Nightshade",
    "Goldenshield",
    "Silverwing",
    "Ironfist",
    "Stormcloak",
    "Dragonslayer",
    "Stagheart",
    "Crowhaven",
    "Willowbrook",
    "Frostbloom",
  ];

  #maxHealth;
  #actualHealth;
  #minAttack;
  #maxAttack;
  #minDefense;
  #maxDefense;
  #isVisible;
  #attack;
  #defense;

  constructor({ name, isVisible, xActualPosition, yActualPosition }) {
    super();
    this.name = name;
    this.#isVisible = isVisible;

    if (Map.isPositionValid({ x: xActualPosition, y: yActualPosition })) {
      this.xActualPosition = xActualPosition;
      this.yActualPosition = yActualPosition;

      Map.addEntityToMappedEntities(this);
      this.render();
    }
  }

  get health() {
    return this.#actualHealth;
  }

  get maxLife() {
    return this.#maxHealth;
  }

  get actualLife() {
    return this.#actualHealth;
  }

  set health(damage) {
    if (damage > 0) {
      this.#actualHealth -= damage;
    }
  }

  get visibility() {
    return this.#isVisible;
  }

  get maxHealth() {
    return this.#maxHealth;
  }

  get actualHealth() {
    return this.#actualHealth;
  }

  get minAttack() {
    return this.#minAttack;
  }

  get maxAttack() {
    return this.#maxAttack;
  }

  get minDefense() {
    return this.#minDefense;
  }

  get maxDefense() {
    return this.#maxDefense;
  }
  set maxHealth(maxHealth) {
    this.#maxHealth = maxHealth;
  }

  set actualHealth(actualHealth) {
    this.#actualHealth = actualHealth;
  }

  set minAttack(minAttack) {
    this.#minAttack = minAttack;
  }

  set maxAttack(maxAttack) {
    this.#maxAttack = maxAttack;
  }

  set minDefense(minDefense) {
    this.#minDefense = minDefense;
  }

  set maxDefense(maxDefense) {
    this.#maxDefense = maxDefense;
  }

  get attack() {
    return this.#attack;
  }

  get defense() {
    return this.#defense;
  }

  setAttack() {
    const min = this.#minAttack;
    const max = this.#maxAttack;

    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  setDefense() {
    const min = this.#minDefense;
    const max = this.#maxDefense;

    return  Math.floor(Math.random() * (max - min + 1) + min);
  }

  toggleVisibility() {
    this.#isVisible = !this.#isVisible;
  }

  setMaxHealth() {
    return Math.floor(Math.random() * 30 + 10);
  }

  setMinAttack() {
    return Math.floor(Math.random() * 10 + 1);
  }

  setMaxAttack() {
    return Math.floor(Math.random() * 20 + this.#minAttack);
  }

  setMinDefense() {
    return Math.floor(Math.random() * 5 + 1);
  }

  setMaxDefense() {
    return Math.floor(Math.random() * 10 + this.#minDefense);
  }

  static generateRandomName() {
    const firstName =
      Mob.#firstNames[Math.floor(Math.random() * Mob.#firstNames.length)];
    const secondName =
      Mob.#secondNames[Math.floor(Math.random() * Mob.#secondNames.length)];
    return `${firstName} ${secondName}`;
  }

  static generateRandomVisibility() {
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    return randomNumber === 1 ? false : true;
  }

  init() {
    this.#maxHealth = this.setMaxHealth();
    this.#actualHealth = this.#maxHealth;
    this.#minAttack = this.setMinAttack();
    this.#maxAttack = this.setMaxAttack();
    this.#minDefense = this.setMinDefense();
    this.#maxDefense = this.setMaxDefense();
    this.#attack = this.setAttack();
    this.#defense = this.setDefense();
  }

  render() {
    if (this.#isVisible) {
      const screenMap = document.querySelector("#map");
      const mob = document.createElement("div");
      const mobImage = document.createElement("img");
      const imageSource = `../grupo/assets/images/npc/black-guard.png`;

      mobImage.src = imageSource;
      mobImage.className = "absolute top-0 left-0";

      mob.className = `absolute top-[calc(${this.yActualPosition}*20px)] left-[calc(${this.xActualPosition}*20px)] w-5 h-5 overflow-hidden`;
      mob.appendChild(mobImage);

      screenMap.appendChild(mob);
    }
  }
}

// const mob = new Mob({
//   name: "teste",
//   isVisible: false,
//   xActualPosition: 4,
//   yActualPosition: 5,
// });
// mob.init();

// console.log(mob);

// console.log(mob.attack());
// console.log(mob.defend());

// mob.health = 2;
