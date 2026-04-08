import { ApiProperty } from '@nestjs/swagger';

export class SuccessActivationResponse {
  @ApiProperty({ example: 'Activated'})
  message: string;

  @ApiProperty({ example: 20})
  discount: number;
}

export class ActivationResponse {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'test@gmail.com' })
  email: string;

  @ApiProperty({ example: '2026-04-08T10:00:00.000Z' })
  createdAt: Date;
}