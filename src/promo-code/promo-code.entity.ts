import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { ActivationEntity } from '../activation/activation.entity';

@Entity()
export class PromoCodeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  code: string;

  @Column('int')
  discount: number;

  @Column('int')
  activationLimit: number;

  @Column()
  expiresAt: Date;

  @OneToMany(() => ActivationEntity, activation => activation.promoCode)
  activations: ActivationEntity[];
}