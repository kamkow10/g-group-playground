export abstract class Animal {
  stamina = 100;

  speak(): void {
    this.stamina -= 1;
  }
}
