import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ActivationService } from '../activation/activation.service';
import { PromoCodeService } from './promo-code.service';

@ApiTags('Promo-code')
@Controller('promo-codes')
export class PromoCodeController {
  constructor(
    private readonly promoCodeService: PromoCodeService,
  ) {}

  @Post()
  @ApiOperation({
    summary: 'Create promo codes',
    description: '',
  })
  @ApiResponse({
    status: 200,
    description: '',
  })
  async create(
    @Body() dto
  ) {
    return await this.promoCodeService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'Activate promo-code',
    description: '',
  })
  @ApiResponse({
    status: 200,
    description: '',
  })
  async list() {
    return await this.promoCodeService.list();
  }

  @Get(':code')
  @ApiOperation({
    summary: 'Activate promo-code',
    description: '',
  })
  @ApiResponse({
    status: 200,
    description: '',
  })
  async get(
    @Param('code') code: string
  ) {
    return await this.promoCodeService.get(code);
  }
}