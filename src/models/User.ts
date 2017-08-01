export class User {
  constructor(public firstName: string, public lastName: string) {}

  getName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
