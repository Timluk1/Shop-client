import { Button } from "../ui/button";
import { Container } from "../Container";
import { cn } from "@/lib/utils";

interface IDiscover {
    className?: string;
}

export const Discover: React.FC<IDiscover> = ({ className }) => {
    return (
        <Container>
            <div className={cn("bg-bgPrimary w-[643px] h-[443px] p-[62px_41px]", className)}>
                <p className="text-textPrimary text-base tracking-[3px] font-semibold">New Arrival</p>
                <h1 className="text-textSecondary text-[52px] leading-[65px] font-poppins font-bold">
                    Discover Our New Collection
                </h1>
                <p className="mb-[46px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                </p>
                <Button className="uppercase py-[30px] px-[72px]">buy now</Button>
            </div>
        </Container>
    );
};
