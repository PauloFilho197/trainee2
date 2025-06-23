import { IsInt, IsString, IsNotEmpty } from "class-validator";
import { Type, Transform } from 'class-transformer';

export class CreateTimeDto{

    @IsString()
     @IsNotEmpty()
     @Transform(({ value }) => 
    typeof value === 'string'
      ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
      : value,
  )
    name: string;

    @IsString()
    @IsNotEmpty()
    state: string;

    @IsString()
    @IsNotEmpty()
    country: string;

    @IsInt()
    @Type(() => Number) 
    titles: number;

    @IsInt()
    @Type(() => Number) 
    founded: number;



}