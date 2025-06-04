import { BadRequestException, Body, Controller, Delete, Get, HttpCode, Param } from "@nestjs/common";
import { ZodValidationPipe } from "src/pipes/zod-validation-pipe";
import { z } from "zod";
import { GetProductsService } from "../services/get-product-by-id.products.service";


const getProductsBodySchema = z.object({
    id: z.string().min(36)
});

const bodyValidationPipe = new ZodValidationPipe(getProductsBodySchema);
type GetProductsBodySchema = z.infer<typeof getProductsBodySchema>;

@Controller('/products')
export class GetProductsController {
  constructor(private readonly getProductService: GetProductsService) {}

  @Get(':id')
  @HttpCode(200)
  async handle(@Param('id') id: string) {
    const parsed = getProductsBodySchema.safeParse({ id });
    if (!parsed.success) {
      throw new BadRequestException(parsed.error.format());
    }
    const data = await this.getProductService.execute({ id });
    return data;
  }
}