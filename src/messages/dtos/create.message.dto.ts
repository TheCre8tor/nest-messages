import { IsString, IsDecimal, IsNumber } from 'class-validator';

export class CreatemessageDto {
  @IsString()
  content: string;
}
