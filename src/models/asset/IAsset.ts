import { IBusiness } from './IBusiness';
import { IDebt } from './IDebt';
import { IInterest } from './IInterest';
import { ILand } from './ILand';
import { IPreciousMetal } from './IPreciousMetal';
import { IRealEstate } from './IRealEstate';
import { IStock } from './IStock';

export interface IAssetBase {
  description: string;
  shortTitle?: string;
  title: string;
}

export type AssetType =
  | IRealEstate
  | IBusiness
  | IPreciousMetal
  | ILand
  | IStock
  | IInterest
  | IDebt;
