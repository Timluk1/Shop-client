import ShopSectionImg from "@/../public/images/shop-background.png";
import { ShopHeader } from "@/entities/Product/ui/ShopHeader";
import { ShopCards } from "@/entities/Product/ui/ShopCards";
import { Container } from "@/shared/ui/Container";

const Shop = () => {
    return (
        <div
            style={{ backgroundImage: `url(${ShopSectionImg.src})` }}
            className="bg-cover bg-center h-64 w-full min-h-80"
        >
            <ShopHeader />
            <Container>
                <ShopCards />
            </Container>
        </div>
    );
};

export default Shop;
