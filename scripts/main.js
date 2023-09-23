"use strict";
let heroName;
let villainName;
let MrFantastic;
let DrEvil;
let heroInput;
let villainInput;
let twoFighterButton;
let heroAttackVilButton;
let heroAttackZombButton;
let villAttackHeroButton;
let randomEnemyAttackHeroButton;
let heroHealthBar;
let villainHealthBar;

const fee = document.querySelector("#fee");
const fi = document.querySelector("#fi");
const fo = document.querySelector("#fo");
const fum = document.querySelector("#fum");
const greeting1 = document.querySelector("#greeting1");
const greeting2 = document.querySelector("#greeting2");
const announce = document.querySelector("#announce");
const taunt = document.querySelector("#taunt");

class Warrior {
  constructor(characterName, details, health = 10, power = 5) {
    this.characterName = characterName;
    this.health = health;
    this.power = power;
    this.details = details;
  }

  greet(div) {
    const greetMessage = `You chose ${this.characterName} for battle 💪🏼`;
    console.log(div);
    div.textContent = greetMessage;
  }

  attack(other_character) {
    const health = other_character.health - this.power;
    other_character.health = Math.max(health, 0);
  }
  updateH(div) {
    div.textContent = `Current Health: ${this.health}`;
  }

  alive() {
    if (this.constructor === Zombie) {
      return true;
    }
    if (this.health > 0) {
      return true;
    } else {
      return false;
    }
  }
}

class Hero extends Warrior {
  constructor(characterName, details, health = 10, power = 5) {
    super(characterName, details, health, power);
  }
  announce(villain) {
    const announceMessage = `Prepare to be defeated, ${villain.characterName} by the mighty hand of ${this.characterName}`;
    const announceElement = document.getElementById("announce");
    announceElement.textContent = announceMessage;
  }
}

class Villain extends Warrior {
  constructor(characterName, details, health = 10, power = 3) {
    super(characterName, details, health, power);
  }
  taunt(hero) {
    const tauntMessage = `Too bad you are outnumbered, ${hero.characterName}.  I have 10 zombies at my disposal. It is time to die!!`;
    const tauntElement = document.getElementById("taunt");
    tauntElement.textContent = tauntMessage;
  }
}
class Zombie extends Villain {
  constructor(characterName, details, health = 5, power = 2.5) {
    super(characterName, details, health, power);
  }
}

// const DrEvil = new Villain("DrEvil", "likes the color green", 15, 10);
// console.log({ heroInput });

const Zombie1 = new Zombie("Zombie1", "likes brains", 5, 3);
const Zombie2 = new Zombie("Zombie2", "likes brains", 5, 3);
const Zombie3 = new Zombie("Zombie3", "likes brains", 5, 3);
const Zombie4 = new Zombie("Zombie4", "likes brains", 5, 3);
const Zombie5 = new Zombie("Zombie5", "likes brains", 5, 3);
const Zombie6 = new Zombie("Zombie6", "likes brains", 5, 3);
const Zombie7 = new Zombie("Zombie7", "likes brains", 5, 3);
const Zombie8 = new Zombie("Zombie8", "likes brains", 5, 3);
const Zombie9 = new Zombie("Zombie9", "likes brains", 5, 3);
const Zombie10 = new Zombie("Zombie10", "likes brains", 5, 3);

const enemies = [];
enemies.push(
  DrEvil,
  Zombie1,
  Zombie2,
  Zombie3,
  Zombie4,
  Zombie5,
  Zombie6,
  Zombie7,
  Zombie8,
  Zombie9,
  Zombie10
);

//Under Attack
const heroNextMove = (hero) => {
  if (hero.alive() === true) {
    hero.attack(DrEvil);
    console.log(`VILLAIN Health: ${DrEvil.health}`);
  } else {
    console.log(`Alas, ${hero.characterName} is dead!`);
  }
};

const villainNextMove = () => {
  const randomEnemyIndex = randomInt(enemies.length);
  const randomEnemy = enemies[randomEnemyIndex];
  randomEnemy.attack(MrFantastic);
  console.log(MrFantastic.health);
};

const randomInt = (max) => {
  return Math.floor(Math.random() * max);
};

//..........................
//..........................
//..........................
//..........................
// DOM creation stuff (buttons, inputs....)

const startGame = () => {
  console.log("start game");
  removePrevious("villainInputButton");
  removePrevious("villainInput");
};

const removePrevious = (id) => {
  console.log("remove");
  const previousThing = document.getElementById(id);
  if (previousThing) {
    previousThing.remove();
  }
};

const createBeginButton = () => {
  console.log("create begin");
  const beginButton = document.createElement("button");

  beginButton.id = "beginButton";
  beginButton.textContent = "Choose your fighters!";
  fee.appendChild(beginButton);
  console.log(beginButton);
};
createBeginButton();

const createHeroInput = () => {
  removePrevious("beginButton");
  const heroInputButton = document.createElement("button");
  console.log(heroInputButton);
  heroInputButton.id = "heroInputButton";
  heroInputButton.textContent = "Confirm your HERO!";
  heroInput = document.createElement("input");
  heroInput.type = "text";
  heroInput.id = "heroInput";
  heroInput.placeholder = "Enter the name of your HERO!";
  fee.appendChild(heroInput);
  fi.appendChild(heroInputButton);

  heroInputButton.addEventListener("click", () => {
    createVillainInput();
  });
};

