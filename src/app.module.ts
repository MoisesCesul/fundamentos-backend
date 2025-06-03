import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { ProductsModule } from "./product/product.module";
import { ModelsModule } from "./models/models.module";



@Module({
  imports: [ProductsModule,ModelsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
