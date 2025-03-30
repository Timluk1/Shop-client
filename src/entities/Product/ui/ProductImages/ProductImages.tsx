"use client"

import Image from "next/image"
import { IProduct } from "@/shared/api/apiTypes"
import { useState } from "react"

interface IProductImagesProps {
    product: IProduct
}

const layoutImageVarianta = {
    default: "no-cover rounded-xl outline outline-2 outline-[white] duration-300 cursor-pointer w-[100px] h-[100px] flex-shrink-0 transition-all ease-in-out",
    active: "no-cover rounded-xl outline outline-2 outline-golden-400 duration-300 cursor-pointer w-[100px] h-[100px] flex-shrink-0 transition-all ease-in-out"
}

export const ProductImages: React.FC<IProductImagesProps> = ({ product }) => {
    const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

    const onChangeActiveImage = (index: number) => {
        setActiveImageIndex(index);
    }

    return (
        <div className="flex gap-6">
            {/* Колонка миниатюр */}
            <div className="flex flex-col gap-4 w-[100px]">
                {product.images.map((src, index) => (
                    <div
                        key={index}
                        onClick={() => onChangeActiveImage(index)}
                        className={index === activeImageIndex ? layoutImageVarianta.active : layoutImageVarianta.default}
                    >
                        <Image
                            src={src}
                            alt={product.name}
                            width={100}
                            height={100}
                            className="rounded-xl object-cover w-full h-full"
                        />
                    </div>
                ))}
            </div>

            {/* Основное изображение */}
            <div className="w-[453px] h-[500px] max-w-full max-h-full">
                <Image
                    className="rounded-xl object-contain w-full h-full"
                    src={product.images[activeImageIndex]}
                    width={453}
                    height={500}
                    alt={product.name}
                />
            </div>
        </div>
    )
}
