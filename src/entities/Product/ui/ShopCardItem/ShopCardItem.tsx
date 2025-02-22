"use client";

import Image from "next/image";
import { Button } from "@/shared/ui/shadcn/button";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import LikeIcon from "@/../public/icons/like.svg";
import { cn } from "@/shared/lib/utils";
import type { IProduct } from "@/shared/api/apiTypes";
import { useRouter } from "next/navigation";

const hoverStyles = {
    opacity: 1,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
};

const restStyles = {
    width: "100%",
    height: "100%",
    opacity: 0,
};

const MotionLayout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <motion.div
            className="relative bg-gray-400"
            whileHover="hover"
            initial="rest"
        >
            {children}
        </motion.div>
    );
};

const Overlay: React.FC<PropsWithChildren & { className?: string}> = ({
    children,
    className,
}) => {
    return (
        <motion.div
            className={cn(
                "absolute flex justify-center items-center",
                className,
            )}
            variants={{
                hover: hoverStyles,
                rest: restStyles,
            }}
        >
            {children}
        </motion.div>
    );
};

export const ShopCardItem: React.FC<IProduct> = ({
    id,
    name,
    shortDescription,
    price,
    images,
}) => {
    const router = useRouter();

    const handleClickProduct = () => {
        router.push(`/shop/${id}`);
    }

    const handleClickButton = () => {
        
    }

    return (
        <MotionLayout>
            <div onClick={handleClickProduct}>
                <Overlay className="flex flex-col gap-4">
                    <Button onClick={handleClickButton} variant="white">Add to cart</Button>
                    <ul>
                        <li className="flex gap-1">
                            <div className="flex gap-3">
                                <Button variant="noStyle">
                                    <Image src={LikeIcon} alt="Like icon" />
                                    <p className="text-base text-white-100 no-underline">
                                        Like
                                    </p>
                                </Button>
                            </div>
                        </li>
                    </ul>
                </Overlay>
            </div>
            <Image
                src={images[0]}
                alt={name}
                className="mb-4"
                width={500}
                height={600}
            />
            <div className="px-4 pb-8 leading-6">
                <h3 className="text-2xl font-semibold mb-2">{name}</h3>
                <p className="text-gray-500 text-base font-medium leading-4 mb-2">
                    {shortDescription}
                </p>
                <p className="text-xl font-semibold leading-5 mb-2">
                    {price} руб.
                </p>
            </div>
        </MotionLayout>
    );
};
