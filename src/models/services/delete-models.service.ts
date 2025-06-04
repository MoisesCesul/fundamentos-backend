import { Injectable } from "@nestjs/common";
import { ModelsRepository } from "../repository/models.repository";


interface DeleteModelstServiceRequest {
    id: string,
}


@Injectable()
export class DeleteModelsService {
    constructor(private modelsRepository: ModelsRepository) { }

    async execute(request: DeleteModelstServiceRequest){
        const id = request.id;
        const productWithSameName = await this.modelsRepository.DeleteById(id);
    }
}