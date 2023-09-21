"use strict";

class Warrior {
  constructor(characterName, details, health = 10, power = 5) {
    this.characterName = characterName;
    this.health = health;
    this.power = power;
    this.details = details;
  }

  greet(other_character) {
    console.log(
      `Hey ho ${other_character.characterName}! Tis I, ${this.characterName}`
    );
  }

  attack(other_character) {
    const health = other_character.health - this.power;
    other_character.health = Math.max(health, 0);
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
    console.log(
      `Prepare to be defeated, ${villain.characterName} by the mighty hand of ${this.characterName}`
    );
  }
}

class Villain extends Warrior {
  constructor(characterName, details, health = 10, power = 3) {
    super(characterName, details, health, power);
  }
  taunt(hero) {
    console.log(
      `Too bad you are outnumbered, ${hero.characterName}.  I have 10 zombies at my disposal. It is time to die!! `
    );
  }
}
class Zombie extends Villain {
  constructor(characterName, details, health = 5, power = 2.5) {
    super(characterName, details, health, power);
  }
}

const DrEvil = new Villain("DrEvil", "likes the color green", 15, 10);

const MrFantastic = new Hero("MrFantastic", "likes the color red", 25, 5);

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
    console.log(`DrEvil Health: ${DrEvil.health}`);
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

//...........................................................................................
//...........................................................................................
//...........................................................................................
// DOM creation stuff (buttons, inputs....)
//...........................................................................................
//...........................................................................................
//initial choose fighter button
document.addEventListener("DOMContentLoaded", () => {
  const beginButton = document.createElement("button");
  beginButton.id = "beginButton";
  beginButton.textContent = "Choose your fighters!";
  const fee = document.querySelector("#fee");
  fee.appendChild(beginButton);

  //WILL REUSE ***remove previous button on screen function
  const removePrevious = (id) => {
    const previousThing = document.getElementById(id);
    if (previousThing) {
      previousThing.remove();
    }
  };

  //input for hero name
  beginButton.addEventListener("click", () => {
    removePrevious("beginButton");
    const heroInput = document.createElement("input");
    heroInput.type = "text";
    heroInput.id = "heroInput";
    fee.appendChild(heroInput);
    heroInput.placeholder = "Enter the name of your HERO!";
    const heroInputButton = document.createElement("button");
    heroInputButton.id = "heroInputButton";
    heroInputButton.textContent = "Confirm your HERO!";
    const fi = document.querySelector("#fi");
    fi.appendChild(heroInputButton);
  });

  //confirm your HERO button to start greeting
  heroInputButton.addEventListener("click", () => {
    removePrevious("heroInputButton");
    removePrevious("heroInput");
    const heroGreeting = document.createElement("p");
    heroGreeting.id = "heroGreeting";
    const fi = document.querySelector("#fi");
    fi.appendChild(heroGreeting);
  });

  //need to do previous steps first
  //input for villain name
  heroInputButton.addEventListener("click", () => {
    removePrevious("heroInput");
    const villainInput = document.createElement("input");
    villainInput.type = "text";
    villainInput.id = "heroInput";
    fee.appendChild(villainInputInput);
    villainInputInput.placeholder = "Enter the name of your VILLAIN!";
    const villainInputButton = document.createElement("button");
    villainInputButton.id = "heroInputButton";
    villainInputButton.textContent = "Confirm your VILLAIN!";
    const fi = document.querySelector("#fi");
    fi.appendChild(villainInputButton);
  });

  //confirm your VILLAIN button to start greeting

  //Hero announcement

  //Villain taunt

  //Button to start battle

  //Present options of (hero attack zombie, hero attack main villain, villain attack hero,
  //random attack on hero by any villain (including zombies)

  //log health point updates in DOM

  //repeat previous 2 steps

  //Once victory is won// victory cry for hero or villain, fun stuff on screen

  //button to make new battle
});
