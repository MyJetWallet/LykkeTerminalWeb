import {computed, observable} from 'mobx';
import {subtraction} from '../utils/math';

export interface ApiAssetBalanceModel {
  AssetId: string;
  Balance: number;
  Reserved: number;
}

class AssetBalanceModel {
  accuracy: number;
  id: string;
  @observable name: string;
  @observable balance: number;
  @observable reserved: number;
  @observable balanceInBaseAsset: number = 0;

  @computed
  get available() {
    return subtraction(this.balance, this.reserved).toNumber();
  }

  constructor(dto: any) {
    this.id = dto.AssetId;
    this.balance = dto.Balance;
    this.reserved = dto.Reserved;
  }
}

export default AssetBalanceModel;
