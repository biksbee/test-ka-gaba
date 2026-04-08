import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivationEntity } from './app/activation/activation.entity';
import { ActivationModule } from './app/activation/activation.module';
import { PromoCodeEntity } from './app/promo-code/promo-code.entity';
import { PromoCodeModule } from './app/promo-code/promo-code.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get<string>('DATABASE_USER'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        entities: [
          PromoCodeEntity,
          ActivationEntity,
        ],
        logging: true,
        synchronize: false,
      })
    }),
    ScheduleModule.forRoot(),
    PromoCodeModule,
    ActivationModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
