import { Boss } from "./Boss.js";
import { Chest } from "./Chest.js";
import { Entity } from "./Entity.js";
import { Map } from "./Map.js";
import { Mob } from "./Mob.js";
import { Npc } from "./NPC.js";

export class Player extends Entity {
  #actualLife;
  #maxLife;
  #attack;
  #defense;

  set actualLife(actualLife) {
    this.#actualLife = actualLife;
  }

  set maxLife(maxLife) {
    this.#maxLife = maxLife;
  }

  set attack(attack) {
    this.#attack = attack;
  }

  set defense(defense) {
    this.#defense = defense;
  }

  get actualLife() {
    return this.#actualLife;
  }
  get maxLife() {
    return this.#maxLife;
  }
  get attack() {
    return this.#attack;
  }
  get defense() {
    return this.#defense;
  }
  openChest(chest) {
    chest.give(this);
  }

  initInteraction(entitiesToInteract){
    if (entitiesToInteract instanceof Mob) {
      console.log("mob");
    }

    if (entitiesToInteract instanceof Boss) {
      console.log("boss");
    }

    if (entitiesToInteract instanceof Npc) {
      console.log("npc");
    }

    if (entitiesToInteract instanceof Chest) {
      console.log("chest");
    }
  }

  movePlayerOnKeyUp({
    player,
    playerImage,
    initializedPlayer,
    playerClasses,
    playerImageClasses,
  }) {
    document.addEventListener("keyup", (e) => {
      e.preventDefault();

      const eventCode = e.code.toLowerCase();

      let playerFilteredClasses;
      let imagePlayerFilteredClasses;
      switch (eventCode) {
        case "keyw":
        case "arrowup":
          initializedPlayer.moveUp();
          playerFilteredClasses = [...playerClasses].filter(
            (c) => !c.startsWith("top")
          );
          playerFilteredClasses.push(
            `top-[calc(${initializedPlayer.yActualPosition}*20px)]`
          );
          player.classList = playerFilteredClasses.join(" ");

          imagePlayerFilteredClasses = [...playerImageClasses].filter(
            (c) => !c.includes("top")
          );
          imagePlayerFilteredClasses.push(`-top-[3.75rem]`);
          playerImage.classList = imagePlayerFilteredClasses.join(" ");

          const entitiesToInteract = Map.getEntitiesAtPosition({
            x: this.xActualPosition,
            y: this.yActualPosition,
          });


          break;
        case "keyd":
        case "arrowright":
          initializedPlayer.moveRight();
          playerFilteredClasses = [...playerClasses].filter(
            (c) => !c.startsWith("left")
          );
          playerFilteredClasses.push(
            `left-[calc(${initializedPlayer.xActualPosition}*20px)]`
          );
          player.classList = playerFilteredClasses.join(" ");

          imagePlayerFilteredClasses = [...playerImageClasses].filter(
            (c) => !c.includes("top")
          );
          imagePlayerFilteredClasses.push(`-top-10`);
          playerImage.classList = imagePlayerFilteredClasses.join(" ");
          break;
        case "keys":
        case "arrowdown":
          initializedPlayer.moveDown();
          playerFilteredClasses = [...playerClasses].filter(
            (c) => !c.startsWith("top")
          );
          playerFilteredClasses.push(
            `top-[calc(${initializedPlayer.yActualPosition}*20px)]`
          );
          player.classList = playerFilteredClasses.join(" ");

          imagePlayerFilteredClasses = [...playerImageClasses].filter(
            (c) => !c.includes("top")
          );
          imagePlayerFilteredClasses.push(`top-0`);
          playerImage.classList = imagePlayerFilteredClasses.join(" ");
          break;
        case "keya":
        case "arrowleft":
          initializedPlayer.moveLeft();
          playerFilteredClasses = [...playerClasses].filter(
            (c) => !c.startsWith("left")
          );
          playerFilteredClasses.push(
            `left-[calc(${initializedPlayer.xActualPosition}*20px)]`
          );
          player.classList = playerFilteredClasses.join(" ");

          imagePlayerFilteredClasses = [...playerImageClasses].filter(
            (c) => !c.includes("top")
          );
          imagePlayerFilteredClasses.push(`-top-5`);
          playerImage.classList = imagePlayerFilteredClasses.join(" ");
          break;
      }
    });
  }

