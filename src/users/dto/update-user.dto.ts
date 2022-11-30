import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

import {
  IsString,
  IsMobilePhone,
  IsDate,
  IsOptional,
  IsArray,
} from 'class-validator';
// import { Type}
export class UpdateUserDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty()
  @IsOptional()
  @IsMobilePhone('vi-VN')
  phone?: string;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  @Type(() => Date)
  birthday?: Date;

  @ApiProperty({ type: 'string', format: 'binary' })
  @IsOptional()
  avatar?: string;

  @ApiProperty()
  @IsArray()
  @IsOptional()
  address?: string[];
}
