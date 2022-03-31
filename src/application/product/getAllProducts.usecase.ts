import { ProductContract } from '../../domain/contracts/product.contract';

const getAllProducts = (productContract: ProductContract) => {
    const handler = () => productContract.getAll()

    return {
        handler
    }
}

export default getAllProducts;
