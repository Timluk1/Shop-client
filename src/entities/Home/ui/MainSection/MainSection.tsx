import HomeSectionImg from "@/../public/images/home-background.png";
import { Discover } from "../Discover";
import { Container } from "@/shared/ui/Container";
import { cn } from "@/shared/lib/utils";

interface IMainSectionProps {
    className?: string;
}

export const MainSection: React.FC<IMainSectionProps> = ({ className }) => {
    return (
        <main
            style={{ backgroundImage: `url(${HomeSectionImg.src})` }}
            className={cn(
                "bg-cover bg-center h-64 w-full min-h-[650px]",
                className,
            )}
        >
            <Container className="relative h-full">
                <Discover className="absolute right-0 bottom-24" />
            </Container>
        </main>
    );
};
