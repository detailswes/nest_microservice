import { Document, ObjectId } from 'mongoose';
export interface IPerson extends Document {
  _id?: string;
  user_id: any;
  title: any;
}
