import { IAssets } from '@/models/financial-statement/IAssets';

export class Assets implements IAssets {
  preciousMetals = [];
  stocks = [];
  realEstate = [];
  business = [];

  constructor(public savings = 0) {}
}
