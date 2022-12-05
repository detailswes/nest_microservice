import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPerson } from './interfaces/document.interface';
import { Document, DocsDocument } from './schemas/document.schema';
@Injectable()
export class DocumentsService {
  constructor(
    @InjectModel(Document.name)
    private readonly DocumentModel: Model<DocsDocument>,
  ) {}

  public async addDocuments(person: IPerson): Promise<any> {
    const DocumentModel = new this.DocumentModel(person);
    return await DocumentModel.save();
  }
  public async getDocuments(user_id: IPerson): Promise<any> {
    console.log(user_id)
   return await this.DocumentModel.find({ user_id: user_id });
     
  }
}
