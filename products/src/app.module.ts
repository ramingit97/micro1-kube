import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './features/products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { dataSource } from './ormconfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './.development.env'
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: () => dataSource.options
    }),
    ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
