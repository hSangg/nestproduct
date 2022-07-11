import {
	Body,
	Controller,
	Get,
	Param,
	Post,
	Req,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'
import {Request} from 'express'
import {createProductDto} from 'src/product/dtos/product.dto'
import {ProductService} from 'src/product/services/product/product.service'

@Controller('product')
export class ProductController {
	constructor(private productService: ProductService) {}
	@Get('')
	async getProductList() {
		return this.productService.getProductList()
	}
	@Get(':id')
	async getProductById(@Param() param) {
		return this.productService.getProductById(param?.id)
	}

	@Post('create')
	@UsePipes(ValidationPipe)
	async createProduct(
		@Body() createProductDto: createProductDto
	) {
		return this.productService.createProduct(
			createProductDto.name,
			createProductDto.quantity
		)
	}
}
