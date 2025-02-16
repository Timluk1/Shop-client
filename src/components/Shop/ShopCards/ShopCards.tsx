import { ShopCardItem } from "../ShopCardItem";

export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    currency: string;
    imageUrl: string;
    discount: {
        type: string;
        value: number;
        oldPrice: number;
    };
}

const getAllProducts = async (): Promise<IProduct[]> => {
    const res = await fetch("http://localhost:4000/api/products", { cache: "no-store" });
    return await res.json();
}

export const ShopCards = async () => {
    const products = await getAllProducts();
    return (
        <ul className="grid grid-cols-4 gap-[50px]">
            {products.map((product: IProduct) => (
                <li key={product.id}>
                    <ShopCardItem
                        key={product.id}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        imageUrl={product.imageUrl}
                    />
                </li>
            ))}
        </ul>
    );
};