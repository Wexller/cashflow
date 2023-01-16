import { IBusiness } from '@/models/asset/IBusiness';
import { IPreciousMetal } from '@/models/asset/IPreciousMetal';
import { IRealEstate } from '@/models/asset/IRealEstate';
import { IStock } from '@/models/asset/IStock';

export interface IAssets {
  business: IBusiness[];
  preciousMetals: IPreciousMetal[];
  realEstate: IRealEstate[];
  savings: number;
  stocks: IStock[];
}
