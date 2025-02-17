import { ReactNode } from "react";
import { cn } from "@/shared/lib/utils";

interface IContainerProps {
    children: ReactNode;
    className?: string;
}

export const Container: React.FC<IContainerProps> = ({
    children,
    className,
}) => {
    return (
        <div className={cn("max-w-[1286px] w-full mx-auto", className)}>
            {children}
        </div>
    );
};