const createVillainInput = () => {
  heroName = document.getElementById("heroInput").value;
  MrFantastic = new Hero(heroName, "likes the color red", 25, 5);
  MrFantastic.greet(dialogue2);

  const villainInputButton = document.createElement("button");
  villainInputButton.id = "villainInputButton";
  villainInputButton.textContent = "Confirm your VILLAIN!";
  villainInputButton.addEventListener("click", startGame);

  villainInput = document.createElement("input");
  console.log({ villainInput });
  villainInput.type = "text";
  villainInput.id = "villainInput";
  villainInput.placeholder = "Enter the name of your VILLAIN!";
  fee.appendChild(villainInput);
  fi.appendChild(villainInputButton);

  console.log("OUT", villainInput.value);
  villainInputButton.addEventListener("click", () => {
    console.log("IN", villainInput.value);
    getVillainValue();
    twoFightersStart();
    // loadBattleButtons();
  });

  removePrevious("heroInputButton");
  removePrevious("heroInput");
};
const getVillainValue = () => {
  console.log({ villainName });
  villainName = villainInput.value;
  DrEvil = new Villain(villainName, "likes the color green", 15, 10);
  DrEvil.greet(dialogue3);
};
const twoFightersStart = () => {
  twoFighterButton = document.createElement("button");
  twoFighterButton.id = "twoFighterButton";
  twoFighterButton.textContent = "LET THE FIGHTING COMMENCE!";
  fum.appendChild(twoFighterButton);

  twoFighterButton.addEventListener("click", () => {
    removePrevious("twoFighterButton");

    setTimeout(() => {
      MrFantastic.announce(DrEvil);
      setTimeout(() => {
        DrEvil.taunt(MrFantastic);
        setTimeout(() => {
          loadBattleButtons();
        }, 2000);
      }, 1500);
    }, 500);
  });
};

const loadBattleButtons = () => {
  console.log("Battle buttons loading");
  heroAttackVilButton = document.createElement("button");
  heroAttackZombButton = document.createElement("button");
  randomEnemyAttackHeroButton = document.createElement("button");

  heroAttackVilButton.addEventListener("click", () => {
    MrFantastic.attack(DrEvil);
    const villainHealthDiv = document.getElementById("villainHealth");
    villainHealthDiv.textContent = `Villain Health: ${DrEvil.health} points`;
    const villainHealthBar = document.getElementById("villainHealthBar");
    villainHealthBar.value = DrEvil.health;
    removePrevious("dialogue2");
    removePrevious("dialogue3");
    const dialogue = document.getElementById("dialogue2");
    dialogue.textContent = `${MrFantastic.characterName} attacks ${DrEvil.characterName} for ${MrFantastic.power} damage!`;
    if (DrEvil.health <= 0) {
      dialogue.textContent += ` ${DrEvil.characterName} has been defeated!`;
    }

    const heroAttackZombieButton = document.getElementById(
      "heroAttackZombButton"
    );

    heroAttackZombieButton.addEventListener("click", () => {
      const dialogue2 = document.getElementById("dialogue2");
      dialogue2.textContent = ""; // Clear existing content

      const message = `${MrFantastic.characterName} attacks ${DrEvil.characterName}'s zombie minions for ${MrFantastic.power} damage! But they are undead, SO THEY CAN NEVER DIE! Useless attack!`;
      dialogue2.textContent = message;
    });
  });
  heroHealthBar = document.createElement("progress");
  villainHealthBar = document.createElement("progress");

  heroAttackVilButton.id = "heroAttackVilButton";

  randomEnemyAttackHeroButton.id = "randomEnemyAttackHeroButton";

  heroHealthBar.id = "heroHealthBar";
  villainHealthBar.id = "villainHealthBar";

  heroAttackVilButton.textContent = "Hero Attack on Villain";

  randomEnemyAttackHeroButton.textContent = "Villain Team Attack on Hero";

  heroAttackZombButton = document.createElement("button");
  heroAttackZombButton.id = "heroAttackZombButton";
  heroAttackZombButton.textContent = "Hero Attack on Zombies";

  heroAttackZombButton.addEventListener("click", () => {
    const dialogue2 = document.getElementById("dialogue2");
    dialogue2.textContent = "";
    dialogue3.textContent = "";
    dialogue4.textContent = "";
    dialogue5.textContent = "";
    greeting1.textContent = "";
    greeting2.textContent = "";
    taunt.textContent = "";
    announce.textContent = ""; // Clear existing content

    const message = `${MrFantastic.characterName} attacks ${DrEvil.characterName}'s zombie minions  But they are undead, SO ATTACK IS USELESS`;
    dialogue2.textContent = message;
  });

  fee.appendChild(heroAttackZombButton);

  fee.appendChild(heroAttackVilButton);
  fee.appendChild(heroAttackZombButton);
  fi.appendChild(randomEnemyAttackHeroButton);

  randomEnemyAttackHeroButton.addEventListener("click", () => {
    villainNextMove();
    const heroHealthDiv = document.getElementById("heroHealth");

// Update the hero health text content
heroHealthDiv.textContent = `Hero Health: ${MrFantastic.health} points`;
    const heroHealthBar = document.getElementById("heroHealthBar");
    heroHealthBar.value = MrFantastic.health;
    removePrevious("dialogue2");
    removePrevious("dialogue3");
    const dialogue = document.getElementById("dialogue2");
    dialogue.textContent = `${DrEvil.characterName}'s team attacks ${MrFantastic.characterName} for ${DrEvil.power} damage!`;
    if (MrFantastic.health <= 0) {
      dialogue.textContent += ` ${MrFantastic.characterName} has been defeated!`;
    }
  });
};

beginButton.addEventListener("click", createHeroInput);
