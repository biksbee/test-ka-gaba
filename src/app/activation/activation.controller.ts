import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Post } from '@nestjs/common';
import { ActivationService } from './activation.service';
import {
  ActivationResponse,
  SuccessActivationResponse,
} from './activation.responses';
import { ActivationDto } from './activation.dto';

@ApiTags('Activation')
@Controller('activation')
export class ActivationController {
  constructor(
    private readonly activationService: ActivationService,
  ) {}

  @Post()
  @ApiOperation({
    summary: 'Activate promo-code',
    description: 'This endpoint allow to activate the promo code',
  })
  @ApiResponse({
    status: 201,
    type: SuccessActivationResponse
  })
  activate(
    @Body() dto: ActivationDto,
  ): Promise<SuccessActivationResponse> {
    return this.activationService.activate(dto);
  }
}