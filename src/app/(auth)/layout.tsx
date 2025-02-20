import { Container } from "@/shared/ui/Container";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <Container className="h-full flex justify-center items-center">
            {children}
        </Container>
    );
}
