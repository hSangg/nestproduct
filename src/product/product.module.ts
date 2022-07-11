import {Module} from '@nestjs/common'
import {MongooseModule} from '@nestjs/mongoose'
import {ProductController} from './controllers/product/product.controller'
import {
	Product,
	ProductSchemas,
} from './schemas/product.schemas'
import {ProductService} from './services/product/product.service'

@Module({
	imports: [
		MongooseModule.forFeature([
			{name: Product.name, schema: ProductSchemas},
		]),
	],
	controllers: [ProductController],
	providers: [ProductService],
})
export class ProductModule {}