  movePlayerOnClick({
    player,
    playerImage,
    initializedPlayer,
    playerClasses,
    playerImageClasses,
  }) {
    const aButton = document.querySelector("#move-a");
    const wButton = document.querySelector("#move-w");
    const sButton = document.querySelector("#move-s");
    const dButton = document.querySelector("#move-d");

    aButton.addEventListener("click", () => {
      let playerFilteredClasses;
      let imagePlayerFilteredClasses;
      initializedPlayer.moveLeft();
      playerFilteredClasses = [...playerClasses].filter(
        (c) => !c.startsWith("left")
      );
      playerFilteredClasses.push(
        `left-[calc(${initializedPlayer.xActualPosition}*20px)]`
      );
      player.classList = playerFilteredClasses.join(" ");

      imagePlayerFilteredClasses = [...playerImageClasses].filter(
        (c) => !c.includes("top")
      );
      imagePlayerFilteredClasses.push(`-top-5`);
      playerImage.classList = imagePlayerFilteredClasses.join(" ");
    });

    wButton.addEventListener("click", () => {
      let playerFilteredClasses;
      let imagePlayerFilteredClasses;
      initializedPlayer.moveUp();
      playerFilteredClasses = [...playerClasses].filter(
        (c) => !c.startsWith("top")
      );
      playerFilteredClasses.push(
        `top-[calc(${initializedPlayer.yActualPosition}*20px)]`
      );
      player.classList = playerFilteredClasses.join(" ");

      imagePlayerFilteredClasses = [...playerImageClasses].filter(
        (c) => !c.includes("top")
      );
      imagePlayerFilteredClasses.push(`-top-[3.75rem]`);
      playerImage.classList = imagePlayerFilteredClasses.join(" ");
    });

    sButton.addEventListener("click", () => {
      let playerFilteredClasses;
      let imagePlayerFilteredClasses;
      initializedPlayer.moveDown();
      playerFilteredClasses = [...playerClasses].filter(
        (c) => !c.startsWith("top")
      );
      playerFilteredClasses.push(
        `top-[calc(${initializedPlayer.yActualPosition}*20px)]`
      );
      player.classList = playerFilteredClasses.join(" ");

      imagePlayerFilteredClasses = [...playerImageClasses].filter(
        (c) => !c.includes("top")
      );
      imagePlayerFilteredClasses.push(`top-0`);
      playerImage.classList = imagePlayerFilteredClasses.join(" ");
    });

    dButton.addEventListener("click", () => {
      let playerFilteredClasses;
      let imagePlayerFilteredClasses;
      initializedPlayer.moveRight();
      playerFilteredClasses = [...playerClasses].filter(
        (c) => !c.startsWith("left")
      );
      playerFilteredClasses.push(
        `left-[calc(${initializedPlayer.xActualPosition}*20px)]`
      );
      player.classList = playerFilteredClasses.join(" ");

      imagePlayerFilteredClasses = [...playerImageClasses].filter(
        (c) => !c.includes("top")
      );
      imagePlayerFilteredClasses.push(`-top-10`);
      playerImage.classList = imagePlayerFilteredClasses.join(" ");
    });
  }

  init() {
    const form = document.querySelector("#form");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const formValues = Object.fromEntries(formData.entries());

      const name = formValues["name"];
      const difficult = formValues["difficult"];
      const character = formValues["character"];

      this.name = name;
      this.character = character;
      this.yActualPosition = 0;
      this.xActualPosition = 22;

      Map.difficult = difficult;
      Map.resetMappedEntities();
      Map.addEntityToMappedEntities(this);

      this.render();
    });
  }

  render() {
    const screenMap = document.querySelector("#map");
    const player = document.createElement("div");
    const playerImage = document.createElement("img");
    const imageSource = `../grupo/assets/images/player/${this.character}.png`;

    playerImage.src = imageSource;
    playerImage.className = "absolute top-0 left-0";

    player.className = `absolute top-[calc(${this.yActualPosition}*20px)] left-[calc(${this.xActualPosition}*20px)] w-5 h-5 overflow-hidden bg-black/40`;
    player.id = "player";
    player.appendChild(playerImage);

    screenMap.appendChild(player);

    const mapInstance = new Map();
    mapInstance.init(this);
  }
}
