import HomeSectionImg from "@/../public/images/home-background.png";
import { Discover } from "../Discover";
import { Container } from "@/shared/ui/Container"

export const MainSection = () => {
    return (
        <main
            style={{ backgroundImage: `url(${HomeSectionImg.src})` }}
            className="bg-cover bg-center h-64 w-full min-h-[650px]"
        >
            <Container className="relative h-full">
                <Discover className="absolute right-0 bottom-24" />
            </Container>
        </main>
    );
};
