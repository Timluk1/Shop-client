import { Container } from "@/shared/ui/Container"
import { ShopCards } from "@/entities/Product"
import { PageHeader } from "@/shared/ui/PageHeader";
import ShopSectionImg from "@/../public/images/shop-background.png";

export default function Favorites() {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Favorites", href: "/favorites" },
    ];

    return (
        <div className="w-full h-full">
            <div
                style={{ backgroundImage: `url(${ShopSectionImg.src})` }}
                className="bg-cover bg-center h-64 w-full min-h-80"
            >
                <PageHeader title="Favorites" breadcrumbItems={breadcrumbItems}/>
            </div>
            <Container>
                <ShopCards />
            </Container>
        </div>
    )
}
