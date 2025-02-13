import { NestFactory } from '@nestjs/core';

import { ProducerModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(ProducerModule);
  await app.listen(process.env.port ?? 3001);
}
bootstrap();
