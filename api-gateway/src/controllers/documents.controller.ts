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
    private readonly documentsServiceClient: ClientProxy,
    @Inject('PERSONS_SERVICE')
    private readonly personsServiceClient: ClientProxy,
  ) {}

  @Post('/add')
  public async addDocuments(
    @Body() RequestBody: CreateDocumetsDto,
  ): Promise<any> {
    const addedDocument = await this.documentsServiceClient
      .send<any>({ cmd: 'AddDocuments' }, RequestBody)
      .toPromise();
    return addedDocument;
  }
  @Get('/list/:user_id')
  public async GetDocuments(@Param() Params: GetDocumetsDto): Promise<any> {
    const addedDocument = await this.documentsServiceClient
      .send<any>({ cmd: 'GetDocuments' }, Params)
      .toPromise();
    return addedDocument;
  }
  @Get('/:user_id')
  public async getDocuments(@Param() Params: GetDocumetsDto): Promise<any> {
    const user = await this.personsServiceClient
      .send<any>({ cmd: 'get_user' }, Params)
      .toPromise();
    const documents = await this.documentsServiceClient
      .send<any>({ cmd: 'get_documents' }, Params)
      .toPromise();
    let data = documents.map((element) => {
      return `<${user.language}>${element.title}<${user.language}>`;
    });
    return data;
  }
}
