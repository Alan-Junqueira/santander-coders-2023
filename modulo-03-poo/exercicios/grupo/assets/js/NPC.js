import { Entity } from './Entity.js';
import { Map } from './Map.js';

export class Npc extends Entity {
	#dialoguePhrases;
	#buffs;
	#debuffs;

	constructor({ name, xActualPosition, yActualPosition, dialoguePhrases }) {
		super();
		this.name = name;
		this.#dialoguePhrases = dialoguePhrases;
		this.#buffs = {};
		this.#debuffs = {};

		if (Map.isPositionValid({ x: xActualPosition, y: yActualPosition })) {
			this.xActualPosition = xActualPosition;
			this.yActualPosition = yActualPosition;

			Map.addEntityToMappedEntities(this)
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
		const isBuff = Math.random() < 0.5;

		if (isBuff) {
			const statToBuff = Math.random() < 0.5 ? 'attack' : 'defense';
			const buffValue = Math.floor(Math.random() * 3 + 1);
			this.#buffs[statToBuff] = buffValue;
			player[statToBuff] += buffValue;
			// console.log(
			// 	`${this.name} aumentou o ${statToBuff} de ${player.name} em ${buffValue}.`
			// );
		} else {
			const statToDebuff = Math.random() < 0.5 ? 'attack' : 'defense';
			const debuffValue = Math.floor(Math.random() * 3 + 1);
			this.#debuffs[statToDebuff] = debuffValue;
			player[statToDebuff] -= debuffValue;
			// console.log(
			// 	`${this.name} diminuiu o ${statToDebuff} de ${player.name} em ${debuffValue}.`
			// );
		}
	}
}

// const npc1 = new Npc({
// 	name: 'Guarda da Cidade',
// 	xActualPosition: 10,
// 	yActualPosition: 5,
// 	dialoguePhrases: [
// 		'Cidadão, seja bem-vindo à nossa cidade.',
// 		'Mantenha-se seguro enquanto estiver aqui.',
// 		'Precisa de informações sobre a cidade? Estou à disposição.',
// 	],
// });

// Aplicando o buff ou debuff ao jogador
// npc2.applyRandomBuffOrDebuff(player);
// npc4.applyRandomBuffOrDebuff(player);

// Exibindo o estado atual do jogador
// console.log(`${player.name}: Ataque - ${player.attack}, Defesa - ${player.defense}`);
