"use client";

import { Montserrat, Poppins } from "next/font/google";
import { cn } from "@/shared/lib/utils";
import { Toaster } from "@/shared/ui/shadcn/toaster";

import "@/shared/styles/css/globals.css";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-montserrat",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-poppins",
});

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className="h-full">
            <body
                className={cn(montserrat.variable, poppins.variable, "h-full font-poppins")}
            >
                <Toaster />
                <div className="w-full h-full">
                    {children}
                </div>
            </body>
        </html>
    );
}
