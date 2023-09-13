import { Action } from "./Action.js";
import { Map } from "./Map.js";
import { Mob } from "./Mob.js";
import { Player } from "./Player.js";

export class Battle {
  static ultimoId = 0;

  #id;
  #initial;
  #time;
  #rule;
  #percentHitSuccess = 0;
  #damageHit = 0;
  #winner;
  #battleHistory = [];

  static players = [];

  constructor(rule) {
    this.rule = rule;
  }

  get id() {
    return this.#id;
  }
  set id(id) {
    this.#id = id;
  }

  get time() {
    return this.#time;
  }
  set time(time) {
    this.#time = time;
  }

  get initial() {
    return this.#initial;
  }
  set initial(initial) {
    this.#time = initial;
  }

  get rule() {
    return this.#rule;
  }
  set rule(rule) {
    this.#rule = rule;
  }

  get percentHitSuccess() {
    return this.#percentHitSuccess;
  }
  set percentHitSuccess(percentHitSuccess) {
    this.#percentHitSuccess = percentHitSuccess;
  }

  get damageHit() {
    return this.#damageHit;
  }
  set damageHit(damageHit) {
    this.#damageHit = damageHit;
  }

  get winner() {
    return this.#winner;
  }
  set winner(winner) {
    this.#winner = winner;
  }

  get battleHistory() {
    return this.#battleHistory;
  }

  /**
   * Lógica da batalha:
   * Chance de acerto: método hitAttack considera a porcentagem de acerto do atacante/defensor ao gerar um número aleatório
   * e retorna um boolean que indica se o ataque teve exito.
   * Poder de ataque/defesa: média dos valores abaixo:
   * - porcentagem da vida atual em relação a vida máxima do jogo + poder (ataque/defesa) + adicional (ataque/defesa)
   * Dano do Ataque: poder de ataque - poder de defesa (recebe acréscimos ou decréscimos de acordo ao nível de dificuldade)
   * Vencedor: Será preenchido com o nome do jogador sobrevivente ou do combatente inimigo do jogador desistente
   * O Desistente receberá uma punição para a próxima batalha
   * Caso o player vença, receberá um bônus para a próxima batalha de acordo ao inimigo vencido
   */

  init(player, enemy) {
    this.rule = Map.difficult.difficult;
    this.initial = new Date();
    this.id = ++Battle.ultimoId;
    return this.move(player, enemy, true);
  }

  move(player, enemy, isHitAttack) {
    const action = new Action();
    action.attacker = player.name;

    //Variavel armazena um boolean que determina se a ação seguirá
    let keep = false;

    //Condição para quando na opção atacar ou desistir o jogador escolher desistir
    if (!isHitAttack) {
      action.move = `Jogador ${player.name} desistiu!`;
      action.description = this.giveUp(player, enemy);
      this.registerAction(action);

      return {
        isPlayerTurn: keep,
        isBattleEnded: true,
        message: action.description,
      };
    }

    // Caso o jogador não desista ou for a vez do adversário do player
    action.move = `Jogador ${action.attacker} atacou ${enemy.name}`;
    const resultAttack = this.attackAction(player, enemy);

    action.description = resultAttack.msg;
    this.registerAction(action);
    keep = resultAttack.keep;

    Battle.renderBattleHistory(this);

    return {
      isPlayerTurn: keep,
      isBattleEnded: resultAttack.isBattleEnded,
      message: action.description,
    };
  }
  //Método de fuga pré-batalha
  static escape(player) {
    player.actualLife = player.actualLife * 0.9;
    Map.updateEntity(player);
  }

  registerAction(action) {
    this.#battleHistory.push(action);
  }

  setTimeEndOfBattle(endTime) {
    this.time = endTime - this.initial;
  }

