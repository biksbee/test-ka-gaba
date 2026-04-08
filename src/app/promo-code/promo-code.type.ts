import { ListType } from '../../utils/utils/type';

export type CreatePromoCodeType = {
  code: string;
  discount: number;
  activationLimit: number;
  expiresAt: Date;
}

export type GetPromoCodeType = {
  id?: number;
  code?: string;
  relations?: boolean;
}

export type ListPromoCodeType = ListType &  {
  relations: boolean;
}