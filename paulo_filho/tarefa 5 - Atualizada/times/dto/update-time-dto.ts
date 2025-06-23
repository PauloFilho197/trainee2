import { IsInt, IsString, IsNotEmpty} from "class-validator";
import { Type} from 'class-transformer';

export class UpdatePutTimeDto{

    @IsString()
     @IsNotEmpty()
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