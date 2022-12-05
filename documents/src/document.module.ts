import { Module } from '@nestjs/common';
import { DocumentsController } from './document.controller';
import { DocumentsService } from './document.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoConfigService } from './services/config/mongo-config.service';
import { ConfigModule } from '@nestjs/config';
import { Document, DocumentSchema } from './schemas/document.schema';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      useClass: MongoConfigService,
    }),
    MongooseModule.forFeatureAsync([
      {
        name: Document.name,
        useFactory: () => {
          const schema = DocumentSchema;
          return schema;
        },
      },
    ]),
  ],
  controllers: [DocumentsController],
  providers: [DocumentsService],
})
export class DocumentModule {}
