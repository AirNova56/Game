class Character {
    #name;
    #health;
  
    constructor(name, health = 100) {
      this.#name = name;
      this.#health = health;
    }
  
    attack() {
      return 10;
    }
  
    takeDamage(damage) {
      this.#health -= damage;
      if (this.#health < 0) this.#health = 0; 
    }
  
    getHealth() {
      return this.#health;
    }
  
    getName() {
      return this.#name;
    }
  }
  
  class Warrior extends Character {
    constructor(name, health = 100) {
      super(name, health);
    }
  
    attack() {
      return super.attack() * 2;
    }
  }
  
    class Mage extends Character {
    constructor(name, health = 100, magicDamage = 5) {
      super(name, health);
      this.magicDamage = magicDamage;
    }
  
    attack() {
      return super.attack() + this.magicDamage;
    }
  }
  
  const warrior = new Warrior("Cаша");
  const mage = new Mage("Егор");
  
  console.log(`${warrior.getName()} атакує і завдає ${warrior.attack()} шкоди.`);
  console.log(`${mage.getName()} атакує і завдає ${mage.attack()} шкоди.`);
  
  mage.takeDamage(warrior.attack());
  console.log(`${mage.getName()} має ${mage.getHealth()} здоров'я після атаки.`);
  
  warrior.takeDamage(mage.attack());
  console.log(`${warrior.getName()} має ${warrior.getHealth()} здоров'я після атаки.`);