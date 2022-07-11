import {Module} from '@nestjs/common'
import {MongooseModule} from '@nestjs/mongoose'
import {ProductModule} from './product/product.module'

@Module({
	imports: [
		MongooseModule.forRoot(
			'mongodb+srv://sang:1652003@cluster0.jjmnl.mongodb.net/?retryWrites=true&w=majority'
		),

		ProductModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
