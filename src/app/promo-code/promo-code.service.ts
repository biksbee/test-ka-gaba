import { Injectable, NotFoundException } from '@nestjs/common';
import { ActivationService } from '../activation/activation.service';
import { PromoCodeEntity } from './promo-code.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreatePromoCodeType,
  GetPromoCodeType,
  ListPromoCodeType,
} from './promo-code.type';
import { FindOptionsWhere } from 'typeorm/find-options/FindOptionsWhere';
import { FindManyOptions } from 'typeorm/find-options/FindManyOptions';
import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';

@Injectable()
export class PromoCodeService {
  constructor(
    @InjectRepository(PromoCodeEntity)
    private promoCodeRepository: Repository<PromoCodeEntity>,
    private readonly activationService: ActivationService
  ) {}

  async create(data: CreatePromoCodeType): Promise<PromoCodeEntity> {
    const promoCode = await this.promoCodeRepository.save(data);
    return await this.get({ id: promoCode.id });
  }

  async list(data: ListPromoCodeType): Promise<PromoCodeEntity[]> {
    const {
      pagination = { page: 1, limit: 10 },
      order = { field: 'id', by: 'ASC' },
      relations = false,
    } = data;

    const params: FindManyOptions<PromoCodeEntity> = {
      skip: (pagination.page - 1) * pagination.limit,
      take: pagination.limit,
      order: {
        [order.field]: order.by,
      }
    }

    if (relations) {
      params.relations = { activations: true }
    }

    return await this.promoCodeRepository.find(params);
  }

  async get(data: GetPromoCodeType): Promise<PromoCodeEntity> {
    const { id = null, code = null, relations = false } = data;

    const where: FindOptionsWhere<PromoCodeEntity> = id
      ? { id }
      : { code };

    const params: FindOneOptions<PromoCodeEntity> = {
      where,
      ...(relations && { relations: ['activations'] }),
    };

    const promo = await this.promoCodeRepository.findOne(params);

    if (!promo) {
      throw new NotFoundException(`Promo code not found`);
    }

    return promo;
  }
}