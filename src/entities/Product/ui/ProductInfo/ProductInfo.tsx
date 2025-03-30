"use client";

import { IProduct } from "@/shared/api/apiTypes";
import { Stars } from "@/shared/ui/Stars";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/shared/ui/shadcn/button";
import { styles } from "@/shared/styles";

interface IProductInfoProps {
    product: IProduct;
}

export const ProductInfo: React.FC<IProductInfoProps> = ({ product }) => {
    const { name, price, images, fullDescription } = product;
    const [activeImage, setActiveImage] = useState<string>(images[0]);

    return (
        <div className="flex justify-between mt-9 gap-28">
            <div className="flex gap-8">
                <ul className="flex flex-col gap-8">
                    {images.map((image, index) => <li key={index}>
                        <button>
                            <Image width={80} height={80} src={image} alt="image" />
                        </button>
                    </li>)}
                </ul>
                <Image width={400} height={400} src={activeImage} alt="image" />
            </div>
            <div className="max-w-2xl">
                <h1 className={styles.productTitle}>{name}</h1>
                <p className={styles.productPrice}>Rub. {price}</p>
                <Stars count={5} />
                <p>{fullDescription}</p>
                <div className="flex gap-2">
                    <Button className="px-4" variant="third">
                        +
                    </Button>
                    <Button className="px-4" variant="third">
                        1
                    </Button>
                    <Button className="px-4" variant="third">
                        -
                    </Button>
                </div>
                <Button variant="third">
                    Add to cart
                </Button>
            </div>
        </div>
    );
};
