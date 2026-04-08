import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivationEntity } from './activation.entity';
import { ActivationController } from './activation.controller';
import { ActivationService } from './activation.service';

@Module({
  controllers: [ActivationController],
  providers: [ActivationService],
  imports: [
    TypeOrmModule.forFeature([
      ActivationEntity,
    ])
  ],
  exports: [ActivationService],
})
export class ActivationModule {}