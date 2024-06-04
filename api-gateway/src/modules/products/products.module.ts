import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ProductsController } from './products.controller';

@Module({
  imports: [
    ClientsModule.register([{
    name: 'PRODUCT_SERVICE',
    transport: Transport.TCP,
    options: {
      host:'product-service',
      port:7000
    },
  }])],
  controllers: [ProductsController],
  providers: [],
  exports: []
})
export class ProductsModule { }
