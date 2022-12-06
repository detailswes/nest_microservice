import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IPerson } from './interfaces/person.interface';
import { PersonsService } from './persons.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('persons')
export class PersonsController {
  constructor(private readonly PersonsService: PersonsService) {}
  @MessagePattern({ cmd: 'PersonCreated' })
  public async addPersons(userParams: IPerson): Promise<any> {
    return await this.PersonsService.addPersons(userParams);
  }
  @MessagePattern({ cmd: 'get_user' })
  public async getPersons(userParams: IPerson): Promise<any> {
    return await this.PersonsService.getPersons(userParams);
  }
}

