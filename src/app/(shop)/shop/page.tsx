import ShopSectionImg from "@/../public/images/shop-background.png";
import { ShopHeader } from "@/components/Shop/ShopHeader";
import { ShopCards } from "@/components/Shop/ShopCards";
import { Container } from "@/components/Global/Container";

const Shop = async () => {
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
