import {Animal} from "./animal";

export class Cat extends Animal {
  override speak() {
    super.speak();
    console.log('Meow');
  }
}
