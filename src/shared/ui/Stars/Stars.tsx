import StarIcon from "@/../public/icons/star.svg";
import Image from "next/image";

interface IStarsProps {
    count: number;
}

export const Stars: React.FC<IStarsProps> = ({ count }) => {
    return (
        <ul className="flex gap-5">
            {Array.from({ length: count }).map((_, index) => (
              <li key={index}>
                <Image src={StarIcon} alt="star" />
                </li>
            ))}
        </ul>
    );
};
