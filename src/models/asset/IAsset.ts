import { IRealEstate, RealEstateEnum } from './IRealEstate'
import { IBusiness } from './IBusiness'
import { IPreciousMetal } from './IPreciousMetal'
import { ILand } from './ILand'
import { IStock } from './IStock'
import { IInterest } from './IInterest'
import { IDebt } from './IDebt'

export interface IAssetBase {
  title: string
  description: string
  shortTitle?: string
}

export type AssetType =
  | IRealEstate
  | IBusiness
  | IPreciousMetal
  | ILand
  | IStock
  | IInterest
  | IDebt
