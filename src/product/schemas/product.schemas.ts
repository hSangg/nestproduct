import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'

export type ProductDocument = Product & Document

@Schema()
export class Product {
	@Prop()
	productId: string

	@Prop()
	name: string

	@Prop()
	createdAt: Date

	@Prop()
	quantity: number
}

export const ProductSchemas = SchemaFactory.createForClass(Product)
