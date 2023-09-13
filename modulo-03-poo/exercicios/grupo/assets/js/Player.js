
import { Boss } from "./Boss.js";
import { Chest } from "./Chest.js";
import { Entity } from "./Entity.js";
import { Map } from "./Map.js";
import { Mob } from "./Mob.js";
import { Npc } from "./NPC.js";
import { Battle } from "./Battle.js";

export class Player extends Entity {
  #actualLife = 20;
  #maxLife = 20;
  #attack = 10;
  #defense = 8;

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

  initInteraction(entitiesToInteract) {
    if (entitiesToInteract.length === 1) return;

    if (entitiesToInteract[1] instanceof Mob) {
      const init = confirm('Deseja iniciar batalha?');

      if (!init) {
        Battle.escape(entitiesToInteract[0]);
        alert(`${entitiesToInteract[0].name} fugiu da batalha e recebeu uma punição!`);
        return;
      }

      const battle = new Battle();

      const attack = battle.init(entitiesToInteract[0], entitiesToInteract[1]);

      let resultInteract = {
        isPlayerTurn: attack.isPlayerTurn,
        isBattleEnded: attack.isBattleEnded,
        message: attack.message
      }

      while (!resultInteract.isBattleEnded) {
        resultInteract = this.battleInteraction(entitiesToInteract, battle, { ...resultInteract });
      }
    }

    // if (entitiesToInteract[1] instanceof Boss) {
    //   console.log("boss");
    // }

    if (entitiesToInteract[1] instanceof Npc) {
      console.log("npc");
    }

    if (entitiesToInteract[1] instanceof Chest && !entitiesToInteract[1].isOpen) {
      this.openChest(entitiesToInteract[1]);
      console.log(this);
      this.reRenderStats()
    }
  }

  battleInteraction(entitiesToInteract, battle, attack) {
    console.log(entitiesToInteract)

    if (attack.isPlayerTurn) {
      const proceed = confirm('Seguir na batalha?');
      attack = "";
      proceed ? attack = battle.move(entitiesToInteract[0], entitiesToInteract[1], true) :
        attack = battle.move(entitiesToInteract[0], entitiesToInteract[1], false);

    } else if (!attack.isBattleEnded) {
      attack = "";
      attack = battle.move(entitiesToInteract[1], entitiesToInteract[0], true);
      console.log(attack);
    }

    console.log(attack)

    return attack;
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
      let entitiesToInteract = Map.getEntitiesAtPosition({
        x: this.xActualPosition,
        y: this.yActualPosition,
      });
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

          entitiesToInteract = Map.getEntitiesAtPosition({
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

          entitiesToInteract = Map.getEntitiesAtPosition({
            x: this.xActualPosition,
            y: this.yActualPosition,
          });

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

          entitiesToInteract = Map.getEntitiesAtPosition({
            x: this.xActualPosition,
            y: this.yActualPosition,
          });

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

          entitiesToInteract = Map.getEntitiesAtPosition({
            x: this.xActualPosition,
            y: this.yActualPosition,
          });
          break;
      }
      this.initInteraction(entitiesToInteract);
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
    let entitiesToInteract = Map.getEntitiesAtPosition({
      x: this.xActualPosition,
      y: this.yActualPosition,
    });

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

      entitiesToInteract = Map.getEntitiesAtPosition({
        x: this.xActualPosition,
        y: this.yActualPosition,
      });
      this.initInteraction(entitiesToInteract);
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

      entitiesToInteract = Map.getEntitiesAtPosition({
        x: this.xActualPosition,
        y: this.yActualPosition,
      });
      this.initInteraction(entitiesToInteract);
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

      entitiesToInteract = Map.getEntitiesAtPosition({
        x: this.xActualPosition,
        y: this.yActualPosition,
      });
      this.initInteraction(entitiesToInteract);
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

      entitiesToInteract = Map.getEntitiesAtPosition({
        x: this.xActualPosition,
        y: this.yActualPosition,
      });
      this.initInteraction(entitiesToInteract);
    });
  }

  renderInitialStats(difficult) {
    const playerName = document.querySelector('span#playerName')
    const playerActualHealth = document.querySelector("span#playerActualHealth")
    const playerMaxHealth = document.querySelector("span#playerMaxHealth")
    const playerAttack = document.querySelector("span#playerAttack")
    const playerDefense = document.querySelector("span#playerDefense")

    this.attack += difficult.extraAttack
    this.actualLife += difficult.extraLife
    this.maxLife += difficult.extraLife
    this.defense += difficult.extraDefense

    console.log(Map.mappedEntities[0])
    playerName.innerHTML = this.name
    playerActualHealth.innerHTML = this.actualLife
    playerMaxHealth.innerHTML = this.maxLife
    playerAttack.innerHTML = this.attack
    playerDefense.innerHTML = this.defense
  }


  reRenderStats() {
    const playerName = document.querySelector('span#playerName')
    const playerActualHealth = document.querySelector("span#playerActualHealth")
    const playerMaxHealth = document.querySelector("span#playerMaxHealth")
    const playerAttack = document.querySelector("span#playerAttack")
    const playerDefense = document.querySelector("span#playerDefense")

    playerName.innerHTML = this.name
    playerActualHealth.innerHTML = this.actualLife
    playerMaxHealth.innerHTML = this.maxLife
    playerAttack.innerHTML = this.attack
    playerDefense.innerHTML = this.defense
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
    if (Object.keys(Map.difficult).length > 0) {
      this.renderInitialStats(Map.difficult)
    }
  }
}
