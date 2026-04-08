export class CreatePromocodeDto {
  code: string;
  discount: number;
  activationLimit: number;
  expiresAt: Date;
}