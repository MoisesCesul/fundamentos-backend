import { Injectable } from "@nestjs/common";
import { ProductsRepository } from "../repository/products.repository";






interface DeleteProductServiceRequest {
    id: string,
}


@Injectable()
export class DeleteModelService {
    constructor(private productsRepository: ProductsRepository) { }

    async execute(request: DeleteProductServiceRequest){
        const id = request.id;
        const productWithSameName = await this.productsRepository.DeleteById(id);
    }
}