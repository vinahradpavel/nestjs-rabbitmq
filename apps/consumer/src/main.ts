import { NestFactory } from '@nestjs/core';

import { ConsumerModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(ConsumerModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
