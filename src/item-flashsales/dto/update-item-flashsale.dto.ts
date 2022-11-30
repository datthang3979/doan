
import { IsNumber, IsInt, IsOptional, IsNumberString } from 'class-validator';
import {  ApiProperty } from '@nestjs/swagger';


export class UpdateItemFlashsaleDto {
  @IsNumber()
  // @Type(() => Number)
  @IsOptional()
  @ApiProperty({ required: false })
  discount?: number;

  @IsOptional()
  @ApiProperty({ required: false })
  @IsInt()
  quantity?: number;
}
