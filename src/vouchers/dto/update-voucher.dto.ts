import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateVoucherDto } from './create-voucher.dto';
import { IsString, IsNumber, IsInt, IsDate, IsEnum } from 'class-validator';
import { VoucherType } from '../entities/voucher.entity';
import { Type } from 'class-transformer';
export class UpdateVoucherDto extends PartialType(CreateVoucherDto) {
    @IsString()
    @ApiProperty({ type: String })
    code: string;
  
    @IsEnum(VoucherType)
    @ApiProperty({ enum: VoucherType })
    @IsString()
    type: VoucherType;
  
    @ApiProperty({ type: String })
    @IsString()
    note: string;
  
    @ApiProperty({
      type: Number,
    })
    @IsNumber()
    discount: number;
  
    @ApiProperty({
      type: Number,
    })
    @IsNumber()
    max: number;
  
    @ApiProperty({ type: Number })
    @IsNumber()
    min: number;
  
    @ApiProperty({ type: Number })
    @IsInt()
    quantity: number;
  
    @ApiProperty()
    @IsDate()
    @Type(() => Date)
    startTime: Date;
  
    @ApiProperty()
    @Type(() => Date)
    @IsDate()
    endTime: Date;
}


