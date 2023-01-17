import { IBusiness } from '../asset/IBusiness';
import { IRealEstate } from '../asset/IRealEstate';

export interface ILiabilities {
  business: IBusiness[];
  carLoan: number;
  creditCard: number;
  homeMortgage: number;
  realEstate: IRealEstate[];
  retail: number;
  schoolLoan: number;
}
