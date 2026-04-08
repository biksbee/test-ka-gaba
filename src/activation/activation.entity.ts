import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Unique,
  CreateDateColumn,
} from 'typeorm';
import { PromoCodeEntity } from '../promo-code/promo-code.entity';

@Entity()
@Unique(['email', 'promoCode'])
export class ActivationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @ManyToOne(() => PromoCodeEntity, promo => promo.activations)
  promoCode: PromoCodeEntity;

  @CreateDateColumn()
  createdAt: Date;
}