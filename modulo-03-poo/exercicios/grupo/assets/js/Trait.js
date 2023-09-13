import { Map as GameMap } from './Map.js'
import { Utils } from './Utils.js'
import { Mob } from "./Mob.js";
import { Player } from "./Player.js";
import { Boss } from "./Boss.js";

export class Trait {

    static #prefixesMap = new Map([
        [-6, "Crippling"],
        [-5, "Brutal"],
        [-4, "Vicious"],
        [-3, "Cruel"],
        [-2, "Harsh"],
        [-1, "Slight"],
        [1, "Minor"],
        [2, "Lesser"],
        [3, "Moderate"],
        [4, "Greater"],
        [5, "Major"],
        [6, "Supreme"]
    ]);
    static #minGoodPrefixKey = 1;
    static #maxGoodPrefixKey = Math.max(...Trait.#prefixesMap.keys());
    static #minBadPrefixKey = Math.min(...Trait.#prefixesMap.keys());
    static #maxBadPrefixKey = -1;

    static #suffixesMap = new Map([
        [-1, "Mortality"],
        [-2, "Feebleness"],
        [-3, "Frailty"],
        [1, "Longevity"],
        [2, "Might"],
        [3, "Fortification"],
    ]);
    static #minGoodSuffixKey = 1;
    static #maxGoodSuffixKey = Math.max(...Trait.#suffixesMap.keys());
    static #minBadSuffixKey = Math.min(...Trait.#suffixesMap.keys());
    static #maxBadSuffixKey = -1;

    static #suffixesToPropertyMap = new Map([
        ["Mortality", "health"],
        ["Longevity", "health"],
        ["Feebleness", "attack"],
        ["Might", "attack"],
        ["Frailty", "defense"],
        ["Fortification", "defense"]
    ])

    #description;
    #property;
    #effect;

    /**
     * Initialize a Trait instance.
     * @param {boolean} isPositive - Determines if the trait is good or bad.
     */
    constructor(isPositive) {
        const prefixKey = Trait.#getRandomPrefixKey(isPositive);
        const suffixKey = Trait.#getRandomSuffixKey(isPositive);

        this.#description = `${Trait.#prefixesMap.get(prefixKey)} ${Trait.#suffixesMap.get(suffixKey)}`;
        this.#property = Trait.#suffixesToPropertyMap.get(Trait.#suffixesMap.get(suffixKey));
        this.#effect = prefixKey * 3;
    }

    static #getRandomPrefixKey = (isPositive) =>
        Utils.getRandomKey(
            isPositive,
            Trait.#minGoodPrefixKey,
            Trait.#maxGoodPrefixKey,
            Trait.#minBadPrefixKey,
            Trait.#maxBadPrefixKey
        );

    static #getRandomSuffixKey = (isPositive) =>
        Utils.getRandomKey(
            isPositive,
            Trait.#minGoodSuffixKey,
            Trait.#maxGoodSuffixKey,
            Trait.#minBadSuffixKey,
            Trait.#maxBadSuffixKey
        );

    apply(character) {
        if (character instanceof Player) {
            this.#applyOnPlayer(character);
            return;
        }
        if (character instanceof Mob || character instanceof Boss) {
            this.#applyOnMob(character)
        }
        character.traits.push(this);
        GameMap.updateEntity(character);
    }

    #applyOnPlayer(player) {
        switch (this.#property) {
            case "health":
                player.maxLife += this.#effect;
                player.actualLife = player.maxLife;
                break;
            case "attack":
                player.attack += this.#effect;
                break;
            case "defense":
                player.defense += this.#effect;
                break
        }
    }

    #applyOnMob(mob) {
        switch (this.#property) {
            case "health":
                mob.maxHealth += this.#effect;
                mob.actualHealth = mob.maxHealth;
                break;
            case "attack":
                mob.minAttack += this.#effect;
                mob.maxAttack += this.#effect;
                break;
            case "defense":
                mob.minDefense += this.#effect;
                mob.maxDefense += this.#effect;
                break
        }
    }
}
