import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from './common/config';
const config: ConfigService = new ConfigService(`.env`);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(config['envConfig']['PORT']);
  console.log(`Server is listening on port ${config['envConfig']['PORT']}`)
}

bootstrap();
