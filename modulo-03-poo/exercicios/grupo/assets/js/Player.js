import { Entity } from "./Entity.js";
import { Map } from "./Map.js";


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
  init() {
    const form = document.querySelector("#form")

    form.addEventListener('submit', e => {
      e.preventDefault()
      const formData = new FormData(form)
      const formValues = Object.fromEntries(formData.entries())

      const name = formValues["name"]
      const difficult = formValues["difficult"]
      const character = formValues["character"]

      console.log(name, difficult, character)

      this.name = name
      this.character = character
      this.yActualPosition = 0
      this.xActualPosition = 22

      Map.difficult = difficult
      Map.resetMappedEntities()
      Map.addEntityToMappedEntities(this)

      console.log(Map.difficult)

      this.render()
    })
  }

  render(){
    const screenMap = document.querySelector('#map')
    const player = document.createElement('div')
    const playerImage = document.createElement('img')
    const imageSource = `../grupo/assets/images/player/${this.character}.png`

    playerImage.src = imageSource
    playerImage.className = "absolute top-0 left-0"

    player.className = `absolute top-[calc(${this.yActualPosition}*20px)] left-[calc(${this.xActualPosition}*20px)] w-5 h-5 overflow-hidden bg-black/40`
    player.id = "player"
    player.appendChild(playerImage)

    screenMap.appendChild(player)

    const mapInstance = new Map()
    mapInstance.init(this)
  }
}

