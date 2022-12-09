import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsDateString, IsNotEmpty } from 'class-validator';
export class CreatePersonDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;
  @ApiProperty({})
  @IsNotEmpty()
  @IsDateString()
  birthdate: Date;
  @ApiProperty()
  @IsNotEmpty()
  birthcountry: string;
  @ApiProperty()
  language: string;
  @ApiProperty()
  @IsNotEmpty()
  telephone: number;
//   @ApiProperty({
//     type: Array,
//     default: ["Alice's adventures in Wonderland", 'Alice im Wunderland'],
//   })
//   title: any;
}
