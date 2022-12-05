import {
  Controller,
  Post,
  Put,
  Get,
  Body,
  Delete,
  Inject,
  Param,
  UseGuards,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { IPerson } from 'src/interfaces/person.interface';
import { ApiBearerAuth } from '@nestjs/swagger';
import { ApiTags } from '@nestjs/swagger';
import { CreatePersonDto } from 'src/interfaces/dto/create-person.dto';

@ApiBearerAuth('defaultBearerAuth')
@Controller('persons')
@ApiTags('Persons')
export class PersonsController {
  constructor(
    @Inject('PERSONS_SERVICE')
    private readonly personsServiceClient: ClientProxy,
  ) {}
  @Post('/add')
  public async addPersons(@Body() userRequest: CreatePersonDto): Promise<any> {
      return await this.personsServiceClient
        .send<any>({ cmd: 'PersonCreated' }, userRequest)
        .toPromise();
  }
}
