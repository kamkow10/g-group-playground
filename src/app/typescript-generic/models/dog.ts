import {Animal} from "./animal";

export class Dog extends Animal {
  override speak() {
    super.speak();
    console.log('Woff woff');
  }
}
