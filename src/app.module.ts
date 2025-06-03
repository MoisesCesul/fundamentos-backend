import { Module } from '@nestjs/common';
import { CreateProductController } from './create-product.controller';
import { PrismaService } from './prisma.service';
import { CreateProductService } from './create.product.service';
import { ProductsRepository } from './products.repository';
import { CreateModelsController } from './create-model.controller';
import { CreateModelsService } from './create.models.service';
import { ModelsRepository } from './models.repository';
import { FetchRecentModelController } from './fetch-recent-model.controller';
import { FetchRecentModelService } from './fetch.recent.models.service';
import { FetchRecentProductController } from './fetch-recent-products.controller';
import { FetchRecentProductService } from './fetch.recent.products.service';


@Module({
  imports: [],
  controllers: [CreateProductController,CreateModelsController,FetchRecentModelController,FetchRecentProductController],
  providers: [PrismaService, CreateProductService,ProductsRepository,CreateModelsService,ModelsRepository,FetchRecentModelService,FetchRecentProductService],
})
export class AppModule {}
