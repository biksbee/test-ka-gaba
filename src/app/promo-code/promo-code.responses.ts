import { ApiProperty } from '@nestjs/swagger';
import { ActivationResponse } from '../activation/activation.responses';

export class PromoCodeResponse {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'CODE_1' })
  code: string;

  @ApiProperty({ example: 5 })
  discount: number;

  @ApiProperty({ example: 10 })
  activationLimit: number;

  @ApiProperty({ example: 5 })
  activationCount: number;

  @ApiProperty({ description: 'List of activations for this promo code', type: [ActivationResponse] })
  activations: ActivationResponse[];

  @ApiProperty({ example: '2026-12-31T23:59:59.000Z' })
  expiresAt: Date;

  @ApiProperty({ example: '2026-04-08T10:00:00.000Z' })
  createdAt: Date;
}

