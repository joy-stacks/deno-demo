/*
 * @Author: JOY
 * @Date: 2024-06-13 16:35:52
 * @LastEditors: JOY
 * @LastEditTime: 2024-06-17 08:34:33
 * @Description: 
 */
import { NestFactory } from "npm:@nestjs/core";
import { AppModule } from "./app.module.ts";

import type { NestExpressApplication } from "npm:@nestjs/platform-express";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  await app.listen(3000);
}

bootstrap();
