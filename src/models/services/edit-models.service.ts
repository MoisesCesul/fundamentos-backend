import { Injectable } from "@nestjs/common";
import { Category } from "@prisma/client";
import { ModelsRepository } from "../repository/models.repository";




interface Product {
    id: string,
    name: string,
}
interface UpdateProductServiceRequest {
    id: string;
    nome: string,
}

type UpdateProductServiceResponse = {
    product: UpdateProductServiceRequest;

}

@Injectable()
export class EditModelsService {
    constructor(private modelsRepository: ModelsRepository) { }

    async execute({
        id,
        nome
    }: UpdateProductServiceRequest) {
        const model = {
            id,
            nome
        }
        const productWithSameName = await this.modelsRepository.updateById(model.id,model.nome);
        if (productWithSameName != null) {
            throw new Error("Product not exists ");
        }


    }
}