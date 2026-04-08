import { PromoCodeEntity } from './promo-code.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PromoCodeService } from './promo-code.service';
import { PromoCodeController } from './promo-code.controller';
import { ActivationModule } from '../activation/activation.module';

@Module({
  controllers: [PromoCodeController],
  providers: [PromoCodeService],
  imports: [
    TypeOrmModule.forFeature([
      PromoCodeEntity,
    ]),
    ActivationModule,
  ],
  exports: [],
})
export class PromoCodeModule {}