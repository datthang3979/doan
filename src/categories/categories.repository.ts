import { EntityRepository, Repository } from 'typeorm';
import { Category } from './entities/category.entity';
@EntityRepository(Category)
export class CategoriesRepository extends Repository<Category> {}
