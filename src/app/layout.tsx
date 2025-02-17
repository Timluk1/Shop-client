import type { Metadata } from "next";
import { Header } from "@/widgets/Header";
import { Container } from "@/shared/ui/Container/Container";
import { Montserrat, Poppins } from "next/font/google";
import { cn } from "@/shared/lib/utils";
import "@/shared/styles/globals.css"

export const metadata: Metadata = {
    title: "Furniro",
    description: "Furniro - best project",
};

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
        <html lang="en">
            <body className={cn(montserrat.variable, poppins.variable)}>
                <div className="w-full">
                    <Container>
                        <Header />
                    </Container>
                    {children}
                </div>
            </body>
        </html>
    );
}
