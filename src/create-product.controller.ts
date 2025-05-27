import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import {  z } from 'zod';
import { ZodValidationPipe } from './pipes/zod-validation-pipe';
import { CreateProductService } from "./create.product.service";
import { Category } from "@prisma/client";

    const createProductBodySchema = z.object({
      name: z.string().min(3),
      price: z.number().min(3),
      description: z.string().optional(), 
      stockAvailable: z.number(),
      isAvailable: z.boolean(),
      category: z.enum([Category.BIRD,Category.FOOD,Category.GAMES,Category.NON,Category.SEX_SHOP]),
      tags: z.array(z.string())

    });

    const bodyValidationPipe = new ZodValidationPipe(createProductBodySchema);
    type createProductBodySchema = z.infer<typeof createProductBodySchema>;


    @Controller('/products')
    export class CreateProductController {
        constructor(private createProduct: CreateProductService){}


        @Post()
        @HttpCode(201)
        async handle(@Body(bodyValidationPipe) body: createProductBodySchema){
          const {
                name,
                price,
                description,
                stockAvailable,
                isAvailable,
                category,
                tags,
          } = body;
            await this.createProduct.execute({
              name,
              price,
              description,
              stockAvailable,
              isAvailable,
              category,
              tags
            });
        }



    }   



       
    
