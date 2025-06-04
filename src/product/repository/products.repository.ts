import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma.service";
import { Prisma} from "@prisma/client";
import { ExceptionsHandler } from "@nestjs/core/exceptions/exceptions-handler";
@Injectable()
export class ProductsRepository{
    constructor(private prisma: PrismaService) {}

    async findById(id:string):Promise< Prisma.ProductUncheckedCreateInput | null>{
        const product = this.prisma.product.findUnique({
            where:{
                id,
            }
        });
        return product
    }

    async  findByName(name:string):Promise< Prisma.ProductUncheckedCreateInput | null>{
        const product = this.prisma.product.findUnique({
            where:{
                name,
            }
        });
        return product
    }

    async create(product: Prisma.ProductUncheckedCreateInput): Promise<Prisma.ProductUncheckedCreateInput>{
        return await this.prisma.product.create({
            data: product
        });
        
    }

    async findRecents(): Promise<Array<Prisma.ProductUncheckedCreateInput> | null>{
        const modelo = this.prisma.product.findMany();
        return modelo
    
    }
    async deleteById(id:string){
        const data = this.prisma.product.delete({
            where:{
                id
            }
        });
        return data;
    }
async updateById(product: Prisma.ProductUncheckedCreateInput): Promise<Prisma.ProductUncheckedCreateInput | null> {
    const id = product.id;
    if (!id) return null;

    const productFindById = await this.findById(id);
    if (!productFindById) return null;

    const updatedProduct = await this.prisma.product.update({
        where: { id },
        data: {
            category: product.category,
            description: product.description,
            name: product.name,
            tags: product.tags,
            stockAvailable: product.stockAvailable,
            price: product.price,
            isAvailable: product.isAvailable
        }
    });

    return updatedProduct;
}


}