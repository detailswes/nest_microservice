import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IPerson } from './interfaces/document.interface';
import { DocumentsService } from './document.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('persons')
export class DocumentsController {
  constructor(private readonly DocumentsService: DocumentsService) {}
  @MessagePattern({ cmd: 'AddDocuments' })
  public async addDocuments(userParams: IPerson): Promise<any> {
    return await this.DocumentsService.addDocuments(userParams);
  }
  @MessagePattern({ cmd: 'GetDocuments' })
  public async GetDocuments(userParams: IPerson): Promise<any> {
    return await this.DocumentsService.GetDocuments(userParams.user_id);
  }
  get_documents;
  @MessagePattern({ cmd: 'get_documents' })
  public async getDocuments(Params: IPerson): Promise<any> {
    return await this.DocumentsService.getDocuments(Params.user_id);
  }
}

