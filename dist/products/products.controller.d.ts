import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getProducts(): Promise<any>;
    getProductById(id: string): Promise<any>;
    createProduct(productData: any): Promise<any>;
    updateProduct(id: string, productData: any): Promise<any>;
    deleteProduct(id: string): Promise<any>;
}
