import { Injectable } from "@nestjs/common";
import { ProductsRepository } from "../repository/products.repository";
import { Category } from "@prisma/client";




interface Product {
    id: string,
    name: string,
    price: number,
    description?: string,
    stockAvailable: number,
    isAvailable: boolean,
    category: Category,
    createdAt: Date | string | null,
    updatedAt: Date |string | null | undefined,
    tags: string[],
}

interface UpdateProductServiceRequest {
    id:string;
    name: string,
    price: number,
    description?: string,
    stockAvailable: number,
    isAvailable: boolean,
    category: Category,
    tags: string[],
}

type UpdateProductServiceResponse = {
    product: UpdateProductServiceRequest;

}

@Injectable()
export class EditProductService {
    constructor(private productsRepository: ProductsRepository) { }

    async execute({
    name,
    price,
    description,
    stockAvailable,
    isAvailable,
    category,
    tags,


    }: UpdateProductServiceRequest){
    const product = {
        name,
        price,
        description,
        stockAvailable,
        isAvailable,
        category,
        tags, 
    }
    const productWithSameName = await this.productsRepository.updateById(product);
    if(productWithSameName != null){
        throw new Error("Product not exists ");
    }

        
    }
}