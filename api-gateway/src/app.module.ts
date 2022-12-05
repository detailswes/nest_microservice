import { Module, MiddlewareConsumer } from '@nestjs/common';
import { ClientProxyFactory } from '@nestjs/microservices';
import { PersonsController } from './controllers/persons.controller';
import { ConfigService } from './services/config/config.service';
import { ConfigModule } from '@nestjs/config';
import { DocumentsController } from './controllers/documents.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [PersonsController,DocumentsController],
  providers: [
    ConfigService,
    {
      provide: 'PERSONS_SERVICE',
      useFactory: (configService: ConfigService) => {
        const personsServiceOptions = configService.get('personsService');
        return ClientProxyFactory.create(personsServiceOptions);
      },
      inject: [ConfigService],
    },
    {
      provide: 'DOCUMENTS_SERVICE',
      useFactory: (configService: ConfigService) => {
        const documentsServiceOptions = configService.get('documentsService');
        return ClientProxyFactory.create(documentsServiceOptions);
      },
      inject: [ConfigService],
    },
  ],
})
export class AppModule {}
