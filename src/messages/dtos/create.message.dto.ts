import { IsString, IsDecimal, IsNumber } from 'class-validator';

export class CreatemessageDto {
  @IsString()
  content: String;

  @IsNumber()
  amount: Number;

  map_data: Human;
}

class Human {
  @IsString()
  age: String;
}
