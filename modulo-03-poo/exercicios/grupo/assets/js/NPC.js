import { Entity } from './Entity.js';
import { Map } from './Map.js';
import { Blessing } from "./Blessing.js";
import {Curse} from "./Curse.js";

export class Npc extends Entity {
	#dialoguePhrases;
	#gift
	#hasSurprise

	constructor({ name, xActualPosition, yActualPosition, dialoguePhrases }) {
		super();
		this.name = name;
		this.#dialoguePhrases = dialoguePhrases;
		this.#gift = (Math.random() <  Map.difficult.npcGiveBuffPercentChance / 100)? new Blessing() : new Curse();
		this.#hasSurprise = true;

		if (Map.isPositionValid({ x: xActualPosition, y: yActualPosition })) {
			this.xActualPosition = xActualPosition;
			this.yActualPosition = yActualPosition;

			Map.addEntityToMappedEntities(this);
			this.render();
		}
	}

	get dialoguePhrases() {
		return this.#dialoguePhrases;
	}

	set dialoguePhrases(phrases) {
		this.#dialoguePhrases = phrases;
	}

	getRandomDialogue() {
		const randomIndex = Math.floor(
			Math.random() * this.#dialoguePhrases.length
		);
		return this.#dialoguePhrases[randomIndex];
	}

	applyRandomBuffOrDebuff(player) {
		if (!this.#hasSurprise) {
			return
		}
		this.#gift.give(player);
		this.#hasSurprise = false;
		Map.updateEntity(this);
	}

	render() {
		const screenMap = document.querySelector('#map');
		const npc = document.createElement('div');
		const npcImage = document.createElement('img');
		const imageSource = `../grupo/assets/images/npc/silver-guard.png`;

		npcImage.src = imageSource;
		npcImage.className = 'absolute top-0 left-0';

		npc.className = `absolute top-[calc(${this.yActualPosition}*20px)] left-[calc(${this.xActualPosition}*20px)] w-5 h-5 overflow-hidden`;
		npc.appendChild(npcImage);

		screenMap.appendChild(npc);
	}
}
