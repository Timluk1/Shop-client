import { ReactNode } from "react";

interface IContainerProps {
    children: ReactNode;
}

export const Container: React.FC<IContainerProps> = ({ children }) => {
    return <div className="max-w-[1286px] w-full mx-auto">{children}</div>;
};
