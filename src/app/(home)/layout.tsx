import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}
