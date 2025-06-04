
import { BadRequestException, Body, Controller, Delete, Get, HttpCode, Param } from "@nestjs/common";
import { ZodValidationPipe } from "src/pipes/zod-validation-pipe";
import { z } from "zod";
import { GetModelsService } from "../services/get-product-by-id.models.service";


const getProductsBodySchema = z.object({
    id: z.string().min(36)
});

const bodyValidationPipe = new ZodValidationPipe(getProductsBodySchema);
type GetProductsBodySchema = z.infer<typeof getProductsBodySchema>;

@Controller('/models')
export class GetModelsController {
  constructor(private readonly getModelService: GetModelsService) {}

  @Get(':id')
  @HttpCode(200)
  async handle(@Param('id') id: string) {
    const parsed = getProductsBodySchema.safeParse({ id });
    if (!parsed.success) {
      throw new BadRequestException(parsed.error.format());
    }
    const data = await this.getModelService.execute({ id });
    return data;
  }
}