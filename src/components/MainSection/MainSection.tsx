import HomeSectionImg from "@/../public/images/home-background.png";
import { Discover } from "../Discover";
import { Container } from "@/components/Container"

export const MainSection = () => {
    return (
        <main
            style={{ backgroundImage: `url(${HomeSectionImg.src})` }}
            className="bg-cover bg-center h-64 w-full min-h-[650px]"
        >
            <Container>
                <Discover className="" />
            </Container>
        </main>
    );
};
