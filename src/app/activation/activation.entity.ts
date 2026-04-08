import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Unique,
  CreateDateColumn,
  JoinColumn
} from 'typeorm';
import { PromoCodeEntity } from '../promo-code/promo-code.entity';

@Entity('activation')
@Unique(['email', 'promoCode'])
export class ActivationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @ManyToOne(() => PromoCodeEntity, promo => promo.activations)
  @JoinColumn({ name: 'promoCodeId'})
  promoCode: PromoCodeEntity;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}