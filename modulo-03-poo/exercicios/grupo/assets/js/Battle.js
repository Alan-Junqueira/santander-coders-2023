export class Battle {
    #id
    #initial
    #time
    #rule
    #damageHit = 0
    #winner
    #battleHistory = []

    static players = []

    constructor(rule) {
        this.rule = rule;
    }

    get id() { return this.#id; }
    set id(id) { this.#id = id; }

    get time() { return this.#time; }
    set time(time) { this.#time = time; }

    get initial() { return this.#initial; }
    set initial(initial) { this.#time = initial; }

    get rule() { return this.#rule; }
    set rule(rule) { this.#rule = rule; }

    get damageHit() { return this.#damageHit; }
    set damageHit(damageHit) { this.#damageHit = damageHit; }

    get winner() { return this.#winner; }
    set winner(winner) { this.#winner = winner; }

    get battleHistory() { return this.#battleHistory; }
    set battleHistory(battleHistory) { this.#battleHistory = battleHistory; }

    registerAction(action) {
        this.#battleHistory.push(action);
    }

    setTimeEndOfBattle() {

    }

    attackAction(defensor, attacker) {

        /**
         * Lógica da batalha:
         * Chance de acerto: método hitAttack considera a porcentagem de acerto do atacante/defensor ao gerar um número aleatório
         * e retorna um boolean que indica se o ataque teve exito.
         * Poder de ataque/defesa: média dos valores abaixo:
         * - porcentagem da vida atual em relação a vida máxima do jogo + poder (ataque/defesa) + adicional (ataque/defesa)
         * Dano do Ataque: poder de ataque - poder de defesa (recebe acréscimos ou decréscimos de acordo ao nível de dificuldade)
         * Vencedor: Será preenchido com o nome do jogador sobrevivente ou do combatente inimigo do jogador desistente
         * O Desistente receberá uma das punições : - 10% maxLife - 15% poder ataque ou - 10 % poder defesa
         */

        const attackSuccess = this.hitAttack(attacker.porcentagemAcertoAtaque);
        const defenseSuccess = this.hitAttack(defensor.porcentagemAcertoDefesa);

        if (!attackSuccess || defenseSuccess) {
            return 'Ataque falhou!';
        }

        const attackPowerAttacker = (
            (attacker.actualLife / attacker.maxLife * 100) + attacker.attack + attacker.additionalHitPower) / 3;
        const defensePowerDefensor = (
            (defensor.actualLife / defensor.maxLife * 100) + defensor.defense + defensor.additionalDefensePower) / 3;

        switch (this.rule) {
            case 'easy':
                attacker instanceof Player ?
                    this.damageHit = attackPowerAttacker * 0.5 - defensePowerDefensor :
                    this.damageHit = attackPowerAttacker - defensePowerDefensor * 0.5;
                break;
            case 'medium':
                attacker instanceof Player ?
                    this.damageHit = attackPowerAttacker * 0.2 - defensePowerDefensor :
                    this.damageHit = attackPowerAttacker - defensePowerDefensor * 0.2;
                break;
            case 'hard':
                attacker instanceof Player ?
                    this.damageHit = attackPowerAttacker * 0.1 - defensePowerDefensor :
                    this.damageHit = attackPowerAttacker - defensePowerDefensor / 0.9;
                break;
            case 'especialist':
                attacker instanceof Player ?
                    this.damageHit = attackPowerAttacker / 0.9 - defensePowerDefensor :
                    this.damageHit = attackPowerAttacker - defensePowerDefensor * 0.8;
                break;
            default:
                break;
        }

    }

    hitAttack(porcentagem) {
        return Math.random() < porcentagem / 100;
    }

    attackResult(damage, defensor) {
        return defensor.actualLife - damage;
    }

    applyPunishment(player) {

    }
}