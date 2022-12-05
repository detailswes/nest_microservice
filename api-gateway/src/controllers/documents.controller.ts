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
import { CreateDocumetsDto } from 'src/interfaces/dto/create-documents.dto';
import { GetDocumetsDto } from 'src/interfaces/dto/get-documents.dto';

@ApiBearerAuth('defaultBearerAuth')
@Controller('documents')
@ApiTags('Documents')
export class DocumentsController {
  constructor(
    @Inject('DOCUMENTS_SERVICE')
    private readonly personsServiceClient: ClientProxy,
  ) {}
  @Post('/add_document')
  public async addDocuments(
    @Body() userRequest: CreateDocumetsDto,
  ): Promise<any> {
    return await this.personsServiceClient
      .send<any>({ cmd: 'AddDocuments' }, userRequest)
      .toPromise();
  }
  @Get('/:user_id')
  public async getDocuments(@Param() Params: GetDocumetsDto): Promise<any> {
    console.log(Params,"hhhhhhhhhh");
    return await this.personsServiceClient
      .send<any>({ cmd: 'get_documents' }, Params)
      .toPromise();
  }
}
