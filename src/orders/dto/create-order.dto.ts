import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsOptional,
  IsArray,
  ValidateNested,
} from 'class-validator';

class ItemOrder {
  itemId: string;
  quantity: number;
}


export enum Role {
  User = "User"
}

export class CreateOrderDto {
  @IsString()
  @ApiProperty({ type: String })
  userId: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ type: String, required: false })
  voucherCode: string;

  @IsString()
  @ApiProperty({ type: String })
  addressShipping: string;

  // @IsEnum({ enum: OrderStatus })
  // @IsOptional()
  // status: OrderStatus;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ type: Number })
  shippingPrice: number;

  @ApiProperty({
    description: 'ItemOrder : {itemId : string, quantity : number}',
  })
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ItemOrder)
  items: ItemOrder[];
}
