import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ActivationType } from './activation.type';
import { InjectRepository } from '@nestjs/typeorm';
import { ActivationEntity } from './activation.entity';
import { DataSource, Repository } from 'typeorm';
import { PromoCodeEntity } from '../promo-code/promo-code.entity';
import {
  ActivationResponse,
  SuccessActivationResponse,
} from './activation.responses';

@Injectable()
export class ActivationService {
  constructor(
    private dataSource: DataSource,
  ) {}

  async activate(data: ActivationType): Promise<SuccessActivationResponse> {
    const { code, email } = data;
    return this.dataSource.transaction(async (manager) => {

      const promo = await manager.findOne(PromoCodeEntity, {
        where: { code },
        lock: { mode: 'pessimistic_write' },
      });

      if (!promo) {
        throw new NotFoundException('Promo code not found');
      }

      if (new Date() > promo.expiresAt) {
        throw new BadRequestException('Promo code expired');
      }

      if (promo.activationCount >= promo.activationLimit) {
        throw new BadRequestException('Limit exceeded');
      }

      const existing = await manager.findOne(ActivationEntity, {
        where: {
          email,
          promoCode: { id: promo.id },
        },
      });

      if (existing) {
        throw new BadRequestException('Already activated');
      }

      const activation = manager.create(ActivationEntity, {
        email,
        promoCode: promo,
      });

      await manager.save(activation);

      promo.activationCount++;
      await manager.save(promo);

      return {
        message: 'Activated',
        discount: promo.discount,
      };
    });
  }
}