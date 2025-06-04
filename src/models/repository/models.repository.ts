import { Injectable } from "@nestjs/common";

import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma.service";
@Injectable()
export class ModelsRepository {
    constructor(private prisma: PrismaService) { }

    async findRecents(): Promise<Array<Prisma.ModeloUncheckedCreateInput> | null> {
        const modelo = this.prisma.modelo.findMany();
        return modelo
    }


    async findById(id: string): Promise<Prisma.ModeloUncheckedCreateInput | null> {
        const modelo = this.prisma.modelo.findUnique({
            where: {
                id,
            }
        });
        return modelo
    }

    async findByName(nome: string): Promise<Prisma.ModeloUncheckedCreateInput | null> {
        const modelo = this.prisma.modelo.findUnique({
            where: {
                nome,
            }
        });
        return modelo
    }

    async create(model: Prisma.ModeloUncheckedCreateInput): Promise<Prisma.ModeloUncheckedCreateInput> {
        return await this.prisma.modelo.create({
            data: model
        });

    }
    async DeleteById(id: string) {
        const status = this.prisma.modelo.delete({
            where: {
                id
            }
        })
    }

    async updateById(id:string,name:string): Promise<Prisma.ModeloUncheckedCreateInput | null> {

        const productFindById = await this.findById(id);
        if (!productFindById) return null;

        const updatedProduct = await this.prisma.modelo.update({
            where: { id },
            data: {
                nome: name,
            }
        });

        return updatedProduct;
    }

}