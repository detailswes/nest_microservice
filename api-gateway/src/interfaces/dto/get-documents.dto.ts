import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsDateString, IsNotEmpty } from 'class-validator';
import { ObjectId } from 'mongoose';
export class GetDocumetsDto {
  @ApiProperty()
  user_id: string;
}
