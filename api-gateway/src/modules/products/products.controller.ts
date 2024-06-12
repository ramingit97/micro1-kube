import { Body, Controller, Get, HttpException, HttpStatus, Inject, Post, Request, Res, UseGuards } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CookieOptions, Response } from 'express';
import { lastValueFrom } from 'rxjs';
import { Authorization } from 'src/decorators/authorization.decorator';
import { CurrentUser } from 'src/decorators/current-user.decorator';
import { AuthGuard } from 'src/guards/auth.guard';

@UseGuards(AuthGuard)
@Controller('product')
export class ProductsController {
    constructor(@Inject('PRODUCT_SERVICE') private productService: ClientProxy) {
    }

    @Post('create')
    async register(@Body() product,@CurrentUser() user){
        console.log('sss',user);
        // return 'ramin';
        const res = await lastValueFrom(this.productService.send("product_create",product));        
        return res;
    }

    @Get('list')
    async getAll(){
        const res = await lastValueFrom(this.productService.send("product_list",{}));        
        return res;
    }

}
