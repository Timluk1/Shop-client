import { Container } from "@/shared/ui/Container";
import { PropsWithChildren } from "react";
import Background from "@/assets/Auth-background.png"

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div className="w-full h-full">
            <div style={{ backgroundImage: `url(${Background.src})` }} className="absolute w-full h-full bg-no-repeat bg-cover"></div>
            <Container className="relative h-full flex justify-center items-center bg-[url(${Background})] bg-cover bg-center bg-no-repeat">
                {children}
            </Container>
        </div>
    );
}
