import { CategoriesModule } from './../categories/categories.module';
import { ImageItemRepository } from './image-item.repository';
import { ItemsRepository } from './items.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';

@Module({
  controllers: [ItemsController],
  providers: [ItemsService],
  imports: [
    TypeOrmModule.forFeature([ItemsRepository]),
    TypeOrmModule.forFeature([ImageItemRepository]),
    CategoriesModule,
  ],
  exports: [ItemsService],
})
export class ItemsModule {}
