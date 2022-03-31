import ProductAdapterApi from '../adapters/product.adapter.api';
import getAllProducts from '../../application/product/getAllProducts.usecase';

const getProducts = () => {
    const { handler } = getAllProducts(new ProductAdapterApi());
    return handler();
};

const productService = {
    getProducts
}

export default productService;