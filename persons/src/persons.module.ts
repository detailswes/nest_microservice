import { Module } from '@nestjs/common';
import { PersonsController } from './persons.controller';
import { PersonsService } from './persons.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoConfigService } from './services/config/mongo-config.service';
import { ConfigModule } from '@nestjs/config';
import { Person, PersonSchema } from './schemas/person.schema';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      useClass: MongoConfigService,
    }),
    MongooseModule.forFeatureAsync([
      {
        name: Person.name,
        useFactory: () => {
          const schema = PersonSchema; 
      return schema;
        }
      },
    ]),
  ],
  controllers: [PersonsController],
  providers: [PersonsService],
})
export class PersonsModule {}
