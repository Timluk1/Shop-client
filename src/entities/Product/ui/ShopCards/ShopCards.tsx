import { ShopCardItem } from "../ShopCardItem";
import { axiosInstance, apiPaths } from "@/shared/api/axios";

export interface IProduct {
    id: number;
    name: string;
    shortDescription: string;
    price: number;
    currency: string;
    images: string[];
}

const getAllProducts = async (): Promise<IProduct[]> => {
    const res = await axiosInstance.get(apiPaths.getProducts);
    return await res.data;
};

export const ShopCards = async () => {
    const products = await getAllProducts();
    return (
        <ul className="grid grid-cols-4 gap-[50px]">
            {products.map((product: IProduct) => (
                <li key={product.id}>
                    <ShopCardItem
                        key={product.id}
                        name={product.name}
                        description={product.shortDescription}
                        price={product.price}
                        imageUrl={product.images[0]}
                    />
                </li>
            ))}
        </ul>
    );
};
