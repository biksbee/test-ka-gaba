import { Injectable } from '@nestjs/common';
import { ActivationService } from '../activation/activation.service';
import { PromoCodeEntity } from './promo-code.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PromoCodeService {
  constructor(
    @InjectRepository(PromoCodeEntity)
    private promoCodeRepository: Repository<PromoCodeEntity>,
    private readonly activationService: ActivationService
  ) {}

  async create(data) {
    return
  }

  async list() {
    return
  }

  async get(code: string) {
    return
  }
}