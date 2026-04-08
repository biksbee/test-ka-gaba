import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class ActivationDto {
  @ApiProperty({
    description: 'User email for promo activation',
    example: 'test@gmail.com',
  })
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @ApiProperty({
    description: 'Promo code',
    example: 'CODE_1',
  })
  @IsString()
  @IsNotEmpty({ message: 'Code is required' })
  @Length(3, 50, { message: 'Code must be between 3 and 50 characters' })
  code: string;
}