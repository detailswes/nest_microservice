import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { setTimeout } from 'timers/promises';
import { IPerson } from './interfaces/document.interface';
import { Document, DocsDocument } from './schemas/document.schema';
@Injectable()
export class DocumentsService {
  constructor(
    @InjectModel(Document.name)
    private readonly DocumentModel: Model<DocsDocument>,
  ) {}

  public async addDocuments(person: IPerson): Promise<any> {
    let user_id = person.user_id;
    let createddocuments = [];
    for (let element of person.title) {
      const data = {
        title: element,
        user_id,
      };
      const DocumentModel = new this.DocumentModel(data);
      const saveddata = await DocumentModel.save();
      createddocuments.push(saveddata);
    }
    return createddocuments;
  }
  public async getDocuments(user_id: IPerson): Promise<any> {
    return await this.DocumentModel.find({ user_id: user_id });
  }
  public async GetDocuments(user_id: IPerson): Promise<any> {
    return await this.DocumentModel.find({ user_id: user_id });
  }
}
