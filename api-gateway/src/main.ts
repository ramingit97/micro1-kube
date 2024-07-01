import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllRpcExceptionsFilter } from './exception-filters/rpc.filter';
import * as cookieParser from "cookie-parser";
import * as fs from 'fs';
import * as https from 'https';
import * as path from 'path';
async function bootstrap() {


  console.log("adasdasd")
  const httpsOptions = {
    key: fs.readFileSync(path.resolve(__dirname, '../certificates/server.key')),
    cert: fs.readFileSync(path.resolve(__dirname, '../certificates/server.cert')),
  };

  const app = await NestFactory.create(AppModule,{
  });
  app.setGlobalPrefix("api");
  app.enableCors({
    credentials:true,
    origin:true
  })

  app.use(cookieParser())

  app.useGlobalFilters(new AllRpcExceptionsFilter())
  await app.listen(3000,()=>{
    console.log("API GATEWAY IS RUNNING ON PORT =>  888 ", 3000) 
  });
}
bootstrap();
