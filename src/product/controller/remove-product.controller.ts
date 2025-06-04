import { Body, Controller, Delete, HttpCode } from "@nestjs/common";
import { z } from "zod";
import { DeleteProductsService } from "../services/delete.product.service";
import { ZodValidationPipe } from "src/pipes/zod-validation-pipe";

   const deleteProductsBodySchema = z.object({
      id: z.string().min(36)
    });

 const bodyValidationPipe = new ZodValidationPipe(deleteProductsBodySchema);
    type DeleteProductsBodySchema = z.infer<typeof deleteProductsBodySchema>;


@Controller('/products')
export class DeleteProductsController {
    constructor(private deletetProductsService: DeleteProductsService){}
      
    @Delete()
    @HttpCode(204)
    async handle(@Body(bodyValidationPipe) body: DeleteProductsBodySchema){
        const data = await this.deletetProductsService.execute(body);
        return null;
    }
}