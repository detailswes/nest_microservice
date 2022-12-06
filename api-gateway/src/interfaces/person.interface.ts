import { Document } from 'mongoose';
export interface IPerson extends Document {
  id?: string;
  name: string;
  birthdate: Date;
  birthcountry: string;
  language: string;
  telephone: number;
  title: any;
}
