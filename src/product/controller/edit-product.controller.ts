import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import {  z } from 'zod';
import { ZodValidationPipe } from '../../pipes/zod-validation-pipe';
import { CreateProductService } from "../services/create.product.service";
import { Category } from "@prisma/client";
import { EditProductService } from "../services/edit-product.service";

    const updateProductBodySchema = z.object({
      id: z.string().min(36),
     name: z.string().min(3),
      price: z.number().min(3),
      description: z.string().optional(), 
      stockAvailable: z.number(),
      isAvailable: z.boolean(),
      category: z.enum([Category.BIRD,Category.FOOD,Category.GAMES,Category.NON,Category.SEX_SHOP]),
      tags: z.array(z.string())
    });

    const bodyValidationPipe = new ZodValidationPipe(updateProductBodySchema);
    type createProductBodySchema = z.infer<typeof updateProductBodySchema>;


    @Controller('/products')
    export class EditProductController {
        constructor(private UpdateProduct: EditProductService){}


        @Post("/edit")
        @HttpCode(200)
        async handle(@Body(bodyValidationPipe) body: createProductBodySchema){
          const {
                id,
                name,
                price,
                description,
                stockAvailable,
                isAvailable,
                category,
                tags,
          } = body;
            await this.UpdateProduct.execute({
              id,
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



       
    
