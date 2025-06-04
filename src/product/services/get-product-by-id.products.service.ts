import { Injectable } from "@nestjs/common";
import { ProductsRepository } from "../repository/products.repository";


interface GetProductsServiceRequest {
    id: string,
}


@Injectable()
export class GetProductsService {
    constructor(private productsRepository: ProductsRepository) { }

    async execute(request: GetProductsServiceRequest){
        const id = request.id;
        const productFound = await this.productsRepository.findById(id);
        if(productFound ==  null){
            throw new Error("Models not found")
        }
        return productFound;
    }
}