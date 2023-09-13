import {Entity} from "./Entity.js";
import {Blessing} from "./Blessing.js";
import {Curse} from "./Curse.js";
import {Map} from "./Map.js";

export class Chest extends Entity {
    #treasure;
    #isOpen;

    constructor(x, y) {
        super()
        this.#treasure = (Math.random() <  Map.difficult.positiveLootOutcomePercentChance / 100)? new Blessing() : new Curse();
        this.#isOpen = false;

        if (Map.isPositionValid({ x, y })) {
            this.xActualPosition = x;
            this.yActualPosition = y;
        }
    }

    init() {
        Map.addEntityToMappedEntities(this);
        this.render()
    }
    get isOpen() {
        return this.#isOpen;
    }

    #openChest() {
        console.log("Context in #openChest: ", this);
        this.#isOpen = true;
        this.#updateImage();
    }

    give(player) {
        if (!this.#treasure) {
            return;
        }
        this.#openChest();
        this.#treasure.give(player);
        this.#treasure = null;
        Map.updateEntity(this);
    }

    #updateImage() {
        let imageClasses = [...this.chestImageElement.classList].filter(c => !c.startsWith('top-'));

        if (this.#isOpen) {
            imageClasses.push(`bottom-1`);
        } else {
            imageClasses.push(`top-0`);
        }
        this.chestImageElement.className = '';

        this.chestImageElement.classList.add(...imageClasses);
    }

    render() {
        const screenMap = document.querySelector('#map');
        this.chestElement = document.createElement('div');
        this.chestImageElement = document.createElement('img');

        this.chestImageElement.src = `../grupo/assets/images/icons/chest.png`;
        this.chestImageElement.className = "absolute top-0 left-0";

        this.chestElement.className = `absolute top-[calc(${this.yActualPosition}*20px)] left-[calc(${this.xActualPosition}*20px)] w-5 h-5 overflow-hidden`;
        this.chestElement.appendChild(this.chestImageElement);

        screenMap.appendChild(this.chestElement);
    }



}