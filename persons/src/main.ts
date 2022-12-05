import { NestFactory } from '@nestjs/core';
import { PersonsModule } from './persons.module';
import { Transport, TcpOptions } from '@nestjs/microservices';
import { ConfigService } from './services/config/config.service';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.createMicroservice(PersonsModule, {
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: new ConfigService().get('port'),
    },
  } as TcpOptions);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen();
}
bootstrap();
