import { Header } from "@/widgets/Header";
import { PropsWithChildren } from "react";
import { Footer } from "@/widgets/Footer";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}
