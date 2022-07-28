import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from './common/config';
const config: ConfigService = new ConfigService(`.env`);

async function bootstrap() {
  console.log(config['envConfig']['PORT'])
  const app = await NestFactory.create(AppModule);
  await app.listen(config['envConfig']['PORT']);
  console.log(`Server is litening on port ${config['envConfig']['PORT']}`)
}
bootstrap();
