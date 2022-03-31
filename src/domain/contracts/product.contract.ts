import { Product } from '../entities/product';

export interface ProductContract {
    getAll(): Promise<Product[]>;
}