import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PersonDocument = Person & Document;
@Schema()
export class Person {
  @Prop()
  name: string;
  @Prop()
  birthdate: Date;
  @Prop()
  birthcountry: string;
  @Prop()
  language: string;
  @Prop()
  telephone: number;
  @Prop({ type: Array })
  title: any;
}

export const PersonSchema = SchemaFactory.createForClass(Person);
