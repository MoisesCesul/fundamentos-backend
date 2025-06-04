import { PrismaService } from "src/prisma.service";
import { FetchRecentProductService } from "./services/fetch.recent.products.service";
import { FetchRecentProductController } from "./controller/fetch-recent-products.controller";
import { ProductsRepository } from "./repository/products.repository";
import { CreateProductController } from "./controller/create-product.controller";
import { CreateProductService } from "./services/create.product.service";
import { Module } from "@nestjs/common";
import { DeleteProductsController } from "./controller/remove-product.controller";
import { DeleteProductsService } from "./services/delete.product.service";
import { EditProductController } from "./controller/edit-product.controller";
import { EditProductService } from "./services/edit-product.service";
import { GetProductsService } from "./services/get-product-by-id.products.service";
import { GetProductsController } from "./controller/get-product-by-id.products.controller";


@Module({
  controllers: [CreateProductController,FetchRecentProductController,DeleteProductsController,EditProductController,GetProductsController],
  providers: [CreateProductService,ProductsRepository,FetchRecentProductService,PrismaService,DeleteProductsService,EditProductService,GetProductsService],
})
export class ProductsModule {}