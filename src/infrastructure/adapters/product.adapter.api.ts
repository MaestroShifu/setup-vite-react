import { Product } from '../../domain/entities/product';
import { ProductContract } from '../../domain/contracts/product.contract';
import httpAxios, { HttpAxios } from '../lib/axios';

const HOST_PATH = `${process.env.EASY_BFF_BACKEND}`;

class ProductAdapterApi implements ProductContract {
    private http: HttpAxios;

    constructor() {
        this.http = httpAxios(HOST_PATH);
    }

  public async getAll(): Promise<Product[]> {
    return this.http.get('products');
  }
}

export default ProductAdapterApi;
