import { IBusiness } from '../asset/IBusiness';
import { IInterest } from '../asset/IInterest';
import { IRealEstate } from '../asset/IRealEstate';

export interface IIncomes {
  business: IBusiness[];
  getTotalIncome(): number;
  interests: IInterest[];
  realEstate: IRealEstate[];
  salary: number;
}
