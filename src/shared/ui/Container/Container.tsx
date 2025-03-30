import { ReactNode } from "react";
import { cn } from "@/shared/lib/utils";

interface IContainerProps {
    children: ReactNode;
    style?: React.CSSProperties;
    className?: string;
}

export const Container: React.FC<IContainerProps> = ({
    children,
    style,
    className,
}) => {
    return (
        <div style={style} className={cn("max-w-[1286px] w-full mx-auto", className)}>
            {children}
        </div>
    );
};
