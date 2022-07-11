import {Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'
import {Model} from 'mongoose'
import {v4 as uuidv4} from 'uuid'
import {
	Product,
	ProductDocument,
} from 'src/product/schemas/product.schemas'

@Injectable()
export class ProductService {
	constructor(
		@InjectModel(Product.name)
		private productModel: Model<ProductDocument>
	) {}

	async getProductList() {
		return await this.productModel.find({})
	}

	async getProductById(id: string) {
		return await this.productModel.findOne({id})
	}

	async createProduct(name: string, quantity: number) {
		const newProduct = new this.productModel({
			id: uuidv4(),
			name,
			quantity,
			createdAt: Date.now(),
		})

		return newProduct.save()
	}
}
