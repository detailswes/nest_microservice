import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsDateString, IsNotEmpty } from 'class-validator';
import { ObjectId } from 'mongoose';
export class CreateDocumetsDto {
  @ApiProperty({ default: '638deb14650a46ad011a857d' })
  @IsNotEmpty()
  user_id: ObjectId;
  @ApiProperty()
  @IsNotEmpty()
  title: string;
}
