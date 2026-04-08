import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';
import { ListDto } from '../../utils/utils/dto';

export class GetPromoCodeDto {
  @ApiProperty({ description: 'Unique promo code', example: 'CODE_1' })
  @IsString()
  code: string;
}

export class CreatePromoCodeDto extends GetPromoCodeDto {
  @ApiProperty({ description: 'Discount in percentage', example: 5, minimum: 1, maximum: 100 })
  @IsNumber()
  @Min(1)
  @Max(100)
  discount: number;

  @ApiProperty({ description: 'Maximum number of activations', example: 1, minimum: 1 })
  @IsNumber()
  @Min(1)
  activationLimit: number;

  @ApiProperty({ description: 'Expiration date (ISO string)', example: '2026-04-09T00:00:00.000Z' })
  @IsDateString()
  expiresAt: Date;
}

export class ListPromoCodeDto extends ListDto {
  @ApiProperty({ description: 'Display information related to the promo code.', example: false, default: false })
  @IsBoolean()
  relations: boolean;
}