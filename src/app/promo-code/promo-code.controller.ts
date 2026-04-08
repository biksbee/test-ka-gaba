import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseBoolPipe,
  Post,
  Query,
} from '@nestjs/common';
import { PromoCodeService } from './promo-code.service';
import {
  CreatePromoCodeDto,
  GetPromoCodeDto,
  ListPromoCodeDto,
} from './promo-code.dto';
import { PromoCodeResponse } from './promo-code.responses';

@ApiTags('Promo-code')
@Controller('promo-codes')
export class PromoCodeController {
  constructor(private readonly promoCodeService: PromoCodeService) {}

  @Post()
  @ApiOperation({
    summary: 'Create promo code',
    description: 'This endpoint allows to create a promo code',
  })
  @ApiResponse({
    status: 201,
    type: PromoCodeResponse,
  })
  async create(@Body() dto: CreatePromoCodeDto): Promise<PromoCodeResponse> {
    return await this.promoCodeService.create(dto);
  }

  @Post('list')
  @ApiOperation({
    summary: 'Get list promo codes',
    description: 'This endpoint allows list promo codes',
  })
  @ApiResponse({
    status: 200,
  })
  async list(
    @Body() dto: ListPromoCodeDto
  ) {
    return await this.promoCodeService.list(dto);
  }

  @Get(':code')
  @ApiOperation({
    summary: 'Get promo code',
    description: 'This endpoint allows get promo code',
  })
  @ApiResponse({
    status: 200,
    type: PromoCodeResponse,
  })
  async get(
    @Param() { code }: GetPromoCodeDto,
    @Query('relations', new DefaultValuePipe(false), ParseBoolPipe) relations: boolean,
  ): Promise<PromoCodeResponse> {
    return await this.promoCodeService.get({ code, relations });
  }
}