  //Lógica do movimento de ataque
  attackAction(attacker, defensor) {
    const result = {
      msg: "",
      keep: true,
      isBattleEnded: false,
    };

    if (attacker instanceof Player) {
      result.keep = false;
    }

    this.percentHitSuccess =
      (attacker.attack / (defensor.attack + defensor.defense)) * 100;

    // Aplica vantagem do mapa para o Player
    attacker instanceof Player
      ? (this.percentHitSuccess += Map.difficult.extraHitPercentChance)
      : (this.percentHitSuccess -= Map.difficult.extraDefensePercentChance);

    //Verifica se o ataque teve sucesso baseado na porcentagem de chance de sucesso
    const attackSuccess = this.hitAttack(this.percentHitSuccess);

    if (!attackSuccess) {
      result.msg = "Ataque falhou!";
      return result;
    }

    //Calcula o poder de ataque e defesa dos jogadores
    const attackPowerAttacker =
      (((attacker.actualLife ?? attacker.actualHealth) /
        (attacker.maxLife ?? attacker.maxHealth)) *
        100 +
        attacker.attack +
        Map.difficult.extraAttack) /
      3;
    const defensePowerDefensor =
      (((defensor.actualLife ?? defensor.actualHealth) /
        (defensor.maxLife ?? defensor.maxHealth)) *
        100 +
        defensor.defense +
        Map.difficult.extraDefense) /
      3;

    //Calcula o dano de ataque de acordo a dificuldade do mapa e o poder de ataque
    switch (this.rule) {
      case "easy":
        attacker instanceof Player
          ? (this.damageHit = attackPowerAttacker * 1.3 - defensePowerDefensor)
          : (this.damageHit = attackPowerAttacker - defensePowerDefensor * 1.3);
        break;
      case "normal":
        attacker instanceof Player
          ? (this.damageHit = attackPowerAttacker * 1.2 - defensePowerDefensor)
          : (this.damageHit = attackPowerAttacker - defensePowerDefensor * 1.2);
        break;
      case "hard":
        attacker instanceof Player
          ? (this.damageHit = attackPowerAttacker - defensePowerDefensor)
          : (this.damageHit = attackPowerAttacker - defensePowerDefensor * 1.1);
        break;
      case "pro":
        attacker instanceof Player
          ? (this.damageHit = attackPowerAttacker * 0.9 - defensePowerDefensor)
          : (this.damageHit = attackPowerAttacker - defensePowerDefensor);
        break;
      default:
        this.damageHit = 0;
        break;
    }

    defensor = this.attackResult(this.damageHit, defensor);
    console.log(defensor);
    Map.updateEntity(defensor);

    if ((defensor.actualLife ?? defensor.actualHealth) <= 0) {
      result.msg = this.battleEnded(attacker);
      result.keep = false;
      result.isBattleEnded = true;
      return result;
    }

    result.msg = `Sucesso! Dano aplicado no jogador ${
      defensor.name
    } : ${Math.ceil(this.damageHit)}`;

    console.log("defensor", defensor);
    console.log("attacker", attacker);
    if (attacker instanceof Player) {
      attacker.reRenderStats();
    }

    if (defensor instanceof Player) {
      defensor.reRenderStats();
    }

    return result;
  }

  hitAttack(percent) {
    return Math.random() < percent / 100;
  }

  //Aplica dano do ataque no defensor
  attackResult(damage, defensor) {
    console.log(defensor);
    if (defensor instanceof Player) {
      defensor.actualLife = defensor.actualLife - Math.ceil(damage);
    }

    if (defensor instanceof Mob) {
      defensor.actualHealth = defensor.actualHealth - Math.ceil(damage);
    }
    console.log(defensor);
    return defensor;
  }

  //Método que registra o final da batalha
  battleEnded(player) {
    this.winner = player.name;
    this.setTimeEndOfBattle(new Date());

    if (player instanceof Player) {
      player = this.giftBonus(player);
      Map.updateEntity(player);
    }

    return `Batalha encerrada! Vencedor: ${this.winner}`;
  }

  //Aplica punição em caso de desistência no meio da batalha
  applyPunishment(player) {
    Map.difficult == "easy"
      ? (player.actualLife = player.actualLife * 0.9)
      : Map.difficult == "normal"
      ? (player.defense -= 2)
      : Map.difficult == "hard"
      ? (player.attack -= 2)
      : player.actualLife * 0.8;

    return player;
  }

  //Aplica bônus para o player após a vitória
  giftBonus(player) {
    Map.difficult == "easy"
      ? (player.maxLife = player.maxLife * 1.2)
      : Map.difficult == "normal"
      ? (player.defense += 2)
      : Map.difficult == "hard"
      ? (player.attack += 1)
      : player.maxLife * 1.05;

    return player;
  }

  //Método que registra o final da batalha por desistência do jogador
  giveUp(player, enemy) {
    this.winner = enemy.name;
    player = this.applyPunishment(player);
    Map.updateEntity(player);
    this.setTimeEndOfBattle(new Date());

    return `Batalha encerrada! Vencedor: ${this.winner}
            \n Jogador ${player.name} recebeu uma punição!`;
  }

  static renderBattleHistory(bat) {
    if (bat) {
      const battleHistory = document.querySelector("div#battleHistory");
      battleHistory.className =
        "h-4/5 overflow-y-scroll scrollbar-hide text-sm py-2 flex flex-col gap-2";

      bat.battleHistory.forEach((battle) => {
        const battleHistoryContainer = document.createElement("div");
        const attacker = document.createElement("p");
        const description = document.createElement("p");

        attacker.innerText = battle.attacker;
        description.innerText = `${battle.move} - ${battle.description}`;

        battleHistoryContainer.appendChild(attacker);
        battleHistoryContainer.appendChild(description);

        battleHistory.appendChild(battleHistoryContainer);
      });
    }
  }
}
