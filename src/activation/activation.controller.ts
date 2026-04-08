import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Post } from '@nestjs/common';
import { ActivationService } from './activation.service';

@ApiTags('Activation')
@Controller('activation')
export class ActivationController {
  constructor(
    private readonly activationService: ActivationService,
  ) {}

  @Post()
  @ApiOperation({
    summary: 'Activate promo-code',
    description: '',
  })
  @ApiResponse({
    status: 200,
    description: '',
  })
  activate(
    @Body() dto
  ) {
    return this.activationService.activate(dto);
  }
}