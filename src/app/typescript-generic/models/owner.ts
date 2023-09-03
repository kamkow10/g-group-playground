import {Animal} from "./animal";

export class Owner<T extends Animal> {
  ownedAnimals: T[];

  constructor() {
    this.ownedAnimals = [];
  }

  addAnimal(animal: T): void {
    this.ownedAnimals.push(animal);
  }

  askAnimalsToSpeak(): void {
    this.ownedAnimals.forEach(animal => animal.speak());
  }

  getAnimalsStamina(): void {
    const stamina = this.ownedAnimals.reduce((prev, curr) => prev + curr.stamina, 0);
    console.log(stamina);
  }
}
