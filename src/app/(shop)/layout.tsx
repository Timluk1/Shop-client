import { Header } from "@/widgets/Header";
import { Container } from "@/shared/ui/Container";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div>
            <Container>
                <Header />
            </Container>
            {children}
        </div>
    );
}
