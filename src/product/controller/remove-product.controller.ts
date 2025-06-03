import { Body, Controller, Delete, HttpCode } from "@nestjs/common";
import { z } from "zod";
import { DeleteModelService } from "../services/delete.product.service";
import { ZodValidationPipe } from "src/pipes/zod-validation-pipe";

   const deleteModelsBodySchema = z.object({
      id: z.string().min(36)
    });

 const bodyValidationPipe = new ZodValidationPipe(deleteModelsBodySchema);
    type DeleteModelsBodySchema = z.infer<typeof deleteModelsBodySchema>;


@Controller('/products')
export class DeleteModelController {
    constructor(private DeletetModelService: DeleteModelService){}
      
    @Delete()
    @HttpCode(204)
    async handle(@Body(bodyValidationPipe) body: DeleteModelsBodySchema){
        const data = await this.DeletetModelService.execute(body);
        return data;
    }
}