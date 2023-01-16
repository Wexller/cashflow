import { ILiabilities } from '@/models/financial-statement/ILiabilities';

export interface ILiabilitiesInit {
  carLoan: number;
  creditCard: number;
  homeMortgage: number;
  retail: number;
  schoolLoan: number;
}

export class Liabilities implements ILiabilities {
  homeMortgage;
  schoolLoan;
  carLoan;
  creditCard;
  retail;
  realEstate = [];
  business = [];

  constructor({
    homeMortgage,
    schoolLoan,
    carLoan,
    creditCard,
    retail,
  }: ILiabilitiesInit) {
    this.homeMortgage = homeMortgage;
    this.schoolLoan = schoolLoan;
    this.carLoan = carLoan;
    this.creditCard = creditCard;
    this.retail = retail;
  }
}
