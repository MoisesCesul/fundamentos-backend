import { Module } from "@nestjs/common";
import { CreateProductController } from "./controller/create-product.controller";
import { FetchRecentProductController } from "./controller/fetch-recent-products.controller";
import { FetchRecentProductService } from "./services/fetch.recent.products.service";
import { ProductsRepository } from "./repository/products.repository";
import { CreateProductService } from "./services/create.product.service";
import { PrismaService } from "src/prisma.service";


@Module({
  controllers: [CreateProductController,FetchRecentProductController],
  providers: [CreateProductService,ProductsRepository,FetchRecentProductService,PrismaService],
})
export class ProductsModule {}