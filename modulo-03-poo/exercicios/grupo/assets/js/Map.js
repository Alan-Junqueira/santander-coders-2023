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
      bossBlessingNumber: 1,
    },
    normal: {
      extraLife: 4,
      extraAttack: 4,
      extraDefense: 4,
      extraHitPercentChance: 30,
      extraDefensePercentChance: 30,
      positiveLootOutcomePercentChance: 80,
      bossBlessingNumber: 2,
    },
    hard: {
      extraLife: 2,
      extraAttack: 2,
      extraDefense: 2,
      extraHitPercentChance: 15,
      extraDefensePercentChance: 15,
      positiveLootOutcomePercentChance: 70,
      bossBlessingNumber: 3,
    },
    pro: {
      extraLife: 0,
      extraAttack: 0,
      extraDefense: 0,
      extraHitPercentChance: 0,
      extraDefensePercentChance: 0,
      positiveLootOutcomePercentChance: 60,
      bossBlessingNumber: 4,
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
    const entityIndex = Map.#mappedEntities.findIndex(ent => ent.id === entity.id)
    Map.#mappedEntities.splice(entityIndex, 1, entity)
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
    return !!Map.#mapSpots[y].length && !!Map.#mapSpots[y][x];
  }

  static addEntityToMappedEntities(entity) {
    Map.#mappedEntities.push(entity);
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
    console.log(initializedPlayer);
    // const player = Map.mappedEntities.find(entity => entity.id === 1)
    const player = document.querySelector("#player");
    const playerImage = player.querySelector("img");

    const playerClasses = player.classList;
    const playerImageClasses = playerImage.classList;

    console.log(playerImageClasses);
    document.addEventListener("keyup", (e) => {
      e.preventDefault();

      const eventCode = e.code.toLowerCase();

      let playerFilteredClasses;
      let imagePlayerFilteredClasses;
      switch (eventCode) {
        case "keyw":
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
          break;
        case "keyd":
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
      console.log(e.code);
    });
  }

  init(player) {
    this.#init(player);
  }
}
