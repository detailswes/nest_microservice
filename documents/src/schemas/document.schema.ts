import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongoose';

export type DocsDocument = Document & Document;
@Schema()
export class Document {
  @Prop({type: Object})
  user_id : ObjectId
  @Prop()
  title: string;
}

export const DocumentSchema = SchemaFactory.createForClass(Document);
