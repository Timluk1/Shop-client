"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/../public/icons/logo.svg";
import User from "@/../public/icons/user.svg";
import Heart from "@/../public/icons/heart.svg";
import Cart from "@/../public/icons/cart.svg";
import { useIsAuth } from "@/shared/lib/useIsAuth";

export const Header = () => {
    const { isAuth } = useIsAuth();
    return (
        <header className="flex justify-between items-center pt-8 pb-8 w-full">
            <Link href="/home">
                <div className="flex gap-2">
                    <Image src={Logo} alt="logo" />
                    <p className="font-mont text-2xl leading-[41px] font-bold">
                        Furniro
                    </p>
                </div>
            </Link>
            <nav className="flex items-center gap-20 max-lg:hidden">
                <Link
                    href="/"
                    className="transition duration-300 ease-in-out text-base leading-6 hover:text-golden-400"
                >
                    Home
                </Link>
                <Link
                    href="/shop"
                    className="transition duration-300 ease-in-out text-base leading-6 hover:text-golden-400"
                >
                    Shop
                </Link>
                <Link
                    href="/about"
                    className="transition duration-300 ease-in-out text-base leading-6 hover:text-golden-400"
                >
                    About
                </Link>
                <Link
                    href="/contact"
                    className="transition duration-300 ease-in-out text-base leading-6 hover:text-golden-400"
                >
                    Contact
                </Link>
            </nav>
            <div className="flex items-center gap-10 max-sm:hidden">
                {!isAuth && (
                    <Link href="/auth">
                        <Image src={User} alt="profile" />
                    </Link>
                )}
                <Link href="/home">
                    <Image src={Heart} alt="favorites" />
                </Link>
                <Link href="/home">
                    <Image src={Cart} alt="cart" />
                </Link>
            </div>
        </header>
    );
};
