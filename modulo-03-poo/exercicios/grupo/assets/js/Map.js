import { Mob } from "./Mob.js";
import { Boss } from "./Boss.js";
import { Chest } from "./Chest.js";
import { Battle } from "./Battle.js";

export class Map {
  // x51 - 1020
  // y30 - 600
  static #mapSpots = [
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,
      0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,
      0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,
      0,
    ],
    [
      0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
      0,
    ],
    [
      1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1,
      1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
      0,
    ],
    [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1,
      1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0,
      0,
    ],
    [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1,
      1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0,
      0,
    ],
    [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0,
      0,
    ],
    [
      0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0,
      0,
    ],
    [
      0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0,
      0,
    ],
    [
      0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0,
      0,
    ],
    [
      0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0,
      0,
    ],
    [
      0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0,
      0,
    ],
    [
      0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0,
      0,
    ],
    [
      0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0,
      0,
    ],
    [
      0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0,
      0,
    ],
    [
      0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0,
      0,
    ],
    [
      0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0,
      0,
    ],
    [
      0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0,
      0,
    ],
    [
      0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0,
      0,
    ],
    [
      0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0,
      0,
    ],
    [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0,
      0,
    ],
    [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0,
      0,
    ],
    [
      1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0,
      0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0,
      0,
    ],
    [
      1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0,
      0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0,
      0,
    ],
    [
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0,
      0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0,
      0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,
      0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,
      0,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0,
      0,
    ],
  ];
  static #mappedEntities = [];
  static #difficultSettings = {
    easy: {
      extraLife: 5,
      extraAttack: 5,
      extraDefense: 5,
      extraHitPercentChance: 40,
      extraDefensePercentChance: 40,
      positiveLootOutcomePercentChance: 90,
      bossBlessingNumber: 2,
    },
    normal: {
      extraLife: 4,
      extraAttack: 4,
      extraDefense: 4,
      extraHitPercentChance: 30,
      extraDefensePercentChance: 30,
      positiveLootOutcomePercentChance: 80,
      bossBlessingNumber: 4,
    },
    hard: {
      extraLife: 2,
      extraAttack: 2,
      extraDefense: 2,
      extraHitPercentChance: 15,
      extraDefensePercentChance: 15,
      positiveLootOutcomePercentChance: 70,
      bossBlessingNumber: 6,
    },
    pro: {
      extraLife: 0,
      extraAttack: 0,
      extraDefense: 0,
      extraHitPercentChance: 0,
      extraDefensePercentChance: 0,
      positiveLootOutcomePercentChance: 60,
      bossBlessingNumber: 8,
    },
  };
  static #difficult = {};

  static addEntity({ id, y, x }) {
    const existingPosition = Map.isPositionValid({
      x,
      y,
    });

    if (!existingPosition) "Posição do mapa inválida";
  }

  static get mapSpots() {
    return Map.#mapSpots;
  }

  static get mappedEntities() {
    return this.#mappedEntities;
  }

  static updateEntity(entity) {
    const entityIndex = Map.#mappedEntities.findIndex(
      (ent) => ent.id === entity.id
    );
    Map.#mappedEntities.splice(entityIndex, 1, entity);
  }

  static resetMappedEntities() {
    this.#mappedEntities = [];
  }

  static canMove({ x, y }) {
    if (x < 0 || y < 0) {
      return false;
    }

    const maxYIndex = Map.mapSpots.length - 1;
    const maxXIndex = Map.mapSpots[0].length - 1;

    if (y > maxYIndex || x > maxXIndex) {
      return false;
    }

    // console.log(this.isPositionValid({ x, y }))
    const isPositionValid = Map.isPositionValid({ x, y });

    if (Map.#mapSpots[y] && isPositionValid) {
      return Map.#mapSpots[y][x] === 1;
    }
    return false;
  }

  static isPositionValid({ y, x }) {
    return !!Map.#mapSpots[y]?.length && !!Map.#mapSpots[y][x];
  }

  static isPositionUsed({ y, x }) {
    const item = Map.#mappedEntities.find((entity) => {
      return entity.xActualPosition === x && entity.yActualPosition === y;
    });

    return !!item?.id;
  }

  static addEntityToMappedEntities(entity) {
    Map.#mappedEntities.push(entity);
  }

  static getEntitiesAtPosition({ x, y }) {
    return Map.mappedEntities.filter(
      (entity) => entity.xActualPosition === x && entity.yActualPosition === y
    );
  }

  static get difficult() {
    return Map.#difficult;
  }

  static set difficult(diff) {
    Map.#difficult = Map.#difficultSettings[diff];
    Map.#difficult.difficult = diff;
  }

  updateSpotStatus({ x, y, status }) {
    const existingPosition = Map.isPositionValid({ x, y });

    if (!existingPosition) "posição do mapa não existe";

    switch (status) {
      case true:
        Map.#mapSpots[x][y] = 1;
        break;
      default:
        Map.#mapSpots[x][y] = 0;
        break;
    }
  }

  #init(initializedPlayer) {
    // const player = Map.mappedEntities.find(entity => entity.id === 1)
    const player = document.querySelector("#player");
    const playerImage = player.querySelector("img");

    const playerClasses = player.classList;
    const playerImageClasses = playerImage.classList;

    initializedPlayer.movePlayerOnKeyUp({
      player,
      playerImage,
      initializedPlayer,
      playerClasses,
      playerImageClasses,
    });

    initializedPlayer.movePlayerOnClick({
      player,
      playerImage,
      initializedPlayer,
      playerClasses,
      playerImageClasses,
    });
  }

  renderInitialMobs() {
    for (let i = 0; i < 100; i++) {
      const x = Math.floor(Math.random() * 51);
      const y = Math.floor(Math.random() * 30);

      const isPositionValid = Map.isPositionValid({
        x,
        y,
      });

      const isPositionUsed = Map.isPositionUsed({ x, y });

      if (!isPositionValid || isPositionUsed) {
      } else {
        const mob = new Mob({
          name: Mob.generateRandomName(),
          isVisible: Mob.generateRandomVisibility(),
          xActualPosition: x,
          yActualPosition: y,
        });
        mob.init();
      }
    }
  }

  renderBoss() {
    const x = 44;
    const y = 14;
    new Boss(x, y).init();
  }

  renderChests() {
    for (let i = 0; i < 30; i++) {
      const x = Math.floor(Math.random() * 51);
      const y = Math.floor(Math.random() * 30);

      const isPositionValid = Map.isPositionValid({
        x,
        y,
      });

      const isPositionUsed = Map.isPositionUsed({ x, y });

      if (isPositionValid && !isPositionUsed) {
        new Chest(x, y).init();
      }
    }
  }

  init(player) {
    this.renderBoss();
    this.#init(player);

    this.renderChests();
    this.renderInitialMobs();
    Battle.renderBattleHistory()

    console.log(Map.#mappedEntities)
  }
}
