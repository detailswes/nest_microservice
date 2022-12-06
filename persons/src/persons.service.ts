import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPerson } from './interfaces/person.interface';
import { Person , PersonDocument} from './schemas/person.schema';
@Injectable()
export class PersonsService {
  constructor(
    @InjectModel(Person.name)
    private readonly PersonModel: Model<PersonDocument>,
  ) {}

  public async addPersons(person: IPerson): Promise<any> {
    const PersonModel = new this.PersonModel(person);
    return await PersonModel.save();
  }
  public async getPersons(person: any): Promise<any> {
    const PersonModel = await this.PersonModel.findById(person.user_id);
    return PersonModel;
  }
}
