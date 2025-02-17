import { Button } from "@/shared/ui/shadcn/button";
import { cn } from "@/shared/lib/utils";

interface IDiscover {
    className?: string;
}

export const Discover: React.FC<IDiscover> = ({ className }) => {
    return (
        <div
            className={cn(
                "bg-beige-400 w-[643px] h-[443px] p-[62px_41px]",
                className,
            )}
        >
            <p className="text-gray-700 text-base tracking-[3px] font-semibold">
                New Arrival
            </p>
            <h1 className="text-golden-400 text-[52px] leading-[65px] font-poppins font-bold">
                Discover Our New Collection
            </h1>
            <p className="mb-[46px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
            </p>
            <Button size="big" className="uppercase">buy now</Button>
        </div>
    );
};
