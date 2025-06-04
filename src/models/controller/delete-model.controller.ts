import { Body, Controller, Delete, HttpCode } from "@nestjs/common";
import { ZodValidationPipe } from "src/pipes/zod-validation-pipe";
import { z } from "zod";
import { DeleteModelsService } from "../services/delete-models.service";


const deleteModelsBodySchema = z.object({
    id: z.string().min(36)
});

const bodyValidationPipe = new ZodValidationPipe(deleteModelsBodySchema);
type DeleteModelsBodySchema = z.infer<typeof deleteModelsBodySchema>;

@Controller('/models')
export class DeleteModelsController {
    constructor(private DeletetModelService: DeleteModelsService){}
      
    @Delete()
    @HttpCode(204)
    async handle(@Body(bodyValidationPipe) body: DeleteModelsBodySchema){
        const data = await this.DeletetModelService.execute(body);
        return null;
    }
}