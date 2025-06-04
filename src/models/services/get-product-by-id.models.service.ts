import { Injectable } from "@nestjs/common";
import { ModelsRepository } from "../repository/models.repository";
import { ExceptionsHandler } from "@nestjs/core/exceptions/exceptions-handler";


interface GetModelsServiceRequest {
    id: string,
}


@Injectable()
export class GetModelsService {
    constructor(private modelsRepository: ModelsRepository) { }

    async execute(request: GetModelsServiceRequest){
        const id = request.id;
        const modelsFound = await this.modelsRepository.findById(id);
        if(modelsFound ==  null){
            throw new Error("Models not found")
        }
        return modelsFound;
    }
}