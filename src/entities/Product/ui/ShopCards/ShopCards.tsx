import { ShopCardItem } from "../ShopCardItem";
import { axiosInstance, apiPaths } from "@/shared/api/axios";
import { IProduct } from "@/shared/api/apiTypes";

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
                        {...product}
                    />
                </li>
            ))}
        </ul>
    );
};
