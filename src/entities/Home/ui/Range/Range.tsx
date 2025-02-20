import Image from "next/image";
import Dining from "@/../public/images/Dining.png";
import Living from "@/../public/images/Living.png";
import Bedroom from "@/../public/images/Bedroom.png";

export const Range = () => {
    return (
        <div>
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-center">
                    Browse The Range
                </h2>
                <p className="text-gray-600 text-base font-regular text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
            <div className="grid grid-cols-3">
                <div>
                    <Image className="mb-7" src={Dining} alt="Dining" />
                    <p className="text-2xl font-semibold text-gray-800 text-center">
                        Dining
                    </p>
                </div>
                <div>
                    <Image className="mb-7" src={Living} alt="Living" />
                    <p className="text-2xl font-semibold text-gray-800 text-center">
                        Living
                    </p>
                </div>
                <div>
                    <Image className="mb-7" src={Bedroom} alt="Bedroom" />
                    <p className="text-2xl font-semibold text-gray-800 text-center">
                        Bedroom
                    </p>
                </div>
            </div>
        </div>
    );
};
