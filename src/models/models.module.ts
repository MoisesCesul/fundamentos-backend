import { Module } from "@nestjs/common";
import { CreateModelsController } from "./controller/create-model.controller";
import { FetchRecentModelController } from "./controller/fetch-recent-model.controller";
import { ModelsRepository } from "./repository/models.repository";
import { CreateModelsService } from "./services/create.models.service";
import { FetchRecentModelService } from "./services/fetch.recent.models.service";
import { PrismaService } from "src/prisma.service";

@Module({  
  controllers: [CreateModelsController,FetchRecentModelController],
  providers: [CreateModelsService,ModelsRepository,FetchRecentModelService,PrismaService]
})
export class ModelsModule {}