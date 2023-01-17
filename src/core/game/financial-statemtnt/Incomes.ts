export class Incomes {
  interests = [];
  realEstate = [];
  business = [];

  constructor(public readonly salary: number) {}

  getTotalIncome(): number {
    return this.salary + this.getPassiveIncome();
  }

  getPassiveIncome(): number {
    return 0;
  }
}
