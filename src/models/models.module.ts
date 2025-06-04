import { Module } from "@nestjs/common";
import { CreateModelsController } from "./controller/create-model.controller";
import { FetchRecentModelController } from "./controller/fetch-recent-model.controller";
import { ModelsRepository } from "./repository/models.repository";
import { CreateModelsService } from "./services/create-models.service";
import { FetchRecentModelService } from "./services/fetch-recent.models.service";
import { PrismaService } from "src/prisma.service";
import { DeleteModelsController } from "./controller/delete-model.controller";
import { DeleteModelsService } from "./services/delete-models.service";
import { EditProductController } from "./controller/edit-models.controller";
import { EditModelsService } from "./services/edit-models.service";

@Module({  
  controllers: [CreateModelsController,FetchRecentModelController,DeleteModelsController,EditProductController],
  providers: [CreateModelsService,ModelsRepository,FetchRecentModelService,PrismaService,DeleteModelsService,EditModelsService]
})
export class ModelsModule {}