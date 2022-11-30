import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsDateString, IsString } from 'class-validator';
import { CreateFlashsaleDto } from './create-flashsale.dto';

export class UpdateFlashsaleDto extends PartialType(CreateFlashsaleDto) {
    @IsString()
    @ApiProperty()
    name: string;

    @ApiProperty()
    @IsString()
    description: string;

    @ApiProperty()
    @IsDateString()
    // @Type(() => Date)
    // @Type( () => 'timestamp')
    startSale: Date;

    @ApiProperty()
    // @Type(() => Date)
    @IsDateString()
    endSale: Date;
}
