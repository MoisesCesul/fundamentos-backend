import { Injectable } from "@nestjs/common";
import { ProductsRepository } from "./products.repository";
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

interface CreateProductServiceRequest {
    name: string,
    price: number,
    description?: string,
    stockAvailable: number,
    isAvailable: boolean,
    category: Category,
    tags: string[],
}

type CreateProductServiceResponse = {
    product: CreateProductService;

}

@Injectable()
export class CreateProductService {
    constructor(private productsRepository: ProductsRepository) { }

    async execute({
    name,
    price,
    description,
    stockAvailable,
    isAvailable,
    category,
    tags,


    }: CreateProductServiceRequest){
        const productWithSameName = await this.productsRepository.findByName(name);
        if(productWithSameName){
            throw new Error("Product already exists ");
        }
        const product = {
           name,
           price,
           description,
           stockAvailable,
           isAvailable,
           category,
           tags, 
        }
        const newProduct = await this.productsRepository.create(product);
        return  {
            product:{
            id: newProduct.id?.toString() || "",
            name,
            price,
            description,
            stockAvailable,
            isAvailable,
            category,
            tags, 
            }
        }
    }
}