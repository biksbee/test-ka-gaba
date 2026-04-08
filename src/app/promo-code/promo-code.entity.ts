import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';
import { ActivationEntity } from '../activation/activation.entity';

@Entity('promo-code')
export class PromoCodeEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', unique: true })
  code: string;

  @Column({ type: 'int' })
  discount: number;

  @Column({ type: 'int' })
  activationLimit: number;

  @Column({ type: 'int', default: 0 })
  activationCount: number;

  @Column({ type: 'timestamptz', default: () => "CURRENT_TIMESTAMP + INTERVAL '10 days'" })
  expiresAt: Date;

  @OneToMany(() => ActivationEntity, (activation) => activation.promoCode)
  activations: ActivationEntity[];

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}