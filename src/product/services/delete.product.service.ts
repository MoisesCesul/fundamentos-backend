import { Injectable } from "@nestjs/common";
import { ProductsRepository } from "../repository/products.repository";


interface DeleteProductsServiceRequest {
    id: string,
}


@Injectable()
export class DeleteProductsService {
    constructor(private productsRepository: ProductsRepository) { }

    async execute(request: DeleteProductsServiceRequest){
        const id = request.id;
        const product = await this.productsRepository.deleteById(id);
        return product;
    }
}