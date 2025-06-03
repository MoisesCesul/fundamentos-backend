import { Injectable } from "@nestjs/common";
import { ProductsRepository } from "../repository/products.repository";

@Injectable()
export class FetchRecentProductService {

  constructor(private productRepository: ProductsRepository) { }

async execute(){
        const model= await this.productRepository.findRecents();
        return model;
        
    }
}