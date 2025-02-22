import { IProduct } from "@/shared/api/apiTypes";
import { Stars } from "@/shared/ui/Stars";

interface IProductInfoProps {
    product: IProduct;
}

export const ProductInfo: React.FC<IProductInfoProps> = ({ product }) => {
    return (
        <div>
            <div></div>
            <div>
                <h1>{product.name}</h1>
                <p>Rub. {product.price}</p>
                <Stars count={5} />
            </div>
        </div>
    );
};
