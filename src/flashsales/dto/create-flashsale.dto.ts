
import { ApiProperty } from '@nestjs/swagger';
import { IsString,  IsDateString } from 'class-validator';
// import { ApiProperty}

export enum Role{
  Admin = 'Admin'
}
export class CreateFlashsaleDto {
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

  @ApiProperty({ type: 'array', items: { type: 'string', format: 'binary' } })
  flashSaleBanner: Express.Multer.File[];
}
