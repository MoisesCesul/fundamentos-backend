import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import {  z } from 'zod';
import { ZodValidationPipe } from '../../pipes/zod-validation-pipe';
import { EditModelsService } from "../services/edit-models.service";
   const editsModelsBodySchema = z.object({
      id: z.string().min(36),
      nome: z.string().min(3)
    });

    const bodyValidationPipe = new ZodValidationPipe(editsModelsBodySchema);
    type editsModelsBodySchema = z.infer<typeof editsModelsBodySchema>;



    @Controller('/models')
    export class EditProductController {
        constructor(private UpdateModels: EditModelsService){}


        @Post("/edit")
        @HttpCode(200)
        async handle(@Body(bodyValidationPipe) body: editsModelsBodySchema){
          const {
                id,
                nome
          } = body;
            await this.UpdateModels.execute({
              id,
              nome
            });
        }



    }   



       
    
